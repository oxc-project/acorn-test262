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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 31,
              "end": 33,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 37,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 63,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 61,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "c",
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
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 56,
          "end": 57,
          "expression": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 91,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 89,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "d",
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
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 84,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 116,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 114,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "e",
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
            "typeAnnotation": null,
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
      "type": "EmptyStatement",
      "start": 116,
      "end": 117
    },
    {
      "type": "ClassDeclaration",
      "start": 118,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 134,
        "end": 135,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 139,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "f",
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
            "typeAnnotation": null,
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
      "type": "EmptyStatement",
      "start": 141,
      "end": 142
    },
    {
      "type": "TSEnumDeclaration",
      "start": 143,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 150,
        "name": "E1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 153,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 156,
            "name": "one",
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
        "start": 151,
        "end": 158,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 153,
            "end": 156,
            "id": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "name": "one",
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
      "type": "TSEnumDeclaration",
      "start": 159,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 166,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 169,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 172,
            "name": "one",
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
        "start": 167,
        "end": 174,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 169,
            "end": 172,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "name": "one",
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
      "type": "VariableDeclaration",
      "start": 188,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 221,
            "name": "numStrTuple",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 228,
                "end": 233,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 253,
            "name": "emptyObjTuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 256,
            "end": 277,
            "expression": {
              "type": "Identifier",
              "start": 266,
              "end": 277,
              "name": "numStrTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 298,
            "name": "numStrBoolTuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 301,
            "end": 339,
            "expression": {
              "type": "Identifier",
              "start": 328,
              "end": 339,
              "name": "numStrTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 352,
            "name": "shorter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 355,
            "end": 390,
            "expression": {
              "type": "Identifier",
              "start": 355,
              "end": 370,
              "name": "numStrBoolTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 401,
            "name": "longer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 404,
            "end": 444,
            "expression": {
              "type": "Identifier",
              "start": 404,
              "end": 415,
              "name": "numStrTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 469,
            "name": "classCDTuple",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 465,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 467,
                    "end": 468,
                    "typeName": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 468,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 477,
                  "end": 478,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 482,
                "end": 489,
                "callee": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 487,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 512,
            "name": "interfaceIITuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 515,
            "end": 535,
            "expression": {
              "type": "Identifier",
              "start": 523,
              "end": 535,
              "name": "classCDTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 518,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 520,
                  "end": 521,
                  "typeName": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 521,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 554,
            "name": "classCDATuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 557,
            "end": 580,
            "expression": {
              "type": "Identifier",
              "start": 568,
              "end": 580,
              "name": "classCDTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 560,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 562,
                  "end": 563,
                  "typeName": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 563,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 565,
                  "end": 566,
                  "typeName": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 586,
            "end": 597,
            "name": "eleFromCDA1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 600,
            "end": 616,
            "object": {
              "type": "Identifier",
              "start": 600,
              "end": 613,
              "name": "classCDATuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 614,
              "end": 615,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 638,
            "name": "eleFromCDA2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 641,
            "end": 657,
            "object": {
              "type": "Identifier",
              "start": 641,
              "end": 654,
              "name": "classCDATuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 655,
              "end": 656,
              "value": 5,
              "raw": "5"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 676,
            "end": 689,
            "name": "t10",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 682,
                      "end": 684,
                      "name": "E1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 686,
                    "end": 688,
                    "typeName": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 688,
                      "name": "E2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "object": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 695,
                  "name": "E1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 699,
                  "name": "one",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              {
                "type": "MemberExpression",
                "start": 701,
                "end": 707,
                "object": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 703,
                  "name": "E2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 704,
                  "end": 707,
                  "name": "one",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 714,
            "end": 717,
            "name": "t11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 720,
            "end": 741,
            "expression": {
              "type": "Identifier",
              "start": 738,
              "end": 741,
              "name": "t10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 747,
            "end": 753,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 756,
            "end": 775,
            "expression": {
              "type": "Identifier",
              "start": 762,
              "end": 775,
              "name": "emptyObjTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 781,
            "end": 813,
            "name": "unionTuple",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 794,
                      "end": 795,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 821,
                  "end": 822,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 826,
                "end": 831,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 874,
            "name": "unionTuple2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 852,
                      "end": 853,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 873,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 882,
                  "end": 883,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 887,
                "end": 892,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "NewExpression",
                "start": 894,
                "end": 901,
                "callee": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 899,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 908,
            "end": 945,
            "name": "unionTuple3",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 953,
                "end": 958,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 966,
            "end": 977,
            "name": "unionTuple4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 980,
            "end": 1009,
            "expression": {
              "type": "Identifier",
              "start": 998,
              "end": 1009,
              "name": "unionTuple3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1026,
            "end": 1028,
            "name": "t3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1031,
            "end": 1060,
            "expression": {
              "type": "Identifier",
              "start": 1049,
              "end": 1060,
              "name": "numStrTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1066,
            "end": 1068,
            "name": "t9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1071,
            "end": 1091,
            "expression": {
              "type": "Identifier",
              "start": 1079,
              "end": 1091,
              "name": "classCDTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 1073,
                    "end": 1074,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1076,
                  "end": 1077,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1077,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1097,
            "end": 1103,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1106,
            "end": 1127,
            "expression": {
              "type": "Identifier",
              "start": 1116,
              "end": 1127,
              "name": "numStrTuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1129,
      "end": 1140,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1129,
        "end": 1139,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1129,
          "end": 1134,
          "object": {
            "type": "Identifier",
            "start": 1129,
            "end": 1131,
            "name": "t4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 1132,
            "end": 1133,
            "value": 2,
            "raw": "2"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 1137,
          "end": 1139,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
