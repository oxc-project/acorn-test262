__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ka",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              },
              "start": 6,
              "end": 11
            },
            "start": 4,
            "end": 11
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
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
            "name": "nested",
            "optional": false,
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
                      "name": "ki",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 29
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 27,
                    "end": 29
                  }
                ],
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "start": 17,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 17,
          "end": 31
        }
      ],
      "declare": false,
      "start": 13,
      "end": 32
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
            "name": "other",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              },
              "start": 42,
              "end": 50
            },
            "start": 37,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 50
        }
      ],
      "declare": false,
      "start": 33,
      "end": 51
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
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 62,
                "end": 65
              },
              "start": 60,
              "end": 65
            },
            "start": 56,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 65
        }
      ],
      "declare": false,
      "start": 52,
      "end": 66
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
            "name": "complex",
            "optional": false,
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 83
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
                              "name": "ka",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 87,
                              "end": 89
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 87,
                            "end": 90
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ki",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 91,
                              "end": 93
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 91,
                            "end": 93
                          }
                        ],
                        "start": 85,
                        "end": 95
                      },
                      "start": 83,
                      "end": 95
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 82,
                    "end": 96
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 98
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 100,
                        "end": 106
                      },
                      "start": 98,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 97,
                    "end": 106
                  }
                ],
                "start": 80,
                "end": 108
              },
              "start": 78,
              "end": 108
            },
            "start": 71,
            "end": 108
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 108
        }
      ],
      "declare": false,
      "start": 67,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 113
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ka",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 119
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ka",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 119
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 117,
                    "end": 119
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 130
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 121,
                    "end": 130
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 132
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 112,
              "end": 132
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 142
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 134,
              "end": 142
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 151
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 144,
              "end": 151
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 152
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "complex",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 162
        },
        "start": 111,
        "end": 162
      },
      "directive": null,
      "start": 110,
      "end": 164
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
            "name": "overEmit",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 197
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
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
                                "name": "ka",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 201,
                                "end": 203
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 205,
                                  "end": 211
                                },
                                "start": 203,
                                "end": 211
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 201,
                              "end": 212
                            },
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
                                "start": 213,
                                "end": 214
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 216,
                                  "end": 222
                                },
                                "start": 214,
                                "end": 222
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 213,
                              "end": 222
                            }
                          ],
                          "start": 199,
                          "end": 224
                        },
                        "start": 199,
                        "end": 226
                      },
                      "start": 197,
                      "end": 226
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 196,
                    "end": 227
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 229
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
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 233,
                              "end": 234
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 236,
                                "end": 242
                              },
                              "start": 234,
                              "end": 242
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 233,
                            "end": 243
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ki",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 244,
                              "end": 246
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 248,
                                "end": 254
                              },
                              "start": 246,
                              "end": 254
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 244,
                            "end": 255
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ku",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 256,
                              "end": 258
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 260,
                                "end": 266
                              },
                              "start": 258,
                              "end": 266
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 256,
                            "end": 266
                          }
                        ],
                        "start": 231,
                        "end": 268
                      },
                      "start": 229,
                      "end": 268
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 228,
                    "end": 269
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ke",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 272
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 274,
                        "end": 280
                      },
                      "start": 272,
                      "end": 280
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 270,
                    "end": 281
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ko",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 284
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 286,
                        "end": 292
                      },
                      "start": 284,
                      "end": 292
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 282,
                    "end": 292
                  }
                ],
                "start": 194,
                "end": 294
              },
              "start": 192,
              "end": 294
            },
            "start": 184,
            "end": 294
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 294
        }
      ],
      "declare": false,
      "start": 180,
      "end": 295
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 461
                },
                "value": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 469,
                            "end": 476
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 466,
                          "end": 476
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 478
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 484
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 480,
                      "end": 484
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 463,
                  "end": 485
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 460,
                "end": 485
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 488
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 492,
                        "end": 493
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 492,
                        "end": 493
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 492,
                      "end": 493
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 498,
                        "end": 499
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 495,
                      "end": 499
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 501
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 487,
                "end": 501
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 511
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 503,
                "end": 511
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 513
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "overEmit",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 524
          },
          "definite": false,
          "start": 458,
          "end": 524
        }
      ],
      "declare": false,
      "start": 454,
      "end": 525
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nested2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 538,
                          "end": 545
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 535,
                        "end": 545
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 547
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 553
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 549,
                    "end": 553
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 554
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 529,
              "end": 554
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 557
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 562
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 562
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 561,
                    "end": 562
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 568
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 564,
                    "end": 568
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 570
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 556,
              "end": 570
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 580
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 572,
              "end": 580
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 527,
          "end": 582
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "overEmit",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 593
        },
        "start": 527,
        "end": 593
      },
      "directive": null,
      "start": 526,
      "end": 595
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 595
}
```
