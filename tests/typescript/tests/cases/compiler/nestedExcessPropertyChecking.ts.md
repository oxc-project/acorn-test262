__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17,
                      "end": 18
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 21,
                        "end": 27
                      },
                      "start": 19,
                      "end": 27
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 17,
                    "end": 27
                  }
                ],
                "start": 15,
                "end": 29
              },
              "start": 13,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 12,
            "end": 29
          }
        ],
        "start": 10,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 51
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 50,
                    "end": 60
                  }
                ],
                "start": 48,
                "end": 62
              },
              "start": 46,
              "end": 62
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 62
          }
        ],
        "start": 43,
        "end": 64
      },
      "declare": false,
      "start": 33,
      "end": 65
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 87,
                        "end": 93
                      },
                      "start": 85,
                      "end": 93
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 84,
                    "end": 93
                  }
                ],
                "start": 82,
                "end": 95
              },
              "start": 80,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 95
          }
        ],
        "start": 77,
        "end": 97
      },
      "declare": false,
      "start": 67,
      "end": 98
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 113
                    },
                    "typeArguments": null,
                    "start": 111,
                    "end": 113
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 118
                    },
                    "typeArguments": null,
                    "start": 116,
                    "end": 118
                  }
                ],
                "start": 111,
                "end": 118
              },
              "start": 109,
              "end": 118
            },
            "start": 106,
            "end": 118
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 121,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 129
              },
              "typeArguments": null,
              "start": 127,
              "end": 129
            },
            "start": 121,
            "end": 129
          },
          "definite": false,
          "start": 106,
          "end": 129
        }
      ],
      "declare": false,
      "start": 100,
      "end": 130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 164
          }
        ],
        "start": 152,
        "end": 166
      },
      "declare": false,
      "start": 142,
      "end": 167
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 175
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 180,
            "end": 190
          }
        ],
        "start": 178,
        "end": 192
      },
      "declare": false,
      "start": 168,
      "end": 193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 202
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 210,
                "end": 216
              },
              "start": 208,
              "end": 216
            },
            "accessibility": null,
            "static": false,
            "start": 207,
            "end": 216
          }
        ],
        "start": 205,
        "end": 218
      },
      "declare": false,
      "start": 195,
      "end": 219
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ab2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 234
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 234
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 239
                    },
                    "typeArguments": null,
                    "start": 237,
                    "end": 239
                  }
                ],
                "start": 232,
                "end": 239
              },
              "start": 230,
              "end": 239
            },
            "start": 227,
            "end": 239
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 242,
              "end": 244
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 250
              },
              "typeArguments": null,
              "start": 248,
              "end": 250
            },
            "start": 242,
            "end": 250
          },
          "definite": false,
          "start": 227,
          "end": 250
        }
      ],
      "declare": false,
      "start": 221,
      "end": 251
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 269
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "initializer": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 276,
              "end": 279
            },
            "computed": false,
            "start": 272,
            "end": 279
          }
        ],
        "start": 270,
        "end": 281
      },
      "const": false,
      "declare": false,
      "start": 263,
      "end": 281
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 296
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 299,
                        "end": 302
                      },
                      "start": 297,
                      "end": 302
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 292,
                    "end": 302
                  }
                ],
                "start": 290,
                "end": 304
              },
              "start": 288,
              "end": 304
            },
            "start": 287,
            "end": 304
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
            },
            "optional": false,
            "computed": false,
            "start": 307,
            "end": 310
          },
          "definite": false,
          "start": 287,
          "end": 310
        }
      ],
      "declare": false,
      "start": 283,
      "end": 311
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 331,
                      "end": 335
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 338,
                        "end": 341
                      },
                      "start": 336,
                      "end": 341
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 331,
                    "end": 341
                  }
                ],
                "start": 329,
                "end": 343
              },
              "start": 327,
              "end": 343
            },
            "start": 326,
            "end": 343
          },
          "init": {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 346,
            "end": 349
          },
          "definite": false,
          "start": 326,
          "end": 349
        }
      ],
      "declare": false,
      "start": 322,
      "end": 350
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverridesInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 390,
        "end": 404
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 424,
                      "end": 427
                    },
                    "start": 424,
                    "end": 427
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 430,
                      "end": 433
                    },
                    "start": 430,
                    "end": 433
                  }
                ],
                "start": 424,
                "end": 433
              },
              "start": 422,
              "end": 433
            },
            "accessibility": null,
            "static": false,
            "start": 413,
            "end": 433
          }
        ],
        "start": 407,
        "end": 435
      },
      "declare": false,
      "start": 385,
      "end": 435
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 456
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "something",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 459,
                                "end": 468
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 470,
                                  "end": 473
                                },
                                "start": 468,
                                "end": 473
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 459,
                              "end": 473
                            }
                          ],
                          "start": 457,
                          "end": 475
                        }
                      ],
                      "start": 456,
                      "end": 476
                    },
                    "start": 449,
                    "end": 476
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "variables",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 490
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "overrides",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 498,
                                      "end": 507
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "OverridesInput",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 510,
                                          "end": 524
                                        },
                                        "typeArguments": null,
                                        "start": 510,
                                        "end": 524
                                      },
                                      "start": 508,
                                      "end": 524
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 498,
                                    "end": 525
                                  }
                                ],
                                "start": 492,
                                "end": 527
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Partial",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 530,
                                  "end": 537
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeLiteral",
                                      "members": [
                                        {
                                          "type": "TSPropertySignature",
                                          "computed": false,
                                          "optional": true,
                                          "readonly": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "overrides",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 544,
                                            "end": 553
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "OverridesInput",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 556,
                                                "end": 570
                                              },
                                              "typeArguments": null,
                                              "start": 556,
                                              "end": 570
                                            },
                                            "start": 554,
                                            "end": 570
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 544,
                                          "end": 571
                                        }
                                      ],
                                      "start": 538,
                                      "end": 573
                                    }
                                  ],
                                  "start": 537,
                                  "end": 574
                                },
                                "start": 530,
                                "end": 574
                              }
                            ],
                            "start": 492,
                            "end": 574
                          },
                          "start": 490,
                          "end": 574
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 481,
                        "end": 574
                      }
                    ],
                    "start": 479,
                    "end": 575
                  }
                ],
                "start": 449,
                "end": 575
              },
              "start": 447,
              "end": 575
            },
            "start": 443,
            "end": 575
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variables",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 589
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "overrides",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 593,
                        "end": 602
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 604,
                        "end": 609
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 593,
                      "end": 609
                    }
                  ],
                  "start": 591,
                  "end": 611
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 580,
                "end": 611
              }
            ],
            "start": 578,
            "end": 613
          },
          "definite": false,
          "start": 443,
          "end": 613
        }
      ],
      "declare": false,
      "start": 437,
      "end": 614
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unrelated",
        "optional": false,
        "typeAnnotation": null,
        "start": 637,
        "end": 646
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 650
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 653,
                "end": 656
              },
              "start": 651,
              "end": 656
            },
            "accessibility": null,
            "static": false,
            "start": 649,
            "end": 656
          }
        ],
        "start": 647,
        "end": 658
      },
      "declare": false,
      "start": 627,
      "end": 658
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VariablesA",
        "optional": false,
        "typeAnnotation": null,
        "start": 670,
        "end": 680
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 692
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverridesInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 709
                },
                "typeArguments": null,
                "start": 695,
                "end": 709
              },
              "start": 693,
              "end": 709
            },
            "accessibility": null,
            "static": false,
            "start": 683,
            "end": 710
          }
        ],
        "start": 681,
        "end": 712
      },
      "declare": false,
      "start": 660,
      "end": 712
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VariablesB",
        "optional": false,
        "typeAnnotation": null,
        "start": 723,
        "end": 733
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 745
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverridesInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 762
                },
                "typeArguments": null,
                "start": 748,
                "end": 762
              },
              "start": 746,
              "end": 762
            },
            "accessibility": null,
            "static": false,
            "start": 736,
            "end": 763
          }
        ],
        "start": 734,
        "end": 765
      },
      "declare": false,
      "start": 713,
      "end": 765
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Unrelated",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 779,
                      "end": 788
                    },
                    "typeArguments": null,
                    "start": 779,
                    "end": 788
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "variables",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 793,
                          "end": 802
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "VariablesA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 804,
                                  "end": 814
                                },
                                "typeArguments": null,
                                "start": 804,
                                "end": 814
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "VariablesB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 817,
                                  "end": 827
                                },
                                "typeArguments": null,
                                "start": 817,
                                "end": 827
                              }
                            ],
                            "start": 804,
                            "end": 827
                          },
                          "start": 802,
                          "end": 827
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 793,
                        "end": 827
                      }
                    ],
                    "start": 791,
                    "end": 829
                  }
                ],
                "start": 779,
                "end": 829
              },
              "start": 777,
              "end": 829
            },
            "start": 773,
            "end": 829
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variables",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 847
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "overrides",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 859,
                        "end": 868
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 870,
                        "end": 875
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 859,
                      "end": 875
                    }
                  ],
                  "start": 849,
                  "end": 891
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 838,
                "end": 891
              }
            ],
            "start": 832,
            "end": 893
          },
          "definite": false,
          "start": 773,
          "end": 893
        }
      ],
      "declare": false,
      "start": 767,
      "end": 894
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 934,
        "end": 936
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "primary",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 952
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "__typename",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 956,
                          "end": 966
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "Feature",
                              "raw": "'Feature'",
                              "start": 969,
                              "end": 978
                            },
                            "start": 969,
                            "end": 978
                          },
                          "start": 967,
                          "end": 978
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 956,
                        "end": 978
                      }
                    ],
                    "start": 954,
                    "end": 980
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "colors",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 985,
                          "end": 991
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "light",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 995,
                                  "end": 1000
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1002,
                                    "end": 1008
                                  },
                                  "start": 1000,
                                  "end": 1008
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 995,
                                "end": 1009
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dark",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1010,
                                  "end": 1014
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1016,
                                    "end": 1022
                                  },
                                  "start": 1014,
                                  "end": 1022
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1010,
                                "end": 1022
                              }
                            ],
                            "start": 993,
                            "end": 1024
                          },
                          "start": 991,
                          "end": 1024
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 985,
                        "end": 1024
                      }
                    ],
                    "start": 983,
                    "end": 1026
                  }
                ],
                "start": 954,
                "end": 1026
              },
              "start": 952,
              "end": 1026
            },
            "accessibility": null,
            "static": false,
            "start": 945,
            "end": 1027
          }
        ],
        "start": 939,
        "end": 1029
      },
      "declare": false,
      "start": 929,
      "end": 1030
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1037,
        "end": 1039
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "primary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1055
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "__typename",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1059,
                          "end": 1069
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "Feature",
                              "raw": "'Feature'",
                              "start": 1072,
                              "end": 1081
                            },
                            "start": 1072,
                            "end": 1081
                          },
                          "start": 1070,
                          "end": 1081
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1059,
                        "end": 1081
                      }
                    ],
                    "start": 1057,
                    "end": 1083
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "colors",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1088,
                          "end": 1094
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "light",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1098,
                                  "end": 1103
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1105,
                                    "end": 1111
                                  },
                                  "start": 1103,
                                  "end": 1111
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1098,
                                "end": 1111
                              }
                            ],
                            "start": 1096,
                            "end": 1113
                          },
                          "start": 1094,
                          "end": 1113
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1088,
                        "end": 1113
                      }
                    ],
                    "start": 1086,
                    "end": 1115
                  }
                ],
                "start": 1057,
                "end": 1115
              },
              "start": 1055,
              "end": 1115
            },
            "accessibility": null,
            "static": false,
            "start": 1048,
            "end": 1116
          }
        ],
        "start": 1042,
        "end": 1118
      },
      "declare": false,
      "start": 1032,
      "end": 1119
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 1126,
        "end": 1131
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1134,
              "end": 1136
            },
            "typeArguments": null,
            "start": 1134,
            "end": 1136
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1141
            },
            "typeArguments": null,
            "start": 1139,
            "end": 1141
          }
        ],
        "start": 1134,
        "end": 1141
      },
      "declare": false,
      "start": 1121,
      "end": 1142
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "response",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1160,
                  "end": 1165
                },
                "typeArguments": null,
                "start": 1160,
                "end": 1165
              },
              "start": 1158,
              "end": 1165
            },
            "start": 1150,
            "end": 1165
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1174,
                  "end": 1181
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "colors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1193,
                        "end": 1199
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "light",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1215,
                              "end": 1220
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1222,
                              "end": 1223
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1215,
                            "end": 1223
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dark",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1237,
                              "end": 1241
                            },
                            "value": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 1243,
                              "end": 1244
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1237,
                            "end": 1244
                          }
                        ],
                        "start": 1201,
                        "end": 1255
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1193,
                      "end": 1255
                    }
                  ],
                  "start": 1183,
                  "end": 1262
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1174,
                "end": 1262
              }
            ],
            "start": 1168,
            "end": 1265
          },
          "definite": false,
          "start": 1150,
          "end": 1265
        }
      ],
      "declare": false,
      "start": 1144,
      "end": 1266
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 1295,
        "end": 1303
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1312,
              "end": 1314
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1316,
                "end": 1322
              },
              "start": 1314,
              "end": 1322
            },
            "accessibility": null,
            "static": false,
            "start": 1312,
            "end": 1323
          }
        ],
        "start": 1306,
        "end": 1325
      },
      "declare": false,
      "start": 1290,
      "end": 1325
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 1331,
        "end": 1343
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1354
            },
            "typeArguments": null,
            "start": 1346,
            "end": 1354
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "description",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1363,
                  "end": 1374
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1376,
                        "end": 1382
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 1385,
                        "end": 1389
                      }
                    ],
                    "start": 1376,
                    "end": 1389
                  },
                  "start": 1374,
                  "end": 1389
                },
                "accessibility": null,
                "static": false,
                "start": 1363,
                "end": 1389
              }
            ],
            "start": 1357,
            "end": 1391
          }
        ],
        "start": 1346,
        "end": 1391
      },
      "declare": false,
      "start": 1326,
      "end": 1392
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1401,
        "end": 1410
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1454
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BaseItem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1456,
                    "end": 1464
                  },
                  "typeArguments": null,
                  "start": 1456,
                  "end": 1464
                },
                "start": 1456,
                "end": 1466
              },
              "start": 1454,
              "end": 1466
            },
            "accessibility": null,
            "static": false,
            "start": 1449,
            "end": 1467
          }
        ],
        "start": 1413,
        "end": 1469
      },
      "declare": false,
      "start": 1396,
      "end": 1469
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1475,
        "end": 1488
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1500
            },
            "typeArguments": null,
            "start": 1491,
            "end": 1500
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1539,
                  "end": 1544
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExtendedItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1546,
                        "end": 1558
                      },
                      "typeArguments": null,
                      "start": 1546,
                      "end": 1558
                    },
                    "start": 1546,
                    "end": 1560
                  },
                  "start": 1544,
                  "end": 1560
                },
                "accessibility": null,
                "static": false,
                "start": 1539,
                "end": 1561
              }
            ],
            "start": 1503,
            "end": 1563
          }
        ],
        "start": 1491,
        "end": 1563
      },
      "declare": false,
      "start": 1470,
      "end": 1563
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "TEST_VALUE",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExtendedValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1596
                },
                "typeArguments": null,
                "start": 1583,
                "end": 1596
              },
              "start": 1581,
              "end": 1596
            },
            "start": 1571,
            "end": 1596
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1605,
                  "end": 1610
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1623,
                            "end": 1625
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1627,
                            "end": 1628
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1623,
                          "end": 1628
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1630,
                            "end": 1641
                          },
                          "value": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1643,
                            "end": 1647
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1630,
                          "end": 1647
                        }
                      ],
                      "start": 1622,
                      "end": 1648
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1659,
                            "end": 1661
                          },
                          "value": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1663,
                            "end": 1664
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1659,
                          "end": 1664
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1666,
                            "end": 1677
                          },
                          "value": {
                            "type": "Literal",
                            "value": "wigglytubble",
                            "raw": "'wigglytubble'",
                            "start": 1679,
                            "end": 1693
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1666,
                          "end": 1693
                        }
                      ],
                      "start": 1658,
                      "end": 1694
                    }
                  ],
                  "start": 1612,
                  "end": 1701
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1605,
                "end": 1701
              }
            ],
            "start": 1599,
            "end": 1703
          },
          "definite": false,
          "start": 1571,
          "end": 1703
        }
      ],
      "declare": false,
      "start": 1565,
      "end": 1704
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1704
}
```
