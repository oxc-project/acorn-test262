__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 947,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 22,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 36,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "ElementTagNameMap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 87,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 89,
                          "end": 95
                        }
                      }
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
                        "decorators": [],
                        "name": "HTMLElement",
                        "optional": false,
                        "typeAnnotation": null
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
              "decorators": [],
              "name": "HTMLElement",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 159,
                        "end": 167,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 161,
                          "end": 167
                        }
                      }
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
                        "decorators": [],
                        "name": "HTMLElement",
                        "optional": false,
                        "typeAnnotation": null
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
          "decorators": [],
          "name": "assertIsElement",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 224,
            "end": 241,
            "decorators": [],
            "name": "node",
            "optional": false,
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
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          }
        ],
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
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 260,
          "end": 347,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 266,
              "end": 318,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 270,
                  "end": 317,
                  "id": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 278,
                    "decorators": [],
                    "name": "nodeType",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 317,
                        "decorators": [],
                        "name": "nodeType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  },
                  "definite": false
                }
              ],
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
                  "decorators": [],
                  "name": "nodeType",
                  "optional": false,
                  "typeAnnotation": null
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "assertNodeTagName",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 461,
            "end": 478,
            "decorators": [],
            "name": "node",
            "optional": false,
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
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          {
            "type": "Identifier",
            "start": 480,
            "end": 490,
            "decorators": [],
            "name": "tagName",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
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
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        },
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
                  "decorators": [],
                  "name": "assertIsElement",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 529,
                    "end": 533,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 552,
                        "end": 592,
                        "id": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 563,
                          "decorators": [],
                          "name": "nodeTagName",
                          "optional": false,
                          "typeAnnotation": null
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
                                "decorators": [],
                                "name": "node",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 571,
                                "end": 578,
                                "decorators": [],
                                "name": "tagName",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 590,
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
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
                        "decorators": [],
                        "name": "nodeTagName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 633,
                        "decorators": [],
                        "name": "tagName",
                        "optional": false,
                        "typeAnnotation": null
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "assertNodeProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ElementTagNameMap",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "HTMLElementTagNameMap",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 824,
            "end": 841,
            "decorators": [],
            "name": "node",
            "optional": false,
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
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          {
            "type": "Identifier",
            "start": 843,
            "end": 853,
            "decorators": [],
            "name": "tagName",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 855,
            "end": 862,
            "decorators": [],
            "name": "prop",
            "optional": false,
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
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 864,
            "end": 872,
            "decorators": [],
            "name": "value",
            "optional": false,
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
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                  "decorators": [],
                  "name": "assertNodeTagName",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 902,
                    "end": 906,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 908,
                    "end": 915,
                    "decorators": [],
                    "name": "tagName",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
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
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 937,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": null
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
