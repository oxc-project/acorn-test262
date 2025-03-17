__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 1141,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 16,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 34,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 31,
              "end": 33,
              "raw": "10",
              "value": 10
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
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
      "start": 37,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 63,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 56,
          "end": 57,
          "expression": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "I",
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
      "type": "EmptyStatement",
      "start": 63,
      "end": 64
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 91,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 91,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 89,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 84,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "I",
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
      "type": "EmptyStatement",
      "start": 91,
      "end": 92
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 116,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 116,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 114,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 116,
      "end": 117
    },
    {
      "type": "ClassDeclaration",
      "start": 118,
      "end": 141,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 139,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 134,
        "end": 135,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 141,
      "end": 142
    },
    {
      "type": "TSEnumDeclaration",
      "start": 143,
      "end": 158,
      "body": {
        "type": "TSEnumBody",
        "start": 151,
        "end": 158,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 153,
            "end": 156,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "one",
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
        "start": 148,
        "end": 150,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 159,
      "end": 174,
      "body": {
        "type": "TSEnumBody",
        "start": 167,
        "end": 174,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 169,
            "end": 172,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "decorators": [],
              "name": "one",
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
        "start": 164,
        "end": 166,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 234,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 221,
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 205,
                "end": 221,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 206,
                    "end": 212
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 214,
                    "end": 220
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 224,
            "end": 234,
            "elements": [
              {
                "type": "Literal",
                "start": 225,
                "end": 226,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 228,
                "end": 233,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 253,
            "decorators": [],
            "name": "emptyObjTuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 256,
            "end": 277,
            "expression": {
              "type": "Identifier",
              "start": 266,
              "end": 277,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 257,
              "end": 265,
              "elementTypes": [
                {
                  "type": "TSTypeLiteral",
                  "start": 258,
                  "end": 260,
                  "members": []
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 262,
                  "end": 264,
                  "members": []
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 298,
            "decorators": [],
            "name": "numStrBoolTuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 301,
            "end": 339,
            "expression": {
              "type": "Identifier",
              "start": 328,
              "end": 339,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 302,
              "end": 327,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 303,
                  "end": 309
                },
                {
                  "type": "TSStringKeyword",
                  "start": 311,
                  "end": 317
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 319,
                  "end": 326
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 352,
            "decorators": [],
            "name": "shorter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 355,
            "end": 390,
            "expression": {
              "type": "Identifier",
              "start": 355,
              "end": 370,
              "decorators": [],
              "name": "numStrBoolTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 374,
              "end": 390,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 375,
                  "end": 381
                },
                {
                  "type": "TSStringKeyword",
                  "start": 383,
                  "end": 389
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 444,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 401,
            "decorators": [],
            "name": "longer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 404,
            "end": 444,
            "expression": {
              "type": "Identifier",
              "start": 404,
              "end": 415,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 419,
              "end": 444,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 420,
                  "end": 426
                },
                {
                  "type": "TSStringKeyword",
                  "start": 428,
                  "end": 434
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 436,
                  "end": 443
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 445,
      "end": 491,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 490,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 469,
            "decorators": [],
            "name": "classCDTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 461,
              "end": 469,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 463,
                "end": 469,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 464,
                    "end": 465,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 465,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 467,
                    "end": 468,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 472,
            "end": 490,
            "elements": [
              {
                "type": "NewExpression",
                "start": 473,
                "end": 480,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 482,
                "end": 489,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 487,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 536,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 535,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 512,
            "decorators": [],
            "name": "interfaceIITuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 515,
            "end": 535,
            "expression": {
              "type": "Identifier",
              "start": 523,
              "end": 535,
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 516,
              "end": 522,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 517,
                  "end": 518,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 518,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 520,
                  "end": 521,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 521,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 580,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 554,
            "decorators": [],
            "name": "classCDATuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 557,
            "end": 580,
            "expression": {
              "type": "Identifier",
              "start": 568,
              "end": 580,
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 558,
              "end": 567,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 559,
                  "end": 560,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 560,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 562,
                  "end": 563,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 563,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 565,
                  "end": 566,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 582,
      "end": 617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 586,
          "end": 616,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 586,
            "end": 597,
            "decorators": [],
            "name": "eleFromCDA1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 600,
            "end": 616,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 600,
              "end": 613,
              "decorators": [],
              "name": "classCDATuple",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 614,
              "end": 615,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 623,
      "end": 658,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 627,
          "end": 657,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 638,
            "decorators": [],
            "name": "eleFromCDA2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 641,
            "end": 657,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 641,
              "end": 654,
              "decorators": [],
              "name": "classCDATuple",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 655,
              "end": 656,
              "raw": "5",
              "value": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 672,
      "end": 709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 676,
          "end": 708,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 676,
            "end": 689,
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 679,
              "end": 689,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 681,
                "end": 689,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 682,
                    "end": 684,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 682,
                      "end": 684,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 686,
                    "end": 688,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 688,
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 692,
            "end": 708,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 693,
                "end": 699,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 695,
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 699,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "MemberExpression",
                "start": 701,
                "end": 707,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 703,
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 704,
                  "end": 707,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 710,
      "end": 742,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 714,
          "end": 741,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 714,
            "end": 717,
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 720,
            "end": 741,
            "expression": {
              "type": "Identifier",
              "start": 738,
              "end": 741,
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 721,
              "end": 737,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 722,
                  "end": 728
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 730,
                  "end": 736
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 743,
      "end": 776,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 747,
          "end": 775,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 747,
            "end": 753,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 756,
            "end": 775,
            "expression": {
              "type": "Identifier",
              "start": 762,
              "end": 775,
              "decorators": [],
              "name": "emptyObjTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 757,
              "end": 761,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 757,
                "end": 759,
                "members": []
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 777,
      "end": 833,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 781,
          "end": 832,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 781,
            "end": 813,
            "decorators": [],
            "name": "unionTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 791,
              "end": 813,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 793,
                "end": 813,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 794,
                    "end": 795,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 794,
                      "end": 795,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 797,
                    "end": 812,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 797,
                        "end": 803
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 806,
                        "end": 812
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 816,
            "end": 832,
            "elements": [
              {
                "type": "NewExpression",
                "start": 817,
                "end": 824,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 822,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 826,
                "end": 831,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 834,
      "end": 903,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 838,
          "end": 902,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 874,
            "decorators": [],
            "name": "unionTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 849,
              "end": 874,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 851,
                "end": 874,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 852,
                    "end": 853,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 852,
                      "end": 853,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 855,
                    "end": 870,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 855,
                        "end": 861
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 864,
                        "end": 870
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 872,
                    "end": 873,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 873,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 877,
            "end": 902,
            "elements": [
              {
                "type": "NewExpression",
                "start": 878,
                "end": 885,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 882,
                  "end": 883,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 887,
                "end": 892,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "NewExpression",
                "start": 894,
                "end": 901,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 899,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 904,
      "end": 960,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 908,
          "end": 959,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 908,
            "end": 945,
            "decorators": [],
            "name": "unionTuple3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 919,
              "end": 945,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 921,
                "end": 945,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 922,
                    "end": 928
                  },
                  {
                    "type": "TSUnionType",
                    "start": 930,
                    "end": 944,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 930,
                        "end": 936
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 938,
                        "end": 944
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 948,
            "end": 959,
            "elements": [
              {
                "type": "Literal",
                "start": 949,
                "end": 951,
                "raw": "10",
                "value": 10
              },
              {
                "type": "Literal",
                "start": 953,
                "end": 958,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 962,
      "end": 1010,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 966,
          "end": 1009,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 966,
            "end": 977,
            "decorators": [],
            "name": "unionTuple4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 980,
            "end": 1009,
            "expression": {
              "type": "Identifier",
              "start": 998,
              "end": 1009,
              "decorators": [],
              "name": "unionTuple3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 981,
              "end": 997,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 982,
                  "end": 988
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 990,
                  "end": 996
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1022,
      "end": 1061,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1026,
          "end": 1060,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1026,
            "end": 1028,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1031,
            "end": 1060,
            "expression": {
              "type": "Identifier",
              "start": 1049,
              "end": 1060,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1032,
              "end": 1048,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1033,
                  "end": 1039
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1041,
                  "end": 1047
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1062,
      "end": 1092,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1066,
          "end": 1091,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1066,
            "end": 1068,
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1071,
            "end": 1091,
            "expression": {
              "type": "Identifier",
              "start": 1079,
              "end": 1091,
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1072,
              "end": 1078,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 1073,
                  "end": 1074,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1073,
                    "end": 1074,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1076,
                  "end": 1077,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1077,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1093,
      "end": 1128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1097,
          "end": 1127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1097,
            "end": 1103,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1106,
            "end": 1127,
            "expression": {
              "type": "Identifier",
              "start": 1116,
              "end": 1127,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1107,
              "end": 1115,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1107,
                "end": 1113
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1129,
      "end": 1140,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1129,
        "end": 1139,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1129,
          "end": 1134,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 1129,
            "end": 1131,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 1132,
            "end": 1133,
            "raw": "2",
            "value": 2
          }
        },
        "right": {
          "type": "Literal",
          "start": 1137,
          "end": 1139,
          "raw": "10",
          "value": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
