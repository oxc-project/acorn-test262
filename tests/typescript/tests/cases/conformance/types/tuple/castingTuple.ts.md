__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1139,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 15,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 15,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 35,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
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
        "start": 24,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 26,
            "end": 33,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 32,
              "value": 10,
              "raw": "10"
            },
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
      "start": 36,
      "end": 62,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 55,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 59,
            "end": 60,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
      "type": "EmptyStatement",
      "start": 62,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 90,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 83,
          "end": 84,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 87,
            "end": 88,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
      "type": "EmptyStatement",
      "start": 90,
      "end": 91
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 115,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 115,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 113,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
      "type": "EmptyStatement",
      "start": 115,
      "end": 116
    },
    {
      "type": "ClassDeclaration",
      "start": 117,
      "end": 140,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 135,
        "end": 140,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 137,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
      "type": "EmptyStatement",
      "start": 140,
      "end": 141
    },
    {
      "type": "TSEnumDeclaration",
      "start": 142,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 150,
        "end": 157,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 152,
            "end": 155,
            "id": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 158,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 165,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 166,
        "end": 173,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 168,
            "end": 171,
            "id": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 234,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 220,
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 204,
                "end": 220,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 205,
                    "end": 211
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 213,
                    "end": 219
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 223,
            "end": 233,
            "elements": [
              {
                "type": "Literal",
                "start": 224,
                "end": 225,
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 227,
                "end": 232,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 277,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 252,
            "decorators": [],
            "name": "emptyObjTuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 255,
            "end": 276,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 256,
              "end": 264,
              "elementTypes": [
                {
                  "type": "TSTypeLiteral",
                  "start": 257,
                  "end": 259,
                  "members": []
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 261,
                  "end": 263,
                  "members": []
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 265,
              "end": 276,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 339,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 297,
            "decorators": [],
            "name": "numStrBoolTuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 300,
            "end": 338,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 301,
              "end": 326,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 302,
                  "end": 308
                },
                {
                  "type": "TSStringKeyword",
                  "start": 310,
                  "end": 316
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 318,
                  "end": 325
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 327,
              "end": 338,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 389,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 389,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 351,
            "decorators": [],
            "name": "shorter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 354,
            "end": 389,
            "expression": {
              "type": "Identifier",
              "start": 354,
              "end": 369,
              "decorators": [],
              "name": "numStrBoolTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 373,
              "end": 389,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 374,
                  "end": 380
                },
                {
                  "type": "TSStringKeyword",
                  "start": 382,
                  "end": 388
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 443,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 400,
            "decorators": [],
            "name": "longer",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 403,
            "end": 443,
            "expression": {
              "type": "Identifier",
              "start": 403,
              "end": 414,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 418,
              "end": 443,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 419,
                  "end": 425
                },
                {
                  "type": "TSStringKeyword",
                  "start": 427,
                  "end": 433
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 435,
                  "end": 442
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 444,
      "end": 490,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 489,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 468,
            "decorators": [],
            "name": "classCDTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 460,
              "end": 468,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 462,
                "end": 468,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 463,
                    "end": 464,
                    "typeName": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 464,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 466,
                    "end": 467,
                    "typeName": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 467,
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
          },
          "init": {
            "type": "ArrayExpression",
            "start": 471,
            "end": 489,
            "elements": [
              {
                "type": "NewExpression",
                "start": 472,
                "end": 479,
                "callee": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 481,
                "end": 488,
                "callee": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 535,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 534,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 511,
            "decorators": [],
            "name": "interfaceIITuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 514,
            "end": 534,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 515,
              "end": 521,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 516,
                  "end": 517,
                  "typeName": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 519,
                  "end": 520,
                  "typeName": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 520,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 522,
              "end": 534,
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 536,
      "end": 580,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 540,
          "end": 579,
          "id": {
            "type": "Identifier",
            "start": 540,
            "end": 553,
            "decorators": [],
            "name": "classCDATuple",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 556,
            "end": 579,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 557,
              "end": 566,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 558,
                  "end": 559,
                  "typeName": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 559,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 561,
                  "end": 562,
                  "typeName": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 564,
                  "end": 565,
                  "typeName": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 565,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 567,
              "end": 579,
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 581,
      "end": 616,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 585,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 585,
            "end": 596,
            "decorators": [],
            "name": "eleFromCDA1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 599,
            "end": 615,
            "object": {
              "type": "Identifier",
              "start": 599,
              "end": 612,
              "decorators": [],
              "name": "classCDATuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 613,
              "end": 614,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 657,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 637,
            "decorators": [],
            "name": "eleFromCDA2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 640,
            "end": 656,
            "object": {
              "type": "Identifier",
              "start": 640,
              "end": 653,
              "decorators": [],
              "name": "classCDATuple",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 654,
              "end": 655,
              "value": 5,
              "raw": "5"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 671,
      "end": 708,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 675,
          "end": 707,
          "id": {
            "type": "Identifier",
            "start": 675,
            "end": 688,
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 678,
              "end": 688,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 680,
                "end": 688,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 681,
                    "end": 683,
                    "typeName": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 683,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 685,
                    "end": 687,
                    "typeName": {
                      "type": "Identifier",
                      "start": 685,
                      "end": 687,
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 691,
            "end": 707,
            "elements": [
              {
                "type": "MemberExpression",
                "start": 692,
                "end": 698,
                "object": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 694,
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 698,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "MemberExpression",
                "start": 700,
                "end": 706,
                "object": {
                  "type": "Identifier",
                  "start": 700,
                  "end": 702,
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 706,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 709,
      "end": 741,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 740,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 716,
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 719,
            "end": 740,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 720,
              "end": 736,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 721,
                  "end": 727
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 729,
                  "end": 735
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 737,
              "end": 740,
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 742,
      "end": 775,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 746,
          "end": 774,
          "id": {
            "type": "Identifier",
            "start": 746,
            "end": 752,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 755,
            "end": 774,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 756,
              "end": 760,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 756,
                "end": 758,
                "members": []
              }
            },
            "expression": {
              "type": "Identifier",
              "start": 761,
              "end": 774,
              "decorators": [],
              "name": "emptyObjTuple",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 776,
      "end": 832,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 831,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 812,
            "decorators": [],
            "name": "unionTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 790,
              "end": 812,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 792,
                "end": 812,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 793,
                    "end": 794,
                    "typeName": {
                      "type": "Identifier",
                      "start": 793,
                      "end": 794,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUnionType",
                    "start": 796,
                    "end": 811,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 796,
                        "end": 802
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 805,
                        "end": 811
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 815,
            "end": 831,
            "elements": [
              {
                "type": "NewExpression",
                "start": 816,
                "end": 823,
                "callee": {
                  "type": "Identifier",
                  "start": 820,
                  "end": 821,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "Literal",
                "start": 825,
                "end": 830,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 833,
      "end": 902,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 837,
          "end": 901,
          "id": {
            "type": "Identifier",
            "start": 837,
            "end": 873,
            "decorators": [],
            "name": "unionTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 848,
              "end": 873,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 850,
                "end": 873,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 851,
                    "end": 852,
                    "typeName": {
                      "type": "Identifier",
                      "start": 851,
                      "end": 852,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUnionType",
                    "start": 854,
                    "end": 869,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 854,
                        "end": 860
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 863,
                        "end": 869
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 871,
                    "end": 872,
                    "typeName": {
                      "type": "Identifier",
                      "start": 871,
                      "end": 872,
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
          },
          "init": {
            "type": "ArrayExpression",
            "start": 876,
            "end": 901,
            "elements": [
              {
                "type": "NewExpression",
                "start": 877,
                "end": 884,
                "callee": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 882,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "Literal",
                "start": 886,
                "end": 891,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "NewExpression",
                "start": 893,
                "end": 900,
                "callee": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 898,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 903,
      "end": 959,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 907,
          "end": 958,
          "id": {
            "type": "Identifier",
            "start": 907,
            "end": 944,
            "decorators": [],
            "name": "unionTuple3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 918,
              "end": 944,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 920,
                "end": 944,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 921,
                    "end": 927
                  },
                  {
                    "type": "TSUnionType",
                    "start": 929,
                    "end": 943,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 929,
                        "end": 935
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 937,
                        "end": 943
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 947,
            "end": 958,
            "elements": [
              {
                "type": "Literal",
                "start": 948,
                "end": 950,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 952,
                "end": 957,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 961,
      "end": 1009,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 965,
          "end": 1008,
          "id": {
            "type": "Identifier",
            "start": 965,
            "end": 976,
            "decorators": [],
            "name": "unionTuple4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 979,
            "end": 1008,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 980,
              "end": 996,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 981,
                  "end": 987
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 989,
                  "end": 995
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 997,
              "end": 1008,
              "decorators": [],
              "name": "unionTuple3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1021,
      "end": 1060,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1025,
          "end": 1059,
          "id": {
            "type": "Identifier",
            "start": 1025,
            "end": 1027,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1030,
            "end": 1059,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1031,
              "end": 1047,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1032,
                  "end": 1038
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1040,
                  "end": 1046
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 1048,
              "end": 1059,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1061,
      "end": 1091,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1065,
          "end": 1090,
          "id": {
            "type": "Identifier",
            "start": 1065,
            "end": 1067,
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1070,
            "end": 1090,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 1071,
              "end": 1077,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 1072,
                  "end": 1073,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1072,
                    "end": 1073,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1075,
                  "end": 1076,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1075,
                    "end": 1076,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 1078,
              "end": 1090,
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1092,
      "end": 1127,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1096,
          "end": 1126,
          "id": {
            "type": "Identifier",
            "start": 1096,
            "end": 1102,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 1105,
            "end": 1126,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1106,
              "end": 1114,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1106,
                "end": 1112
              }
            },
            "expression": {
              "type": "Identifier",
              "start": 1115,
              "end": 1126,
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1128,
      "end": 1139,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1128,
        "end": 1138,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1128,
          "end": 1133,
          "object": {
            "type": "Identifier",
            "start": 1128,
            "end": 1130,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1131,
            "end": 1132,
            "value": 2,
            "raw": "2"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 1136,
          "end": 1138,
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
