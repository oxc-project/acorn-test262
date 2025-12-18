__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bugs",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IToken",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 56
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
                      "name": "startIndex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 101
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      },
                      "start": 101,
                      "end": 108
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 91,
                    "end": 109
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 146
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      },
                      "start": 146,
                      "end": 153
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 142,
                    "end": 154
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bracket",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 194
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 195,
                        "end": 201
                      },
                      "start": 194,
                      "end": 201
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 187,
                    "end": 202
                  }
                ],
                "start": 57,
                "end": 220
              },
              "declare": false,
              "start": 40,
              "end": 220
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 33,
            "end": 220
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IState",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 277
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 278,
                "end": 297
              },
              "declare": false,
              "start": 261,
              "end": 297
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 254,
            "end": 297
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IStateToken",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 343
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IToken",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 352,
                    "end": 358
                  },
                  "typeArguments": null,
                  "start": 352,
                  "end": 358
                }
              ],
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
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 398
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IState",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 400,
                          "end": 406
                        },
                        "typeArguments": null,
                        "start": 400,
                        "end": 406
                      },
                      "start": 398,
                      "end": 406
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 393,
                    "end": 407
                  },
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
                      "start": 440,
                      "end": 446
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 448,
                        "end": 454
                      },
                      "start": 446,
                      "end": 454
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 440,
                    "end": 455
                  }
                ],
                "start": 359,
                "end": 473
              },
              "declare": false,
              "start": 322,
              "end": 473
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 315,
            "end": 473
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bug3",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 520
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
                        "name": "tokens",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IToken",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 568,
                                "end": 574
                              },
                              "typeArguments": null,
                              "start": 568,
                              "end": 574
                            },
                            "start": 568,
                            "end": 576
                          },
                          "start": 567,
                          "end": 576
                        },
                        "start": 561,
                        "end": 576
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 578,
                        "end": 580
                      },
                      "definite": false,
                      "start": 561,
                      "end": 580
                    }
                  ],
                  "declare": false,
                  "start": 557,
                  "end": 581
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 620
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 625
                      },
                      "optional": false,
                      "computed": false,
                      "start": 614,
                      "end": 625
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "startIndex",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 628,
                              "end": 638
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 640,
                              "end": 641
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 628,
                            "end": 641
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 643,
                              "end": 647
                            },
                            "value": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 649,
                              "end": 651
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 643,
                            "end": 651
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bracket",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 660
                            },
                            "value": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 662,
                              "end": 663
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 653,
                            "end": 663
                          }
                        ],
                        "start": 626,
                        "end": 665
                      }
                    ],
                    "optional": false,
                    "start": 614,
                    "end": 666
                  },
                  "directive": null,
                  "start": 614,
                  "end": 667
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 706
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 707,
                        "end": 711
                      },
                      "optional": false,
                      "computed": false,
                      "start": 700,
                      "end": 711
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IToken",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 713,
                            "end": 719
                          },
                          "typeArguments": null,
                          "start": 713,
                          "end": 719
                        },
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "startIndex",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 723,
                                "end": 733
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 735,
                                "end": 736
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 723,
                              "end": 736
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 738,
                                "end": 742
                              },
                              "value": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''",
                                "start": 744,
                                "end": 746
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 738,
                              "end": 746
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bracket",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 748,
                                "end": 755
                              },
                              "value": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 757,
                                "end": 758
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 748,
                              "end": 758
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 760,
                                "end": 765
                              },
                              "value": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 767,
                                "end": 771
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 760,
                              "end": 771
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 773,
                                "end": 779
                              },
                              "value": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 781,
                                "end": 783
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 773,
                              "end": 783
                            }
                          ],
                          "start": 721,
                          "end": 785
                        },
                        "start": 712,
                        "end": 786
                      }
                    ],
                    "optional": false,
                    "start": 700,
                    "end": 787
                  },
                  "directive": null,
                  "start": 700,
                  "end": 788
                }
              ],
              "start": 523,
              "end": 806
            },
            "expression": false,
            "start": 507,
            "end": 806
          }
        ],
        "start": 15,
        "end": 808
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 808
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 808
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Bugs",
    "start": 10,
    "end": 14,
    "range": [
      10,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 40,
    "end": 49,
    "range": [
      40,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 50,
    "end": 56,
    "range": [
      50,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 91,
    "end": 101,
    "range": [
      91,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108,
    "range": [
      102,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 142,
    "end": 146,
    "range": [
      142,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
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
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "bracket",
    "start": 187,
    "end": 194,
    "range": [
      187,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 254,
    "end": 260,
    "range": [
      254,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 261,
    "end": 270,
    "range": [
      261,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 271,
    "end": 277,
    "range": [
      271,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 315,
    "end": 321,
    "range": [
      315,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 322,
    "end": 331,
    "range": [
      322,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "IStateToken",
    "start": 332,
    "end": 343,
    "range": [
      332,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 344,
    "end": 351,
    "range": [
      344,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 393,
    "end": 398,
    "range": [
      393,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 400,
    "end": 406,
    "range": [
      400,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 440,
    "end": 446,
    "range": [
      440,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 448,
    "end": 454,
    "range": [
      448,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515,
    "range": [
      507,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "bug3",
    "start": 516,
    "end": 520,
    "range": [
      516,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560,
    "range": [
      557,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 561,
    "end": 567,
    "range": [
      561,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 614,
    "end": 620,
    "range": [
      614,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 621,
    "end": 625,
    "range": [
      621,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 628,
    "end": 638,
    "range": [
      628,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 643,
    "end": 647,
    "range": [
      643,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 649,
    "end": 651,
    "range": [
      649,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "bracket",
    "start": 653,
    "end": 660,
    "range": [
      653,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 700,
    "end": 706,
    "range": [
      700,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 707,
    "end": 711,
    "range": [
      707,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "IToken",
    "start": 713,
    "end": 719,
    "range": [
      713,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 723,
    "end": 733,
    "range": [
      723,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 738,
    "end": 742,
    "range": [
      738,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 744,
    "end": 746,
    "range": [
      744,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "bracket",
    "start": 748,
    "end": 755,
    "range": [
      748,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 760,
    "end": 765,
    "range": [
      760,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 767,
    "end": 771,
    "range": [
      767,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 773,
    "end": 779,
    "range": [
      773,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 781,
    "end": 783,
    "range": [
      781,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  }
]
```
