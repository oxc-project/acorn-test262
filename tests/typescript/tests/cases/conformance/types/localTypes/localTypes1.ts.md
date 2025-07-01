__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
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
                    "start": 37,
                    "end": 38
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 37,
                  "end": 38
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 40,
                  "end": 41
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 43,
                  "end": 44
                }
              ],
              "start": 27,
              "end": 50
            },
            "const": false,
            "declare": false,
            "start": 20,
            "end": 50
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
              "start": 61,
              "end": 62
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 77
                      },
                      "typeArguments": null,
                      "start": 76,
                      "end": 77
                    },
                    "start": 74,
                    "end": 77
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 73,
                  "end": 78
                }
              ],
              "start": 63,
              "end": 84
            },
            "abstract": false,
            "declare": false,
            "start": 55,
            "end": 84
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
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
                    "start": 111,
                    "end": 112
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 114,
                        "end": 115
                      },
                      "typeArguments": null,
                      "start": 114,
                      "end": 115
                    },
                    "start": 112,
                    "end": 115
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 111,
                  "end": 116
                }
              ],
              "start": 101,
              "end": 122
            },
            "declare": false,
            "start": 89,
            "end": 122
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "typeArguments": null,
                "start": 136,
                "end": 137
              },
              "start": 136,
              "end": 139
            },
            "declare": false,
            "start": 127,
            "end": 140
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 153
                      },
                      "typeArguments": null,
                      "start": 152,
                      "end": 153
                    },
                    "start": 150,
                    "end": 153
                  },
                  "start": 149,
                  "end": 153
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
                        "start": 161,
                        "end": 162
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 157,
                      "end": 164
                    }
                  ],
                  "start": 156,
                  "end": 165
                },
                "definite": false,
                "start": 149,
                "end": 165
              }
            ],
            "declare": false,
            "start": 145,
            "end": 166
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 172
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 173,
                    "end": 174
                  },
                  "optional": false,
                  "computed": true,
                  "start": 171,
                  "end": 175
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "optional": false,
                "computed": false,
                "start": 171,
                "end": 177
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 183
                },
                "optional": false,
                "computed": false,
                "start": 180,
                "end": 183
              },
              "start": 171,
              "end": 183
            },
            "directive": null,
            "start": 171,
            "end": 184
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "start": 189,
            "end": 198
          }
        ],
        "start": 14,
        "end": 200
      },
      "expression": false,
      "start": 0,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 251
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
                          "start": 266,
                          "end": 267
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 266,
                        "end": 267
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 269,
                        "end": 270
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 272,
                          "end": 273
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 272,
                        "end": 273
                      }
                    ],
                    "start": 252,
                    "end": 283
                  },
                  "const": false,
                  "declare": false,
                  "start": 245,
                  "end": 283
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
                    "start": 298,
                    "end": 299
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 315
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 317,
                              "end": 318
                            },
                            "typeArguments": null,
                            "start": 317,
                            "end": 318
                          },
                          "start": 315,
                          "end": 318
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 314,
                        "end": 319
                      }
                    ],
                    "start": 300,
                    "end": 329
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 292,
                  "end": 329
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 349
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
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
                          "start": 364,
                          "end": 365
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 367,
                              "end": 368
                            },
                            "typeArguments": null,
                            "start": 367,
                            "end": 368
                          },
                          "start": 365,
                          "end": 368
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 364,
                        "end": 369
                      }
                    ],
                    "start": 350,
                    "end": 379
                  },
                  "declare": false,
                  "start": 338,
                  "end": 379
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "typeArguments": null,
                      "start": 397,
                      "end": 398
                    },
                    "start": 397,
                    "end": 400
                  },
                  "declare": false,
                  "start": 388,
                  "end": 401
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 417,
                              "end": 418
                            },
                            "typeArguments": null,
                            "start": 417,
                            "end": 418
                          },
                          "start": 415,
                          "end": 418
                        },
                        "start": 414,
                        "end": 418
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
                              "start": 426,
                              "end": 427
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 422,
                            "end": 429
                          }
                        ],
                        "start": 421,
                        "end": 430
                      },
                      "definite": false,
                      "start": 414,
                      "end": 430
                    }
                  ],
                  "declare": false,
                  "start": 410,
                  "end": 431
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 441
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 442,
                          "end": 443
                        },
                        "optional": false,
                        "computed": true,
                        "start": 440,
                        "end": 444
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 445,
                        "end": 446
                      },
                      "optional": false,
                      "computed": false,
                      "start": 440,
                      "end": 446
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 450
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 451,
                        "end": 452
                      },
                      "optional": false,
                      "computed": false,
                      "start": 449,
                      "end": 452
                    },
                    "start": 440,
                    "end": 452
                  },
                  "directive": null,
                  "start": 440,
                  "end": 453
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 470
                  },
                  "start": 462,
                  "end": 471
                }
              ],
              "start": 235,
              "end": 477
            },
            "expression": false,
            "start": 222,
            "end": 477
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 489,
              "end": 492
            },
            "start": 482,
            "end": 493
          }
        ],
        "start": 216,
        "end": 495
      },
      "expression": false,
      "start": 202,
      "end": 495
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 506,
        "end": 508
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 512,
              "end": 519
            },
            "start": 510,
            "end": 519
          },
          "start": 509,
          "end": 519
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 531,
              "end": 535
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
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
                          "start": 568,
                          "end": 569
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 568,
                        "end": 569
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 571,
                          "end": 572
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 571,
                        "end": 572
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 575
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 574,
                        "end": 575
                      }
                    ],
                    "start": 554,
                    "end": 585
                  },
                  "const": false,
                  "declare": false,
                  "start": 547,
                  "end": 585
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 599
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 622
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 641,
                                "end": 642
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 644,
                                    "end": 645
                                  },
                                  "typeArguments": null,
                                  "start": 644,
                                  "end": 645
                                },
                                "start": 642,
                                "end": 645
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 641,
                              "end": 646
                            }
                          ],
                          "start": 623,
                          "end": 660
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 615,
                        "end": 660
                      },
                      {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 683,
                          "end": 684
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [
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
                                "start": 703,
                                "end": 704
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 706,
                                    "end": 707
                                  },
                                  "typeArguments": null,
                                  "start": 706,
                                  "end": 707
                                },
                                "start": 704,
                                "end": 707
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 703,
                              "end": 708
                            }
                          ],
                          "start": 685,
                          "end": 722
                        },
                        "declare": false,
                        "start": 673,
                        "end": 722
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 740,
                          "end": 741
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 744,
                              "end": 745
                            },
                            "typeArguments": null,
                            "start": 744,
                            "end": 745
                          },
                          "start": 744,
                          "end": 747
                        },
                        "declare": false,
                        "start": 735,
                        "end": 748
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 768,
                                    "end": 769
                                  },
                                  "typeArguments": null,
                                  "start": 768,
                                  "end": 769
                                },
                                "start": 766,
                                "end": 769
                              },
                              "start": 765,
                              "end": 769
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
                                    "start": 777,
                                    "end": 778
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 773,
                                  "end": 780
                                }
                              ],
                              "start": 772,
                              "end": 781
                            },
                            "definite": false,
                            "start": 765,
                            "end": 781
                          }
                        ],
                        "declare": false,
                        "start": 761,
                        "end": 782
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 795,
                                "end": 796
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 797,
                                "end": 798
                              },
                              "optional": false,
                              "computed": true,
                              "start": 795,
                              "end": 799
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 800,
                              "end": 801
                            },
                            "optional": false,
                            "computed": false,
                            "start": 795,
                            "end": 801
                          },
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 804,
                              "end": 805
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 806,
                              "end": 807
                            },
                            "optional": false,
                            "computed": false,
                            "start": 804,
                            "end": 807
                          },
                          "start": 795,
                          "end": 807
                        },
                        "directive": null,
                        "start": 795,
                        "end": 808
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 828,
                          "end": 829
                        },
                        "start": 821,
                        "end": 830
                      }
                    ],
                    "start": 601,
                    "end": 840
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 874,
                          "end": 875
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 894,
                                "end": 895
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 897,
                                    "end": 898
                                  },
                                  "typeArguments": null,
                                  "start": 897,
                                  "end": 898
                                },
                                "start": 895,
                                "end": 898
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 894,
                              "end": 899
                            }
                          ],
                          "start": 876,
                          "end": 913
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 868,
                        "end": 913
                      },
                      {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "J",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 936,
                          "end": 937
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [
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
                                "start": 956,
                                "end": 957
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 959,
                                    "end": 960
                                  },
                                  "typeArguments": null,
                                  "start": 959,
                                  "end": 960
                                },
                                "start": 957,
                                "end": 960
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 956,
                              "end": 961
                            }
                          ],
                          "start": 938,
                          "end": 975
                        },
                        "declare": false,
                        "start": 926,
                        "end": 975
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 993,
                          "end": 994
                        },
                        "typeParameters": null,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "J",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 997,
                              "end": 998
                            },
                            "typeArguments": null,
                            "start": 997,
                            "end": 998
                          },
                          "start": 997,
                          "end": 1000
                        },
                        "declare": false,
                        "start": 988,
                        "end": 1001
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1021,
                                    "end": 1022
                                  },
                                  "typeArguments": null,
                                  "start": 1021,
                                  "end": 1022
                                },
                                "start": 1019,
                                "end": 1022
                              },
                              "start": 1018,
                              "end": 1022
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1030,
                                    "end": 1031
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 1026,
                                  "end": 1033
                                }
                              ],
                              "start": 1025,
                              "end": 1034
                            },
                            "definite": false,
                            "start": 1018,
                            "end": 1034
                          }
                        ],
                        "declare": false,
                        "start": 1014,
                        "end": 1035
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1048,
                                "end": 1049
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1050,
                                "end": 1051
                              },
                              "optional": false,
                              "computed": true,
                              "start": 1048,
                              "end": 1052
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1053,
                              "end": 1054
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1048,
                            "end": 1054
                          },
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1057,
                              "end": 1058
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1059,
                              "end": 1060
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1057,
                            "end": 1060
                          },
                          "start": 1048,
                          "end": 1060
                        },
                        "directive": null,
                        "start": 1048,
                        "end": 1061
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1081,
                          "end": 1082
                        },
                        "start": 1074,
                        "end": 1083
                      }
                    ],
                    "start": 854,
                    "end": 1093
                  },
                  "start": 594,
                  "end": 1093
                }
              ],
              "start": 537,
              "end": 1099
            },
            "alternate": null,
            "start": 527,
            "end": 1099
          }
        ],
        "start": 521,
        "end": 1101
      },
      "expression": false,
      "start": 497,
      "end": 1101
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1112,
        "end": 1114
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1129
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "TSEnumDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1159,
                          "end": 1160
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
                                "start": 1175,
                                "end": 1176
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1175,
                              "end": 1176
                            },
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1178,
                                "end": 1179
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1178,
                              "end": 1179
                            },
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1181,
                                "end": 1182
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1181,
                              "end": 1182
                            }
                          ],
                          "start": 1161,
                          "end": 1192
                        },
                        "const": false,
                        "declare": false,
                        "start": 1154,
                        "end": 1192
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
                          "start": 1207,
                          "end": 1208
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1223,
                                "end": 1224
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1226,
                                    "end": 1227
                                  },
                                  "typeArguments": null,
                                  "start": 1226,
                                  "end": 1227
                                },
                                "start": 1224,
                                "end": 1227
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 1223,
                              "end": 1228
                            }
                          ],
                          "start": 1209,
                          "end": 1238
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 1201,
                        "end": 1238
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1258,
                            "end": 1259
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 1254,
                          "end": 1261
                        },
                        "start": 1247,
                        "end": 1262
                      }
                    ],
                    "start": 1144,
                    "end": 1268
                  },
                  "expression": false,
                  "start": 1132,
                  "end": 1268
                },
                "definite": false,
                "start": 1127,
                "end": 1268
              }
            ],
            "declare": false,
            "start": 1123,
            "end": 1268
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
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1279
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "TSEnumDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1303,
                          "end": 1304
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
                                "start": 1319,
                                "end": 1320
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1319,
                              "end": 1320
                            },
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1322,
                                "end": 1323
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1322,
                              "end": 1323
                            },
                            {
                              "type": "TSEnumMember",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1325,
                                "end": 1326
                              },
                              "initializer": null,
                              "computed": false,
                              "start": 1325,
                              "end": 1326
                            }
                          ],
                          "start": 1305,
                          "end": 1336
                        },
                        "const": false,
                        "declare": false,
                        "start": 1298,
                        "end": 1336
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
                          "start": 1351,
                          "end": 1352
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1367,
                                "end": 1368
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1370,
                                    "end": 1371
                                  },
                                  "typeArguments": null,
                                  "start": 1370,
                                  "end": 1371
                                },
                                "start": 1368,
                                "end": 1371
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 1367,
                              "end": 1372
                            }
                          ],
                          "start": 1353,
                          "end": 1382
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 1345,
                        "end": 1382
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1402,
                            "end": 1403
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 1398,
                          "end": 1405
                        },
                        "start": 1391,
                        "end": 1406
                      }
                    ],
                    "start": 1288,
                    "end": 1412
                  },
                  "id": null,
                  "generator": false,
                  "start": 1282,
                  "end": 1412
                },
                "definite": false,
                "start": 1277,
                "end": 1412
              }
            ],
            "declare": false,
            "start": 1273,
            "end": 1412
          }
        ],
        "start": 1117,
        "end": 1414
      },
      "expression": false,
      "start": 1103,
      "end": 1414
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
        "start": 1422,
        "end": 1423
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1430,
              "end": 1441
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "TSEnumDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1459,
                      "end": 1460
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
                            "start": 1475,
                            "end": 1476
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1475,
                          "end": 1476
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1478,
                            "end": 1479
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1478,
                          "end": 1479
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1481,
                            "end": 1482
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1481,
                          "end": 1482
                        }
                      ],
                      "start": 1461,
                      "end": 1492
                    },
                    "const": false,
                    "declare": false,
                    "start": 1454,
                    "end": 1492
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
                      "start": 1507,
                      "end": 1508
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1523,
                            "end": 1524
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1526,
                                "end": 1527
                              },
                              "typeArguments": null,
                              "start": 1526,
                              "end": 1527
                            },
                            "start": 1524,
                            "end": 1527
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1523,
                          "end": 1528
                        }
                      ],
                      "start": 1509,
                      "end": 1538
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1501,
                    "end": 1538
                  }
                ],
                "start": 1444,
                "end": 1544
              },
              "expression": false,
              "start": 1441,
              "end": 1544
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1430,
            "end": 1544
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1550
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "TSEnumDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1568,
                      "end": 1569
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
                            "start": 1584,
                            "end": 1585
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1584,
                          "end": 1585
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1588
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1587,
                          "end": 1588
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1590,
                            "end": 1591
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1590,
                          "end": 1591
                        }
                      ],
                      "start": 1570,
                      "end": 1601
                    },
                    "const": false,
                    "declare": false,
                    "start": 1563,
                    "end": 1601
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
                      "start": 1616,
                      "end": 1617
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1632,
                            "end": 1633
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1635,
                                "end": 1636
                              },
                              "typeArguments": null,
                              "start": 1635,
                              "end": 1636
                            },
                            "start": 1633,
                            "end": 1636
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1632,
                          "end": 1637
                        }
                      ],
                      "start": 1618,
                      "end": 1647
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1610,
                    "end": 1647
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1667,
                        "end": 1668
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1663,
                      "end": 1670
                    },
                    "start": 1656,
                    "end": 1671
                  }
                ],
                "start": 1553,
                "end": 1677
              },
              "expression": false,
              "start": 1550,
              "end": 1677
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1549,
            "end": 1677
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 1686,
              "end": 1687
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "TSEnumDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1705,
                      "end": 1706
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
                            "start": 1721,
                            "end": 1722
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1721,
                          "end": 1722
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1724,
                            "end": 1725
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1724,
                          "end": 1725
                        },
                        {
                          "type": "TSEnumMember",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1727,
                            "end": 1728
                          },
                          "initializer": null,
                          "computed": false,
                          "start": 1727,
                          "end": 1728
                        }
                      ],
                      "start": 1707,
                      "end": 1738
                    },
                    "const": false,
                    "declare": false,
                    "start": 1700,
                    "end": 1738
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
                      "start": 1753,
                      "end": 1754
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1769,
                            "end": 1770
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1772,
                                "end": 1773
                              },
                              "typeArguments": null,
                              "start": 1772,
                              "end": 1773
                            },
                            "start": 1770,
                            "end": 1773
                          },
                          "value": null,
                          "computed": false,
                          "static": false,
                          "declare": false,
                          "override": false,
                          "optional": false,
                          "definite": false,
                          "readonly": false,
                          "accessibility": null,
                          "start": 1769,
                          "end": 1774
                        }
                      ],
                      "start": 1755,
                      "end": 1784
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1747,
                    "end": 1784
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1804,
                        "end": 1805
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1800,
                      "end": 1807
                    },
                    "start": 1793,
                    "end": 1808
                  }
                ],
                "start": 1690,
                "end": 1814
              },
              "expression": false,
              "start": 1687,
              "end": 1814
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1682,
            "end": 1814
          }
        ],
        "start": 1424,
        "end": 1816
      },
      "abstract": false,
      "declare": false,
      "start": 1416,
      "end": 1816
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1827,
        "end": 1829
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1844,
              "end": 1845
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
                    "start": 1856,
                    "end": 1857
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1859,
                      "end": 1865
                    },
                    "start": 1857,
                    "end": 1865
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1856,
                  "end": 1866
                }
              ],
              "start": 1846,
              "end": 1872
            },
            "abstract": false,
            "declare": false,
            "start": 1838,
            "end": 1872
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1886,
              "end": 1887
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1906,
                    "end": 1907
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1916,
                    "end": 1917
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1932,
                          "end": 1933
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1935,
                            "end": 1941
                          },
                          "start": 1933,
                          "end": 1941
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 1932,
                        "end": 1942
                      }
                    ],
                    "start": 1918,
                    "end": 1952
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 1900,
                  "end": 1952
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1971
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1994,
                          "end": 1995
                        },
                        "typeParameters": null,
                        "superClass": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2004,
                          "end": 2005
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
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2024,
                                "end": 2025
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2027,
                                  "end": 2033
                                },
                                "start": 2025,
                                "end": 2033
                              },
                              "value": null,
                              "computed": false,
                              "static": false,
                              "declare": false,
                              "override": false,
                              "optional": false,
                              "definite": false,
                              "readonly": false,
                              "accessibility": null,
                              "start": 2024,
                              "end": 2034
                            }
                          ],
                          "start": 2006,
                          "end": 2048
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 1988,
                        "end": 2048
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2065,
                              "end": 2066
                            },
                            "init": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2073,
                                "end": 2074
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2069,
                              "end": 2076
                            },
                            "definite": false,
                            "start": 2065,
                            "end": 2076
                          }
                        ],
                        "declare": false,
                        "start": 2061,
                        "end": 2077
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2090,
                              "end": 2091
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2092,
                              "end": 2093
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2090,
                            "end": 2093
                          },
                          "right": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2096,
                            "end": 2099
                          },
                          "start": 2090,
                          "end": 2099
                        },
                        "directive": null,
                        "start": 2090,
                        "end": 2100
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2113,
                              "end": 2114
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2115,
                              "end": 2116
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2113,
                            "end": 2116
                          },
                          "right": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 2119,
                            "end": 2122
                          },
                          "start": 2113,
                          "end": 2122
                        },
                        "directive": null,
                        "start": 2113,
                        "end": 2123
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2136,
                              "end": 2137
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2138,
                              "end": 2139
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2136,
                            "end": 2139
                          },
                          "right": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 2142,
                            "end": 2145
                          },
                          "start": 2136,
                          "end": 2145
                        },
                        "directive": null,
                        "start": 2136,
                        "end": 2146
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2166,
                          "end": 2167
                        },
                        "start": 2159,
                        "end": 2168
                      }
                    ],
                    "start": 1974,
                    "end": 2178
                  },
                  "expression": false,
                  "start": 1961,
                  "end": 2178
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2194,
                      "end": 2195
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2194,
                    "end": 2197
                  },
                  "start": 2187,
                  "end": 2198
                }
              ],
              "start": 1890,
              "end": 2204
            },
            "expression": false,
            "start": 1877,
            "end": 2204
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2217
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2216,
              "end": 2219
            },
            "start": 2209,
            "end": 2220
          }
        ],
        "start": 1832,
        "end": 2222
      },
      "expression": false,
      "start": 1818,
      "end": 2222
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2222
}
```
