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
        "decorators": [],
        "name": "Bugs",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "IToken",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
                      "decorators": [],
                      "name": "startIndex",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "bracket",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "IState",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
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
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "IStateToken",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 349,
                  "end": 355,
                  "expression": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 355,
                    "decorators": [],
                    "name": "IToken",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
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
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "IState",
                          "optional": false,
                          "typeAnnotation": null
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
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
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
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 504,
            "end": 803,
            "id": {
              "type": "Identifier",
              "start": 513,
              "end": 517,
              "decorators": [],
              "name": "bug3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 520,
              "end": 803,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 554,
                  "end": 578,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 558,
                      "end": 577,
                      "id": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 573,
                        "decorators": [],
                        "name": "tokens",
                        "optional": false,
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
                                "decorators": [],
                                "name": "IToken",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
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
                        "decorators": [],
                        "name": "tokens",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 618,
                        "end": 622,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 625,
                              "end": 635,
                              "decorators": [],
                              "name": "startIndex",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 637,
                              "end": 638,
                              "value": 1,
                              "raw": "1"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 640,
                            "end": 648,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 640,
                              "end": 644,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 646,
                              "end": 648,
                              "value": "",
                              "raw": "''"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 650,
                            "end": 660,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 650,
                              "end": 657,
                              "decorators": [],
                              "name": "bracket",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Literal",
                              "start": 659,
                              "end": 660,
                              "value": 3,
                              "raw": "3"
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false
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
                        "decorators": [],
                        "name": "tokens",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 708,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "TSTypeAssertion",
                        "start": 709,
                        "end": 783,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 710,
                          "end": 716,
                          "typeName": {
                            "type": "Identifier",
                            "start": 710,
                            "end": 716,
                            "decorators": [],
                            "name": "IToken",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "expression": {
                          "type": "ObjectExpression",
                          "start": 718,
                          "end": 782,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 720,
                              "end": 733,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 720,
                                "end": 730,
                                "decorators": [],
                                "name": "startIndex",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 732,
                                "end": 733,
                                "value": 1,
                                "raw": "1"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 735,
                              "end": 743,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 735,
                                "end": 739,
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 741,
                                "end": 743,
                                "value": "",
                                "raw": "''"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 745,
                              "end": 755,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 745,
                                "end": 752,
                                "decorators": [],
                                "name": "bracket",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 754,
                                "end": 755,
                                "value": 3,
                                "raw": "3"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 757,
                              "end": 768,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 757,
                                "end": 762,
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 764,
                                "end": 768,
                                "value": null,
                                "raw": "null"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 770,
                              "end": 780,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 770,
                                "end": 776,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 778,
                                "end": 780,
                                "value": 10,
                                "raw": "10"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
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
