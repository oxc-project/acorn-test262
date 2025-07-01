__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 12,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 23
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 30,
              "end": 32
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 26,
            "end": 33
          }
        ],
        "start": 24,
        "end": 35
      },
      "abstract": false,
      "declare": false,
      "start": 16,
      "end": 35
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "typeArguments": null,
          "start": 55,
          "end": 56
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
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
            "accessibility": null,
            "start": 59,
            "end": 60
          }
        ],
        "start": 57,
        "end": 62
      },
      "abstract": false,
      "declare": false,
      "start": 36,
      "end": 62
    },
    {
      "type": "EmptyStatement",
      "start": 62,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          },
          "typeArguments": null,
          "start": 83,
          "end": 84
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
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
            "accessibility": null,
            "start": 87,
            "end": 88
          }
        ],
        "start": 85,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 64,
      "end": 90
    },
    {
      "type": "EmptyStatement",
      "start": 90,
      "end": 91
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
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
            "accessibility": null,
            "start": 112,
            "end": 113
          }
        ],
        "start": 110,
        "end": 115
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 115
    },
    {
      "type": "EmptyStatement",
      "start": 115,
      "end": 116
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 134
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
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
            "accessibility": null,
            "start": 137,
            "end": 138
          }
        ],
        "start": 135,
        "end": 140
      },
      "abstract": false,
      "declare": false,
      "start": 117,
      "end": 140
    },
    {
      "type": "EmptyStatement",
      "start": 140,
      "end": 141
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 155
            },
            "initializer": null,
            "computed": false,
            "start": 152,
            "end": 155
          }
        ],
        "start": 150,
        "end": 157
      },
      "const": false,
      "declare": false,
      "start": 142,
      "end": 157
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 165
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "initializer": null,
            "computed": false,
            "start": 168,
            "end": 171
          }
        ],
        "start": 166,
        "end": 173
      },
      "const": false,
      "declare": false,
      "start": 158,
      "end": 173
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 204,
                "end": 220
              },
              "start": 202,
              "end": 220
            },
            "start": 191,
            "end": 220
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 224,
                "end": 225
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 227,
                "end": 232
              }
            ],
            "start": 223,
            "end": 233
          },
          "definite": false,
          "start": 191,
          "end": 233
        }
      ],
      "declare": false,
      "start": 187,
      "end": 234
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "emptyObjTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 252
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 257,
                  "end": 259
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 261,
                  "end": 263
                }
              ],
              "start": 256,
              "end": 264
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 276
            },
            "start": 255,
            "end": 276
          },
          "definite": false,
          "start": 239,
          "end": 276
        }
      ],
      "declare": false,
      "start": 235,
      "end": 277
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numStrBoolTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 297
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 301,
              "end": 326
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 338
            },
            "start": 300,
            "end": 338
          },
          "definite": false,
          "start": 282,
          "end": 338
        }
      ],
      "declare": false,
      "start": 278,
      "end": 339
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shorter",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 351
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrBoolTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 369
            },
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 373,
              "end": 389
            },
            "start": 354,
            "end": 389
          },
          "definite": false,
          "start": 344,
          "end": 389
        }
      ],
      "declare": false,
      "start": 340,
      "end": 389
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "longer",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 400
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 414
            },
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 418,
              "end": 443
            },
            "start": 403,
            "end": 443
          },
          "definite": false,
          "start": 394,
          "end": 443
        }
      ],
      "declare": false,
      "start": 390,
      "end": 443
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "classCDTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 464
                    },
                    "typeArguments": null,
                    "start": 463,
                    "end": 464
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 466,
                      "end": 467
                    },
                    "typeArguments": null,
                    "start": 466,
                    "end": 467
                  }
                ],
                "start": 462,
                "end": 468
              },
              "start": 460,
              "end": 468
            },
            "start": 448,
            "end": 468
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 477
                },
                "typeArguments": null,
                "arguments": [],
                "start": 472,
                "end": 479
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 486
                },
                "typeArguments": null,
                "arguments": [],
                "start": 481,
                "end": 488
              }
            ],
            "start": 471,
            "end": 489
          },
          "definite": false,
          "start": 448,
          "end": 489
        }
      ],
      "declare": false,
      "start": 444,
      "end": 490
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "interfaceIITuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 511
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "typeArguments": null,
                  "start": 516,
                  "end": 517
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 520
                  },
                  "typeArguments": null,
                  "start": 519,
                  "end": 520
                }
              ],
              "start": 515,
              "end": 521
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 534
            },
            "start": 514,
            "end": 534
          },
          "definite": false,
          "start": 495,
          "end": 534
        }
      ],
      "declare": false,
      "start": 491,
      "end": 535
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "classCDATuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 553
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 559
                  },
                  "typeArguments": null,
                  "start": 558,
                  "end": 559
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "typeArguments": null,
                  "start": 561,
                  "end": 562
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 565
                  },
                  "typeArguments": null,
                  "start": 564,
                  "end": 565
                }
              ],
              "start": 557,
              "end": 566
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 567,
              "end": 579
            },
            "start": 556,
            "end": 579
          },
          "definite": false,
          "start": 540,
          "end": 579
        }
      ],
      "declare": false,
      "start": 536,
      "end": 580
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "eleFromCDA1",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 596
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDATuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 612
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 613,
              "end": 614
            },
            "optional": false,
            "computed": true,
            "start": 599,
            "end": 615
          },
          "definite": false,
          "start": 585,
          "end": 615
        }
      ],
      "declare": false,
      "start": 581,
      "end": 616
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "eleFromCDA2",
            "optional": false,
            "typeAnnotation": null,
            "start": 626,
            "end": 637
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDATuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 653
            },
            "property": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 654,
              "end": 655
            },
            "optional": false,
            "computed": true,
            "start": 640,
            "end": 656
          },
          "definite": false,
          "start": 626,
          "end": 656
        }
      ],
      "declare": false,
      "start": 622,
      "end": 657
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 683
                    },
                    "typeArguments": null,
                    "start": 681,
                    "end": 683
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 685,
                      "end": 687
                    },
                    "typeArguments": null,
                    "start": 685,
                    "end": 687
                  }
                ],
                "start": 680,
                "end": 688
              },
              "start": 678,
              "end": 688
            },
            "start": 675,
            "end": 688
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 694
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 698
                },
                "optional": false,
                "computed": false,
                "start": 692,
                "end": 698
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 702
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 706
                },
                "optional": false,
                "computed": false,
                "start": 700,
                "end": 706
              }
            ],
            "start": 691,
            "end": 707
          },
          "definite": false,
          "start": 675,
          "end": 707
        }
      ],
      "declare": false,
      "start": 671,
      "end": 708
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 716
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 720,
              "end": 736
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 740
            },
            "start": 719,
            "end": 740
          },
          "definite": false,
          "start": 713,
          "end": 740
        }
      ],
      "declare": false,
      "start": 709,
      "end": 741
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 752
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 756,
                "end": 758
              },
              "start": 756,
              "end": 760
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "emptyObjTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 761,
              "end": 774
            },
            "start": 755,
            "end": 774
          },
          "definite": false,
          "start": 746,
          "end": 774
        }
      ],
      "declare": false,
      "start": 742,
      "end": 775
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 793,
                      "end": 794
                    },
                    "typeArguments": null,
                    "start": 793,
                    "end": 794
                  },
                  {
                    "type": "TSUnionType",
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
                    ],
                    "start": 796,
                    "end": 811
                  }
                ],
                "start": 792,
                "end": 812
              },
              "start": 790,
              "end": 812
            },
            "start": 780,
            "end": 812
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 820,
                  "end": 821
                },
                "typeArguments": null,
                "arguments": [],
                "start": 816,
                "end": 823
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 825,
                "end": 830
              }
            ],
            "start": 815,
            "end": 831
          },
          "definite": false,
          "start": 780,
          "end": 831
        }
      ],
      "declare": false,
      "start": 776,
      "end": 832
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 851,
                      "end": 852
                    },
                    "typeArguments": null,
                    "start": 851,
                    "end": 852
                  },
                  {
                    "type": "TSUnionType",
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
                    ],
                    "start": 854,
                    "end": 869
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 871,
                      "end": 872
                    },
                    "typeArguments": null,
                    "start": 871,
                    "end": 872
                  }
                ],
                "start": 850,
                "end": 873
              },
              "start": 848,
              "end": 873
            },
            "start": 837,
            "end": 873
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 882
                },
                "typeArguments": null,
                "arguments": [],
                "start": 877,
                "end": 884
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 886,
                "end": 891
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 898
                },
                "typeArguments": null,
                "arguments": [],
                "start": 893,
                "end": 900
              }
            ],
            "start": 876,
            "end": 901
          },
          "definite": false,
          "start": 837,
          "end": 901
        }
      ],
      "declare": false,
      "start": 833,
      "end": 902
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionTuple3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 921,
                    "end": 927
                  },
                  {
                    "type": "TSUnionType",
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
                    ],
                    "start": 929,
                    "end": 943
                  }
                ],
                "start": 920,
                "end": 944
              },
              "start": 918,
              "end": 944
            },
            "start": 907,
            "end": 944
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 948,
                "end": 950
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 952,
                "end": 957
              }
            ],
            "start": 947,
            "end": 958
          },
          "definite": false,
          "start": 907,
          "end": 958
        }
      ],
      "declare": false,
      "start": 903,
      "end": 959
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionTuple4",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 976
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 980,
              "end": 996
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "unionTuple3",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 1008
            },
            "start": 979,
            "end": 1008
          },
          "definite": false,
          "start": 965,
          "end": 1008
        }
      ],
      "declare": false,
      "start": 961,
      "end": 1009
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1025,
            "end": 1027
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
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
              ],
              "start": 1031,
              "end": 1047
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1059
            },
            "start": 1030,
            "end": 1059
          },
          "definite": false,
          "start": 1025,
          "end": 1059
        }
      ],
      "declare": false,
      "start": 1021,
      "end": 1060
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1065,
            "end": 1067
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1073
                  },
                  "typeArguments": null,
                  "start": 1072,
                  "end": 1073
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1075,
                    "end": 1076
                  },
                  "typeArguments": null,
                  "start": 1075,
                  "end": 1076
                }
              ],
              "start": 1071,
              "end": 1077
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "classCDTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 1078,
              "end": 1090
            },
            "start": 1070,
            "end": 1090
          },
          "definite": false,
          "start": 1065,
          "end": 1090
        }
      ],
      "declare": false,
      "start": 1061,
      "end": 1091
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1096,
            "end": 1102
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1106,
                "end": 1112
              },
              "start": 1106,
              "end": 1114
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "numStrTuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1126
            },
            "start": 1105,
            "end": 1126
          },
          "definite": false,
          "start": 1096,
          "end": 1126
        }
      ],
      "declare": false,
      "start": 1092,
      "end": 1127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1128,
            "end": 1130
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1131,
            "end": 1132
          },
          "optional": false,
          "computed": true,
          "start": 1128,
          "end": 1133
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1136,
          "end": 1138
        },
        "start": 1128,
        "end": 1138
      },
      "directive": null,
      "start": 1128,
      "end": 1139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1139
}
```
