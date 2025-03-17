__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 948,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 22,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 36,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 190,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 43,
            "end": 115,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 70,
              "name": "ElementTagNameMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 71,
              "end": 115,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 81,
                  "end": 109,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 82,
                      "end": 95,
                      "name": "index",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 87,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 89,
                          "end": 95
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 98,
                      "end": 109,
                      "typeName": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 109,
                        "name": "HTMLElement",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 121,
            "end": 188,
            "id": {
              "type": "Identifier",
              "start": 131,
              "end": 142,
              "name": "HTMLElement",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 143,
              "end": 188,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 153,
                  "end": 182,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 154,
                      "end": 167,
                      "name": "index",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 159,
                        "end": 167,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 161,
                          "end": 167
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 168,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 170,
                      "end": 181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 181,
                        "name": "HTMLElement",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 192,
      "end": 347,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 199,
        "end": 347,
        "id": {
          "type": "Identifier",
          "start": 208,
          "end": 223,
          "name": "assertIsElement",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 224,
            "end": 241,
            "name": "node",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 241,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 230,
                "end": 241,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 230,
                    "end": 234,
                    "typeName": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 234,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 237,
                    "end": 241
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 260,
          "end": 347,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 266,
              "end": 318,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 270,
                  "end": 317,
                  "id": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 278,
                    "name": "nodeType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 281,
                    "end": 317,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 281,
                      "end": 294,
                      "left": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 285,
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 290,
                        "end": 294,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 297,
                      "end": 301,
                      "value": null,
                      "raw": "null"
                    },
                    "alternate": {
                      "type": "MemberExpression",
                      "start": 304,
                      "end": 317,
                      "object": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 308,
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 317,
                        "name": "nodeType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "ReturnStatement",
              "start": 323,
              "end": 345,
              "argument": {
                "type": "BinaryExpression",
                "start": 330,
                "end": 344,
                "left": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 338,
                  "name": "nodeType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 343,
                  "end": 344,
                  "value": 1,
                  "raw": "1"
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 242,
          "end": 259,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 244,
            "end": 259,
            "parameterName": {
              "type": "Identifier",
              "start": 244,
              "end": 248,
              "name": "node",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 259,
                  "name": "Element",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 351,
      "end": 660,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 358,
        "end": 660,
        "id": {
          "type": "Identifier",
          "start": 367,
          "end": 384,
          "name": "assertNodeTagName",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 461,
            "end": 478,
            "name": "node",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 478,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 467,
                "end": 478,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 467,
                    "end": 471,
                    "typeName": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 471,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 474,
                    "end": 478
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 480,
            "end": 490,
            "name": "tagName",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 487,
              "end": 490,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 489,
                "end": 490,
                "typeName": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 490,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 503,
          "end": 660,
          "body": [
            {
              "type": "IfStatement",
              "start": 509,
              "end": 640,
              "test": {
                "type": "CallExpression",
                "start": 513,
                "end": 534,
                "callee": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 528,
                  "name": "assertIsElement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 529,
                    "end": 533,
                    "name": "node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 536,
                "end": 640,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 546,
                    "end": 593,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 552,
                        "end": 592,
                        "id": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 563,
                          "name": "nodeTagName",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 566,
                          "end": 592,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 566,
                            "end": 590,
                            "object": {
                              "type": "MemberExpression",
                              "start": 566,
                              "end": 578,
                              "object": {
                                "type": "Identifier",
                                "start": 566,
                                "end": 570,
                                "name": "node",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 571,
                                "end": 578,
                                "name": "tagName",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 590,
                              "name": "toLowerCase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 603,
                    "end": 634,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 610,
                      "end": 633,
                      "left": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 621,
                        "name": "nodeTagName",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 633,
                        "name": "tagName",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 645,
              "end": 658,
              "argument": {
                "type": "Literal",
                "start": 652,
                "end": 657,
                "value": false,
                "raw": "false"
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 384,
          "end": 460,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 390,
              "end": 423,
              "name": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 400,
                "end": 423,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 406,
                  "end": 423,
                  "typeName": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 423,
                    "name": "ElementTagNameMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 429,
              "end": 459,
              "name": {
                "type": "Identifier",
                "start": 429,
                "end": 430,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 439,
                "end": 459,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 439,
                  "end": 456,
                  "typeName": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 456,
                    "name": "ElementTagNameMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 457,
                  "end": 458,
                  "typeName": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 491,
          "end": 502,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 493,
            "end": 502,
            "parameterName": {
              "type": "Identifier",
              "start": 493,
              "end": 497,
              "name": "node",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 501,
                "end": 502,
                "typeName": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 664,
      "end": 947,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 671,
        "end": 947,
        "id": {
          "type": "Identifier",
          "start": 680,
          "end": 698,
          "name": "assertNodeProperty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 824,
            "end": 841,
            "name": "node",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 828,
              "end": 841,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 830,
                "end": 841,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 830,
                    "end": 834,
                    "typeName": {
                      "type": "Identifier",
                      "start": 830,
                      "end": 834,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 837,
                    "end": 841
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 843,
            "end": 853,
            "name": "tagName",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 850,
              "end": 853,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 852,
                "end": 853,
                "typeName": {
                  "type": "Identifier",
                  "start": 852,
                  "end": 853,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 855,
            "end": 862,
            "name": "prop",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 859,
              "end": 862,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 861,
                "end": 862,
                "typeName": {
                  "type": "Identifier",
                  "start": 861,
                  "end": 862,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 864,
            "end": 872,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 869,
              "end": 872,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 871,
                "end": 872,
                "typeName": {
                  "type": "Identifier",
                  "start": 871,
                  "end": 872,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 874,
          "end": 947,
          "body": [
            {
              "type": "IfStatement",
              "start": 880,
              "end": 945,
              "test": {
                "type": "CallExpression",
                "start": 884,
                "end": 916,
                "callee": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 901,
                  "name": "assertNodeTagName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 902,
                    "end": 906,
                    "name": "node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 908,
                    "end": 915,
                    "name": "tagName",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 918,
                "end": 945,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 928,
                    "end": 939,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 928,
                      "end": 938,
                      "object": {
                        "type": "Identifier",
                        "start": 928,
                        "end": 932,
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 937,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 698,
          "end": 823,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 704,
              "end": 737,
              "name": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 714,
                "end": 737,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 720,
                  "end": 737,
                  "typeName": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 737,
                    "name": "ElementTagNameMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 743,
              "end": 779,
              "name": {
                "type": "Identifier",
                "start": 743,
                "end": 744,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 753,
                "end": 779,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 759,
                  "end": 779,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 759,
                    "end": 776,
                    "typeName": {
                      "type": "Identifier",
                      "start": 759,
                      "end": 776,
                      "name": "ElementTagNameMap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 777,
                    "end": 778,
                    "typeName": {
                      "type": "Identifier",
                      "start": 777,
                      "end": 778,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 785,
              "end": 822,
              "name": {
                "type": "Identifier",
                "start": 785,
                "end": 786,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 795,
                "end": 822,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 795,
                  "end": 819,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 795,
                    "end": 816,
                    "typeName": {
                      "type": "Identifier",
                      "start": 795,
                      "end": 816,
                      "name": "HTMLElementTagNameMap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 817,
                    "end": 818,
                    "typeName": {
                      "type": "Identifier",
                      "start": 817,
                      "end": 818,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 820,
                  "end": 821,
                  "typeName": {
                    "type": "Identifier",
                    "start": 820,
                    "end": 821,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
