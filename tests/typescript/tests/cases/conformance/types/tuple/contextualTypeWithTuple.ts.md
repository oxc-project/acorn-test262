__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 30,
                    "end": 36
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  }
                ],
                "start": 29,
                "end": 45
              },
              "start": 27,
              "end": 45
            },
            "start": 16,
            "end": 45
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 49,
                "end": 50
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 52,
                "end": 59
              }
            ],
            "start": 48,
            "end": 60
          },
          "definite": false,
          "start": 16,
          "end": 60
        }
      ],
      "declare": false,
      "start": 12,
      "end": 61
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
            "name": "numStrTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 81,
                    "end": 87
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  }
                ],
                "start": 80,
                "end": 96
              },
              "start": 78,
              "end": 96
            },
            "start": 66,
            "end": 96
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 100,
                "end": 101
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 103,
                "end": 108
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 110,
                "end": 114
              }
            ],
            "start": 99,
            "end": 115
          },
          "definite": false,
          "start": 66,
          "end": 115
        }
      ],
      "declare": false,
      "start": 62,
      "end": 116
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 139,
                    "end": 145
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 155,
                    "end": 162
                  }
                ],
                "start": 138,
                "end": 163
              },
              "start": 136,
              "end": 163
            },
            "start": 121,
            "end": 163
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 167,
                "end": 168
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 170,
                "end": 175
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 177,
                "end": 181
              }
            ],
            "start": 166,
            "end": 182
          },
          "definite": false,
          "start": 121,
          "end": 182
        }
      ],
      "declare": false,
      "start": 117,
      "end": 183
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
            "name": "objNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 205
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 207,
                            "end": 213
                          },
                          "start": 205,
                          "end": 213
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 204,
                        "end": 213
                      }
                    ],
                    "start": 202,
                    "end": 215
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  }
                ],
                "start": 201,
                "end": 224
              },
              "start": 199,
              "end": 224
            },
            "start": 188,
            "end": 224
          },
          "init": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    },
                    "value": {
                      "type": "Literal",
                      "value": "world",
                      "raw": "\"world\"",
                      "start": 233,
                      "end": 240
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 230,
                    "end": 240
                  }
                ],
                "start": 228,
                "end": 242
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 244,
                "end": 245
              }
            ],
            "start": 227,
            "end": 246
          },
          "definite": false,
          "start": 188,
          "end": 246
        }
      ],
      "declare": false,
      "start": 184,
      "end": 247
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
            "name": "strTupleTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 268,
                    "end": 274
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 277,
                        "end": 283
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 285,
                        "end": 287
                      }
                    ],
                    "start": 276,
                    "end": 288
                  }
                ],
                "start": 267,
                "end": 289
              },
              "start": 265,
              "end": 289
            },
            "start": 252,
            "end": 289
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 293,
                "end": 298
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 301,
                    "end": 302
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 306,
                          "end": 307
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 309,
                          "end": 310
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 306,
                        "end": 310
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
                          "start": 312,
                          "end": 313
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 315,
                          "end": 316
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 312,
                        "end": 316
                      }
                    ],
                    "start": 304,
                    "end": 318
                  }
                ],
                "start": 300,
                "end": 319
              }
            ],
            "start": 292,
            "end": 320
          },
          "definite": false,
          "start": 252,
          "end": 320
        }
      ],
      "declare": false,
      "start": 248,
      "end": 321
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
        "start": 328,
        "end": 329
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 330,
        "end": 333
      },
      "abstract": false,
      "declare": false,
      "start": 322,
      "end": 333
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
        "start": 340,
        "end": 341
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 342,
        "end": 345
      },
      "abstract": false,
      "declare": false,
      "start": 334,
      "end": 345
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
                      "start": 363,
                      "end": 364
                    },
                    "typeArguments": null,
                    "start": 363,
                    "end": 364
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 366,
                        "end": 372
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 375,
                        "end": 381
                      }
                    ],
                    "start": 366,
                    "end": 381
                  }
                ],
                "start": 362,
                "end": 382
              },
              "start": 360,
              "end": 382
            },
            "start": 350,
            "end": 382
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
                  "start": 390,
                  "end": 391
                },
                "typeArguments": null,
                "arguments": [],
                "start": 386,
                "end": 393
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 395,
                "end": 400
              }
            ],
            "start": 385,
            "end": 401
          },
          "definite": false,
          "start": 350,
          "end": 401
        }
      ],
      "declare": false,
      "start": 346,
      "end": 402
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
            "name": "unionTuple1",
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
                      "start": 421,
                      "end": 422
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 422
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 424,
                        "end": 430
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 433,
                        "end": 439
                      }
                    ],
                    "start": 424,
                    "end": 439
                  }
                ],
                "start": 420,
                "end": 440
              },
              "start": 418,
              "end": 440
            },
            "start": 407,
            "end": 440
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
                  "start": 448,
                  "end": 449
                },
                "typeArguments": null,
                "arguments": [],
                "start": 444,
                "end": 451
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 453,
                "end": 458
              }
            ],
            "start": 443,
            "end": 459
          },
          "definite": false,
          "start": 407,
          "end": 459
        }
      ],
      "declare": false,
      "start": 403,
      "end": 460
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
                      "start": 479,
                      "end": 480
                    },
                    "typeArguments": null,
                    "start": 479,
                    "end": 480
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 482,
                        "end": 488
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 491,
                        "end": 497
                      }
                    ],
                    "start": 482,
                    "end": 497
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 499,
                      "end": 500
                    },
                    "typeArguments": null,
                    "start": 499,
                    "end": 500
                  }
                ],
                "start": 478,
                "end": 501
              },
              "start": 476,
              "end": 501
            },
            "start": 465,
            "end": 501
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
                  "start": 509,
                  "end": 510
                },
                "typeArguments": null,
                "arguments": [],
                "start": 505,
                "end": 512
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 514,
                "end": 519
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 526
                },
                "typeArguments": null,
                "arguments": [],
                "start": 521,
                "end": 528
              }
            ],
            "start": 504,
            "end": 529
          },
          "definite": false,
          "start": 465,
          "end": 529
        }
      ],
      "declare": false,
      "start": 461,
      "end": 530
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
                    "start": 549,
                    "end": 555
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 557,
                        "end": 563
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 565,
                        "end": 571
                      }
                    ],
                    "start": 557,
                    "end": 571
                  }
                ],
                "start": 548,
                "end": 572
              },
              "start": 546,
              "end": 572
            },
            "start": 535,
            "end": 572
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 576,
                "end": 578
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 580,
                "end": 585
              }
            ],
            "start": 575,
            "end": 586
          },
          "definite": false,
          "start": 535,
          "end": 586
        }
      ],
      "declare": false,
      "start": 531,
      "end": 587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 590,
          "end": 601
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple2",
          "optional": false,
          "typeAnnotation": null,
          "start": 604,
          "end": 616
        },
        "start": 590,
        "end": 616
      },
      "directive": null,
      "start": 590,
      "end": 617
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 629
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrBoolTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 647
        },
        "start": 618,
        "end": 647
      },
      "directive": null,
      "start": 618,
      "end": 648
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "objNumTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 670
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ObjectExpression",
              "properties": [],
              "start": 675,
              "end": 677
            },
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 679,
              "end": 680
            }
          ],
          "start": 673,
          "end": 681
        },
        "start": 659,
        "end": 681
      },
      "directive": null,
      "start": 659,
      "end": 682
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrBoolTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 698
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 701,
          "end": 712
        },
        "start": 683,
        "end": 712
      },
      "directive": null,
      "start": 683,
      "end": 713
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
            "name": "strStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 732,
                    "end": 738
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 740,
                    "end": 746
                  }
                ],
                "start": 731,
                "end": 747
              },
              "start": 729,
              "end": 747
            },
            "start": 718,
            "end": 747
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 751,
                "end": 756
              },
              {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 758,
                "end": 763
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 765,
                "end": 766
              }
            ],
            "start": 750,
            "end": 767
          },
          "definite": false,
          "start": 718,
          "end": 767
        }
      ],
      "declare": false,
      "start": 714,
      "end": 768
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 780
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionTuple1",
          "optional": false,
          "typeAnnotation": null,
          "start": 783,
          "end": 794
        },
        "start": 770,
        "end": 794
      },
      "directive": null,
      "start": 770,
      "end": 795
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 796,
          "end": 806
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionTuple2",
          "optional": false,
          "typeAnnotation": null,
          "start": 809,
          "end": 820
        },
        "start": 796,
        "end": 820
      },
      "directive": null,
      "start": 796,
      "end": 821
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionTuple2",
          "optional": false,
          "typeAnnotation": null,
          "start": 822,
          "end": 833
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 836,
          "end": 846
        },
        "start": 822,
        "end": 846
      },
      "directive": null,
      "start": 822,
      "end": 847
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 848,
          "end": 859
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionTuple3",
          "optional": false,
          "typeAnnotation": null,
          "start": 862,
          "end": 873
        },
        "start": 848,
        "end": 873
      },
      "directive": null,
      "start": 848,
      "end": 874
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 907
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 914,
                "end": 920
              },
              "start": 914,
              "end": 922
            },
            "start": 911,
            "end": 922
          }
        ],
        "start": 910,
        "end": 923
      },
      "declare": false,
      "start": 897,
      "end": 923
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fixed1",
        "optional": false,
        "typeAnnotation": null,
        "start": 929,
        "end": 935
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
              "name": "test1",
              "optional": false,
              "typeAnnotation": null,
              "start": 938,
              "end": 943
            },
            "typeArguments": null,
            "start": 938,
            "end": 943
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
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 948,
                  "end": 954
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 956,
                      "end": 957
                    },
                    "start": 956,
                    "end": 957
                  },
                  "start": 954,
                  "end": 957
                },
                "accessibility": null,
                "static": false,
                "start": 948,
                "end": 957
              }
            ],
            "start": 946,
            "end": 959
          }
        ],
        "start": 938,
        "end": 959
      },
      "declare": false,
      "start": 924,
      "end": 959
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fixed1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 970,
                  "end": 976
                },
                "typeArguments": null,
                "start": 970,
                "end": 976
              },
              "start": 968,
              "end": 976
            },
            "start": 964,
            "end": 976
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 980,
                "end": 981
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 983,
                "end": 984
              }
            ],
            "start": 979,
            "end": 985
          },
          "definite": false,
          "start": 964,
          "end": 985
        }
      ],
      "declare": false,
      "start": 960,
      "end": 985
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 1002,
        "end": 1012
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [],
        "start": 1015,
        "end": 1017
      },
      "declare": false,
      "start": 997,
      "end": 1017
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEmptyTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 1028,
        "end": 1040
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "EmptyTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 1049,
            "end": 1059
          },
          "typeArguments": null,
          "start": 1049,
          "end": 1059
        }
      ],
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
              "name": "extraInfo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1071
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1074,
                "end": 1077
              },
              "start": 1072,
              "end": 1077
            },
            "accessibility": null,
            "static": false,
            "start": 1062,
            "end": 1078
          }
        ],
        "start": 1060,
        "end": 1080
      },
      "declare": false,
      "start": 1018,
      "end": 1080
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
            "name": "withExtra",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyEmptyTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1098,
                  "end": 1110
                },
                "typeArguments": null,
                "start": 1098,
                "end": 1110
              },
              "start": 1096,
              "end": 1110
            },
            "start": 1087,
            "end": 1110
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1113,
            "end": 1115
          },
          "definite": false,
          "start": 1087,
          "end": 1115
        }
      ],
      "declare": false,
      "start": 1081,
      "end": 1115
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 1115
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 16,
    "end": 27,
    "range": [
      16,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44,
    "range": [
      38,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 52,
    "end": 59,
    "range": [
      52,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrTuple2",
    "start": 66,
    "end": 78,
    "range": [
      66,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
    "end": 87,
    "range": [
      81,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95,
    "range": [
      89,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 103,
    "end": 108,
    "range": [
      103,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120,
    "range": [
      117,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrBoolTuple",
    "start": 121,
    "end": 136,
    "range": [
      121,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 139,
    "end": 145,
    "range": [
      139,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 155,
    "end": 162,
    "range": [
      155,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 170,
    "end": 175,
    "range": [
      170,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 177,
    "end": 181,
    "range": [
      177,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 184,
    "end": 187,
    "range": [
      184,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "objNumTuple",
    "start": 188,
    "end": 199,
    "range": [
      188,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223,
    "range": [
      217,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "strTupleTuple",
    "start": 252,
    "end": 265,
    "range": [
      252,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 268,
    "end": 274,
    "range": [
      268,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 277,
    "end": 283,
    "range": [
      277,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 293,
    "end": 298,
    "range": [
      293,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 322,
    "end": 327,
    "range": [
      322,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 334,
    "end": 339,
    "range": [
      334,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 346,
    "end": 349,
    "range": [
      346,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple",
    "start": 350,
    "end": 360,
    "range": [
      350,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 366,
    "end": 372,
    "range": [
      366,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 375,
    "end": 381,
    "range": [
      375,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 386,
    "end": 389,
    "range": [
      386,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 395,
    "end": 400,
    "range": [
      395,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 403,
    "end": 406,
    "range": [
      403,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 407,
    "end": 418,
    "range": [
      407,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 433,
    "end": 439,
    "range": [
      433,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 444,
    "end": 447,
    "range": [
      444,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 453,
    "end": 458,
    "range": [
      453,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 461,
    "end": 464,
    "range": [
      461,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 465,
    "end": 476,
    "range": [
      465,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 482,
    "end": 488,
    "range": [
      482,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 505,
    "end": 508,
    "range": [
      505,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 514,
    "end": 519,
    "range": [
      514,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 521,
    "end": 524,
    "range": [
      521,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 531,
    "end": 534,
    "range": [
      531,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple3",
    "start": 535,
    "end": 546,
    "range": [
      535,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 549,
    "end": 555,
    "range": [
      549,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 557,
    "end": 563,
    "range": [
      557,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 565,
    "end": 571,
    "range": [
      565,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 576,
    "end": 578,
    "range": [
      576,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 580,
    "end": 585,
    "range": [
      580,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 590,
    "end": 601,
    "range": [
      590,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrTuple2",
    "start": 604,
    "end": 616,
    "range": [
      604,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 618,
    "end": 629,
    "range": [
      618,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrBoolTuple",
    "start": 632,
    "end": 647,
    "range": [
      632,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "objNumTuple",
    "start": 659,
    "end": 670,
    "range": [
      659,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrBoolTuple",
    "start": 683,
    "end": 698,
    "range": [
      683,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 701,
    "end": 712,
    "range": [
      701,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 714,
    "end": 717,
    "range": [
      714,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "strStrTuple",
    "start": 718,
    "end": 729,
    "range": [
      718,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 732,
    "end": 738,
    "range": [
      732,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 740,
    "end": 746,
    "range": [
      740,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 751,
    "end": 756,
    "range": [
      751,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 758,
    "end": 763,
    "range": [
      758,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple",
    "start": 770,
    "end": 780,
    "range": [
      770,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple1",
    "start": 783,
    "end": 794,
    "range": [
      783,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple",
    "start": 796,
    "end": 806,
    "range": [
      796,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 809,
    "end": 820,
    "range": [
      809,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple2",
    "start": 822,
    "end": 833,
    "range": [
      822,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple",
    "start": 836,
    "end": 846,
    "range": [
      836,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "numStrTuple",
    "start": 848,
    "end": 859,
    "range": [
      848,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "unionTuple3",
    "start": 862,
    "end": 873,
    "range": [
      862,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 897,
    "end": 901,
    "range": [
      897,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 902,
    "end": 907,
    "range": [
      902,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 911,
    "end": 914,
    "range": [
      911,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 914,
    "end": 920,
    "range": [
      914,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 924,
    "end": 928,
    "range": [
      924,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "fixed1",
    "start": 929,
    "end": 935,
    "range": [
      929,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 938,
    "end": 943,
    "range": [
      938,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 948,
    "end": 954,
    "range": [
      948,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 960,
    "end": 963,
    "range": [
      960,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 964,
    "end": 968,
    "range": [
      964,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Identifier",
    "value": "fixed1",
    "start": 970,
    "end": 976,
    "range": [
      970,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 997,
    "end": 1001,
    "range": [
      997,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "EmptyTuple",
    "start": 1002,
    "end": 1012,
    "range": [
      1002,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1018,
    "end": 1027,
    "range": [
      1018,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmptyTuple",
    "start": 1028,
    "end": 1040,
    "range": [
      1028,
      1040
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1041,
    "end": 1048,
    "range": [
      1041,
      1048
    ]
  },
  {
    "type": "Identifier",
    "value": "EmptyTuple",
    "start": 1049,
    "end": 1059,
    "range": [
      1049,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "extraInfo",
    "start": 1062,
    "end": 1071,
    "range": [
      1062,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1074,
    "end": 1077,
    "range": [
      1074,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1081,
    "end": 1086,
    "range": [
      1081,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "withExtra",
    "start": 1087,
    "end": 1096,
    "range": [
      1087,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEmptyTuple",
    "start": 1098,
    "end": 1110,
    "range": [
      1098,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  }
]
```
