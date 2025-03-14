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
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 805,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 30,
            "end": 217,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 37,
              "end": 217,
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
                    "key": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 98,
                      "decorators": [],
                      "name": "startIndex",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 98,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 139,
                    "end": 151,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 143,
                      "decorators": [],
                      "name": "type",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 144,
                        "end": 150
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 184,
                    "end": 199,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 191,
                      "decorators": [],
                      "name": "bracket",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 191,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 192,
                        "end": 198
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 53,
                "decorators": [],
                "name": "IToken",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 251,
            "end": 294,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 258,
              "end": 294,
              "body": {
                "type": "TSInterfaceBody",
                "start": 275,
                "end": 294,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 268,
                "end": 274,
                "decorators": [],
                "name": "IState",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 312,
            "end": 470,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 319,
              "end": 470,
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
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 395,
                      "decorators": [],
                      "name": "state",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 437,
                    "end": 452,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 443,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 443,
                      "end": 451,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 445,
                        "end": 451
                      }
                    }
                  }
                ]
              },
              "declare": false,
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
                    "optional": false
                  }
                }
              ],
              "id": {
                "type": "Identifier",
                "start": 329,
                "end": 340,
                "decorators": [],
                "name": "IStateToken",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 504,
            "end": 803,
            "async": false,
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
                      "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 575,
                        "end": 577,
                        "elements": []
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 611,
                  "end": 664,
                  "expression": {
                    "type": "CallExpression",
                    "start": 611,
                    "end": 663,
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
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 625,
                              "end": 635,
                              "decorators": [],
                              "name": "startIndex",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 637,
                              "end": 638,
                              "raw": "1",
                              "value": 1
                            }
                          },
                          {
                            "type": "Property",
                            "start": 640,
                            "end": 648,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 640,
                              "end": 644,
                              "decorators": [],
                              "name": "type",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 646,
                              "end": 648,
                              "raw": "''",
                              "value": ""
                            }
                          },
                          {
                            "type": "Property",
                            "start": 650,
                            "end": 660,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 650,
                              "end": 657,
                              "decorators": [],
                              "name": "bracket",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 659,
                              "end": 660,
                              "raw": "3",
                              "value": 3
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 611,
                      "end": 622,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 611,
                        "end": 617,
                        "decorators": [],
                        "name": "tokens",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 618,
                        "end": 622,
                        "decorators": [],
                        "name": "push",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 697,
                  "end": 785,
                  "expression": {
                    "type": "CallExpression",
                    "start": 697,
                    "end": 784,
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
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 720,
                                "end": 730,
                                "decorators": [],
                                "name": "startIndex",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 732,
                                "end": 733,
                                "raw": "1",
                                "value": 1
                              }
                            },
                            {
                              "type": "Property",
                              "start": 735,
                              "end": 743,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 735,
                                "end": 739,
                                "decorators": [],
                                "name": "type",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 741,
                                "end": 743,
                                "raw": "''",
                                "value": ""
                              }
                            },
                            {
                              "type": "Property",
                              "start": 745,
                              "end": 755,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 745,
                                "end": 752,
                                "decorators": [],
                                "name": "bracket",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 754,
                                "end": 755,
                                "raw": "3",
                                "value": 3
                              }
                            },
                            {
                              "type": "Property",
                              "start": 757,
                              "end": 768,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 757,
                                "end": 762,
                                "decorators": [],
                                "name": "state",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 764,
                                "end": 768,
                                "raw": "null",
                                "value": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 770,
                              "end": 780,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 770,
                                "end": 776,
                                "decorators": [],
                                "name": "length",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 778,
                                "end": 780,
                                "raw": "10",
                                "value": 10
                              }
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
                            "decorators": [],
                            "name": "IToken",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 697,
                      "end": 708,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 703,
                        "decorators": [],
                        "name": "tokens",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 704,
                        "end": 708,
                        "decorators": [],
                        "name": "push",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 513,
              "end": 517,
              "decorators": [],
              "name": "bug3",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Bugs",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
