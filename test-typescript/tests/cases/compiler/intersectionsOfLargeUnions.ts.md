__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 778,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 177,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 29,
        "end": 177,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 53,
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
            "start": 54,
            "end": 71,
            "name": "node",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 71,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 60,
                "end": 71,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 60,
                    "end": 64,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 64,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 67,
                    "end": 71
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
          "start": 90,
          "end": 177,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 96,
              "end": 148,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 100,
                  "end": 147,
                  "id": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 108,
                    "name": "nodeType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 111,
                    "end": 147,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 111,
                      "end": 124,
                      "left": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 115,
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 120,
                        "end": 124,
                        "value": null,
                        "raw": "null"
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 127,
                      "end": 131,
                      "value": null,
                      "raw": "null"
                    },
                    "alternate": {
                      "type": "MemberExpression",
                      "start": 134,
                      "end": 147,
                      "object": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 138,
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 147,
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
              "start": 153,
              "end": 175,
              "argument": {
                "type": "BinaryExpression",
                "start": 160,
                "end": 174,
                "left": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 168,
                  "name": "nodeType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 173,
                  "end": 174,
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
          "start": 72,
          "end": 89,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 74,
            "end": 89,
            "parameterName": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "name": "node",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 89,
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
      "start": 181,
      "end": 490,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 188,
        "end": 490,
        "id": {
          "type": "Identifier",
          "start": 197,
          "end": 214,
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
            "start": 291,
            "end": 308,
            "name": "node",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 308,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 297,
                "end": 308,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 297,
                    "end": 301,
                    "typeName": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 301,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 304,
                    "end": 308
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 310,
            "end": 320,
            "name": "tagName",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 320,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
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
          "start": 333,
          "end": 490,
          "body": [
            {
              "type": "IfStatement",
              "start": 339,
              "end": 470,
              "test": {
                "type": "CallExpression",
                "start": 343,
                "end": 364,
                "callee": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 358,
                  "name": "assertIsElement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 359,
                    "end": 363,
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
                "start": 366,
                "end": 470,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 376,
                    "end": 423,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 382,
                        "end": 422,
                        "id": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 393,
                          "name": "nodeTagName",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 396,
                          "end": 422,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 396,
                            "end": 420,
                            "object": {
                              "type": "MemberExpression",
                              "start": 396,
                              "end": 408,
                              "object": {
                                "type": "Identifier",
                                "start": 396,
                                "end": 400,
                                "name": "node",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 408,
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
                              "start": 409,
                              "end": 420,
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
                    "start": 433,
                    "end": 464,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 440,
                      "end": 463,
                      "left": {
                        "type": "Identifier",
                        "start": 440,
                        "end": 451,
                        "name": "nodeTagName",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 463,
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
              "start": 475,
              "end": 488,
              "argument": {
                "type": "Literal",
                "start": 482,
                "end": 487,
                "value": false,
                "raw": "false"
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 214,
          "end": 290,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 220,
              "end": 253,
              "name": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 230,
                "end": 253,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 236,
                  "end": 253,
                  "typeName": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 253,
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
              "start": 259,
              "end": 289,
              "name": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 269,
                "end": 289,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 269,
                  "end": 286,
                  "typeName": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 286,
                    "name": "ElementTagNameMap",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 287,
                  "end": 288,
                  "typeName": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 288,
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
          "start": 321,
          "end": 332,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 323,
            "end": 332,
            "parameterName": {
              "type": "Identifier",
              "start": 323,
              "end": 327,
              "name": "node",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 332,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
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
      "start": 494,
      "end": 777,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 501,
        "end": 777,
        "id": {
          "type": "Identifier",
          "start": 510,
          "end": 528,
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
            "start": 654,
            "end": 671,
            "name": "node",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 658,
              "end": 671,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 660,
                "end": 671,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 660,
                    "end": 664,
                    "typeName": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 664,
                      "name": "Node",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 667,
                    "end": 671
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 673,
            "end": 683,
            "name": "tagName",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 680,
              "end": 683,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 682,
                "end": 683,
                "typeName": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
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
            "start": 685,
            "end": 692,
            "name": "prop",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 689,
              "end": 692,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 691,
                "end": 692,
                "typeName": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
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
            "start": 694,
            "end": 702,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 699,
              "end": 702,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 701,
                "end": 702,
                "typeName": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
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
          "start": 704,
          "end": 777,
          "body": [
            {
              "type": "IfStatement",
              "start": 710,
              "end": 775,
              "test": {
                "type": "CallExpression",
                "start": 714,
                "end": 746,
                "callee": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 731,
                  "name": "assertNodeTagName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 732,
                    "end": 736,
                    "name": "node",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 738,
                    "end": 745,
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
                "start": 748,
                "end": 775,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 758,
                    "end": 769,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 758,
                      "end": 768,
                      "object": {
                        "type": "Identifier",
                        "start": 758,
                        "end": 762,
                        "name": "node",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 763,
                        "end": 767,
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
          "start": 528,
          "end": 653,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 534,
              "end": 567,
              "name": {
                "type": "Identifier",
                "start": 534,
                "end": 535,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 544,
                "end": 567,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 550,
                  "end": 567,
                  "typeName": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 567,
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
              "start": 573,
              "end": 609,
              "name": {
                "type": "Identifier",
                "start": 573,
                "end": 574,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 583,
                "end": 609,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 589,
                  "end": 609,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 589,
                    "end": 606,
                    "typeName": {
                      "type": "Identifier",
                      "start": 589,
                      "end": 606,
                      "name": "ElementTagNameMap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 607,
                    "end": 608,
                    "typeName": {
                      "type": "Identifier",
                      "start": 607,
                      "end": 608,
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
              "start": 615,
              "end": 652,
              "name": {
                "type": "Identifier",
                "start": 615,
                "end": 616,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 625,
                "end": 652,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 625,
                  "end": 649,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 625,
                    "end": 646,
                    "typeName": {
                      "type": "Identifier",
                      "start": 625,
                      "end": 646,
                      "name": "HTMLElementTagNameMap",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 647,
                    "end": 648,
                    "typeName": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 648,
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
                  "start": 650,
                  "end": 651,
                  "typeName": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
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
