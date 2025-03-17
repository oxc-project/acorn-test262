__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 805,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "name": "Bugs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 805,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 217,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 37,
              "end": 217,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 53,
                "name": "IToken",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 54,
                "end": 217,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 88,
                    "end": 106,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 98,
                      "name": "startIndex",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 98,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 139,
                    "end": 151,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 143,
                      "name": "type",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 144,
                        "end": 150
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 184,
                    "end": 199,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 191,
                      "name": "bracket",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 191,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 251,
            "end": 294,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 258,
              "end": 294,
              "id": {
                "type": "Identifier",
                "start": 268,
                "end": 274,
                "name": "IState",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 275,
                "end": 294,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 312,
            "end": 470,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 319,
              "end": 470,
              "id": {
                "type": "Identifier",
                "start": 329,
                "end": 340,
                "name": "IStateToken",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 349,
                  "end": 355,
                  "expression": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 355,
                    "name": "IToken",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 356,
                "end": 470,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 390,
                    "end": 404,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 395,
                      "name": "state",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 395,
                      "end": 403,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 397,
                        "end": 403,
                        "typeName": {
                          "type": "Identifier",
                          "start": 397,
                          "end": 403,
                          "name": "IState",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 437,
                    "end": 452,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 443,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 443,
                      "end": 451,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 445,
                        "end": 451
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "FunctionDeclaration",
            "start": 504,
            "end": 803,
            "id": {
              "type": "Identifier",
              "start": 513,
              "end": 517,
              "name": "bug3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 520,
              "end": 803,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 554,
                  "end": 578,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 558,
                      "end": 577,
                      "id": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 573,
                        "name": "tokens",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 564,
                          "end": 573,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 565,
                            "end": 573,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 565,
                              "end": 571,
                              "typeName": {
                                "type": "Identifier",
                                "start": 565,
                                "end": 571,
                                "name": "IToken",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 575,
                        "end": 577,
                        "elements": []
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 611,
                  "end": 664,
                  "expression": {
                    "type": "CallExpression",
                    "start": 611,
                    "end": 663,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 611,
                      "end": 622,
                      "object": {
                        "type": "Identifier",
                        "start": 611,
                        "end": 617,
                        "name": "tokens",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 618,
                        "end": 622,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "start": 623,
                        "end": 662,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 625,
                            "end": 638,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 625,
                              "end": 635,
                              "name": "startIndex",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 637,
                              "end": 638,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 640,
                            "end": 648,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 640,
                              "end": 644,
                              "name": "type",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 646,
                              "end": 648,
                              "value": "",
                              "raw": "''"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 650,
                            "end": 660,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 650,
                              "end": 657,
                              "name": "bracket",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 659,
                              "end": 660,
                              "value": 3,
                              "raw": "3"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 697,
                  "end": 785,
                  "expression": {
                    "type": "CallExpression",
                    "start": 697,
                    "end": 784,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 697,
                      "end": 708,
                      "object": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 703,
                        "name": "tokens",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 708,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "TSTypeAssertion",
                        "start": 709,
                        "end": 783,
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 718,
                          "end": 782,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 720,
                              "end": 733,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 720,
                                "end": 730,
                                "name": "startIndex",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 732,
                                "end": 733,
                                "value": 1,
                                "raw": "1"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 735,
                              "end": 743,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 735,
                                "end": 739,
                                "name": "type",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 741,
                                "end": 743,
                                "value": "",
                                "raw": "''"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 745,
                              "end": 755,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 745,
                                "end": 752,
                                "name": "bracket",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 754,
                                "end": 755,
                                "value": 3,
                                "raw": "3"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 757,
                              "end": 768,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 757,
                                "end": 762,
                                "name": "state",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 764,
                                "end": 768,
                                "value": null,
                                "raw": "null"
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 770,
                              "end": 780,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 770,
                                "end": 776,
                                "name": "length",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 778,
                                "end": 780,
                                "value": 10,
                                "raw": "10"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 710,
                          "end": 716,
                          "typeName": {
                            "type": "Identifier",
                            "start": 710,
                            "end": 716,
                            "name": "IToken",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
