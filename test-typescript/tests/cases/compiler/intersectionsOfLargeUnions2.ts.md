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
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 190,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 43,
            "end": 115,
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
                  "readonly": false,
                  "static": false,
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 70,
              "decorators": [],
              "name": "ElementTagNameMap",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 121,
            "end": 188,
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
                  "readonly": false,
                  "static": false,
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 131,
              "end": 142,
              "decorators": [],
              "name": "HTMLElement",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 36,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 192,
      "end": 347,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 199,
        "end": 347,
        "async": false,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 278,
                    "decorators": [],
                    "name": "nodeType",
                    "optional": false
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 281,
                    "end": 317,
                    "alternate": {
                      "type": "MemberExpression",
                      "start": 304,
                      "end": 317,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 308,
                        "decorators": [],
                        "name": "node",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 317,
                        "decorators": [],
                        "name": "nodeType",
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 297,
                      "end": 301,
                      "raw": "null",
                      "value": null
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 281,
                      "end": 294,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 285,
                        "decorators": [],
                        "name": "node",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 290,
                        "end": 294,
                        "raw": "null",
                        "value": null
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ReturnStatement",
              "start": 323,
              "end": 345,
              "argument": {
                "type": "BinaryExpression",
                "start": 330,
                "end": 344,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 338,
                  "decorators": [],
                  "name": "nodeType",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 343,
                  "end": 344,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 208,
          "end": 223,
          "decorators": [],
          "name": "assertIsElement",
          "optional": false
        },
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
                      "optional": false
                    }
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
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 244,
              "end": 248,
              "decorators": [],
              "name": "node",
              "optional": false
            },
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
                  "optional": false
                }
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 351,
      "end": 660,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 358,
        "end": 660,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 503,
          "end": 660,
          "body": [
            {
              "type": "IfStatement",
              "start": 509,
              "end": 640,
              "alternate": null,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 563,
                          "decorators": [],
                          "name": "nodeTagName",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 566,
                          "end": 592,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 566,
                            "end": 590,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 566,
                              "end": 578,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 566,
                                "end": 570,
                                "decorators": [],
                                "name": "node",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 571,
                                "end": 578,
                                "decorators": [],
                                "name": "tagName",
                                "optional": false
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 579,
                              "end": 590,
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 603,
                    "end": 634,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 610,
                      "end": 633,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 621,
                        "decorators": [],
                        "name": "nodeTagName",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 633,
                        "decorators": [],
                        "name": "tagName",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "CallExpression",
                "start": 513,
                "end": 534,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 529,
                    "end": 533,
                    "decorators": [],
                    "name": "node",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 528,
                  "decorators": [],
                  "name": "assertIsElement",
                  "optional": false
                },
                "optional": false
              }
            },
            {
              "type": "ReturnStatement",
              "start": 645,
              "end": 658,
              "argument": {
                "type": "Literal",
                "start": 652,
                "end": 657,
                "raw": "false",
                "value": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 367,
          "end": 384,
          "decorators": [],
          "name": "assertNodeTagName",
          "optional": false
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
                      "optional": false
                    }
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
                  "optional": false
                }
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
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 493,
              "end": 497,
              "decorators": [],
              "name": "node",
              "optional": false
            },
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
                  "optional": false
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 384,
          "end": 460,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 390,
              "end": 423,
              "const": false,
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
                    "optional": false
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 390,
                "end": 391,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 429,
              "end": 459,
              "const": false,
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 439,
                "end": 459,
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
                    "optional": false
                  }
                },
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
                    "optional": false
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 429,
                "end": 430,
                "decorators": [],
                "name": "U",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 664,
      "end": 947,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 671,
        "end": 947,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 874,
          "end": 947,
          "body": [
            {
              "type": "IfStatement",
              "start": 880,
              "end": 945,
              "alternate": null,
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
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 928,
                        "end": 932,
                        "decorators": [],
                        "name": "node",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 937,
                        "decorators": [],
                        "name": "prop",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "CallExpression",
                "start": 884,
                "end": 916,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 902,
                    "end": 906,
                    "decorators": [],
                    "name": "node",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 908,
                    "end": 915,
                    "decorators": [],
                    "name": "tagName",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 901,
                  "decorators": [],
                  "name": "assertNodeTagName",
                  "optional": false
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
          "start": 680,
          "end": 698,
          "decorators": [],
          "name": "assertNodeProperty",
          "optional": false
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
                      "optional": false
                    }
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
                  "optional": false
                }
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
                  "optional": false
                }
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
                  "optional": false
                }
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 698,
          "end": 823,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 704,
              "end": 737,
              "const": false,
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
                    "optional": false
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 743,
              "end": 779,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 753,
                "end": 779,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 759,
                  "end": 779,
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
                      "optional": false
                    }
                  },
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
                      "optional": false
                    }
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 743,
                "end": 744,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 785,
              "end": 822,
              "const": false,
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 795,
                "end": 822,
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
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 795,
                  "end": 819,
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
                      "optional": false
                    }
                  },
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
                      "optional": false
                    }
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 785,
                "end": 786,
                "decorators": [],
                "name": "V",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
