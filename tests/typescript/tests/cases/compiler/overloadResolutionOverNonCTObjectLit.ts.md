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
        "start": 7,
        "end": 11
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
                "start": 47,
                "end": 53
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
                      "start": 88,
                      "end": 98
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      },
                      "start": 98,
                      "end": 105
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 88,
                    "end": 106
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
                      "start": 139,
                      "end": 143
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 144,
                        "end": 150
                      },
                      "start": 143,
                      "end": 150
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 139,
                    "end": 151
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
                      "start": 184,
                      "end": 191
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
                      },
                      "start": 191,
                      "end": 198
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 184,
                    "end": 199
                  }
                ],
                "start": 54,
                "end": 217
              },
              "declare": false,
              "start": 37,
              "end": 217
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 30,
            "end": 217
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
                "start": 268,
                "end": 274
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 275,
                "end": 294
              },
              "declare": false,
              "start": 258,
              "end": 294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 251,
            "end": 294
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
                "start": 329,
                "end": 340
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
                    "start": 349,
                    "end": 355
                  },
                  "typeArguments": null,
                  "start": 349,
                  "end": 355
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
                      "start": 390,
                      "end": 395
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
                          "start": 397,
                          "end": 403
                        },
                        "typeArguments": null,
                        "start": 397,
                        "end": 403
                      },
                      "start": 395,
                      "end": 403
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 390,
                    "end": 404
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
                      "start": 437,
                      "end": 443
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 445,
                        "end": 451
                      },
                      "start": 443,
                      "end": 451
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 437,
                    "end": 452
                  }
                ],
                "start": 356,
                "end": 470
              },
              "declare": false,
              "start": 319,
              "end": 470
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 312,
            "end": 470
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bug3",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 517
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
                                "start": 565,
                                "end": 571
                              },
                              "typeArguments": null,
                              "start": 565,
                              "end": 571
                            },
                            "start": 565,
                            "end": 573
                          },
                          "start": 564,
                          "end": 573
                        },
                        "start": 558,
                        "end": 573
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 575,
                        "end": 577
                      },
                      "definite": false,
                      "start": 558,
                      "end": 577
                    }
                  ],
                  "declare": false,
                  "start": 554,
                  "end": 578
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
                        "start": 611,
                        "end": 617
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 618,
                        "end": 622
                      },
                      "optional": false,
                      "computed": false,
                      "start": 611,
                      "end": 622
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
                              "start": 625,
                              "end": 635
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 637,
                              "end": 638
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 625,
                            "end": 638
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
                              "start": 640,
                              "end": 644
                            },
                            "value": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 646,
                              "end": 648
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 640,
                            "end": 648
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
                              "start": 650,
                              "end": 657
                            },
                            "value": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 659,
                              "end": 660
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 650,
                            "end": 660
                          }
                        ],
                        "start": 623,
                        "end": 662
                      }
                    ],
                    "optional": false,
                    "start": 611,
                    "end": 663
                  },
                  "directive": null,
                  "start": 611,
                  "end": 664
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
                        "start": 697,
                        "end": 703
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 704,
                        "end": 708
                      },
                      "optional": false,
                      "computed": false,
                      "start": 697,
                      "end": 708
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
                            "start": 710,
                            "end": 716
                          },
                          "typeArguments": null,
                          "start": 710,
                          "end": 716
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
                                "start": 720,
                                "end": 730
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 732,
                                "end": 733
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 720,
                              "end": 733
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
                                "start": 735,
                                "end": 739
                              },
                              "value": {
                                "type": "Literal",
                                "value": "",
                                "raw": "''",
                                "start": 741,
                                "end": 743
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 735,
                              "end": 743
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
                                "start": 745,
                                "end": 752
                              },
                              "value": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 754,
                                "end": 755
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 745,
                              "end": 755
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
                                "start": 757,
                                "end": 762
                              },
                              "value": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 764,
                                "end": 768
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 757,
                              "end": 768
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
                                "start": 770,
                                "end": 776
                              },
                              "value": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 778,
                                "end": 780
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 770,
                              "end": 780
                            }
                          ],
                          "start": 718,
                          "end": 782
                        },
                        "start": 709,
                        "end": 783
                      }
                    ],
                    "optional": false,
                    "start": 697,
                    "end": 784
                  },
                  "directive": null,
                  "start": 697,
                  "end": 785
                }
              ],
              "start": 520,
              "end": 803
            },
            "expression": false,
            "start": 504,
            "end": 803
          }
        ],
        "start": 12,
        "end": 805
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 805
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 805
}
```
