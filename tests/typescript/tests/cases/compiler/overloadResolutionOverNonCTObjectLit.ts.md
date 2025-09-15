__ESTREE_TEST__:PASS:
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
