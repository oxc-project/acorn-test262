__ESTREE_TEST__:PASS:
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
