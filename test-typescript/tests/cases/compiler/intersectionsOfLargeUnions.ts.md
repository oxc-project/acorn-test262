__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 777,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 177,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 29,
        "end": 177,
        "async": false,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 108,
                    "decorators": [],
                    "name": "nodeType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 111,
                    "end": 147,
                    "alternate": {
                      "type": "MemberExpression",
                      "start": 134,
                      "end": 147,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 138,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 147,
                        "decorators": [],
                        "name": "nodeType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "start": 127,
                      "end": 131,
                      "raw": "null",
                      "value": null
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 111,
                      "end": 124,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 111,
                        "end": 115,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 120,
                        "end": 124,
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
              "start": 153,
              "end": 175,
              "argument": {
                "type": "BinaryExpression",
                "start": 160,
                "end": 174,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 168,
                  "decorators": [],
                  "name": "nodeType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 173,
                  "end": 174,
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
          "start": 38,
          "end": 53,
          "decorators": [],
          "name": "assertIsElement",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 54,
            "end": 71,
            "decorators": [],
            "name": "node",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 64,
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 67,
                    "end": 71
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 72,
          "end": 89,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 74,
            "end": 89,
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 89,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 89,
                  "decorators": [],
                  "name": "Element",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 181,
      "end": 490,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 188,
        "end": 490,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 333,
          "end": 490,
          "body": [
            {
              "type": "IfStatement",
              "start": 339,
              "end": 470,
              "alternate": null,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 393,
                          "decorators": [],
                          "name": "nodeTagName",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 396,
                          "end": 422,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 396,
                            "end": 420,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 396,
                              "end": 408,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 396,
                                "end": 400,
                                "decorators": [],
                                "name": "node",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 408,
                                "decorators": [],
                                "name": "tagName",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 409,
                              "end": 420,
                              "decorators": [],
                              "name": "toLowerCase",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 433,
                    "end": 464,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 440,
                      "end": 463,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 440,
                        "end": 451,
                        "decorators": [],
                        "name": "nodeTagName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 456,
                        "end": 463,
                        "decorators": [],
                        "name": "tagName",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "CallExpression",
                "start": 343,
                "end": 364,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 359,
                    "end": 363,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 358,
                  "decorators": [],
                  "name": "assertIsElement",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            },
            {
              "type": "ReturnStatement",
              "start": 475,
              "end": 488,
              "argument": {
                "type": "Literal",
                "start": 482,
                "end": 487,
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
          "start": 197,
          "end": 214,
          "decorators": [],
          "name": "assertNodeTagName",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 291,
            "end": 308,
            "decorators": [],
            "name": "node",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 301,
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 304,
                    "end": 308
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 310,
            "end": 320,
            "decorators": [],
            "name": "tagName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 320,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 321,
          "end": 332,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 323,
            "end": 332,
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 323,
              "end": 327,
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 332,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 214,
          "end": 290,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 220,
              "end": 253,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 230,
                "end": 253,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 236,
                  "end": 253,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 253,
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 259,
              "end": 289,
              "const": false,
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 269,
                "end": 289,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 287,
                  "end": 288,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 288,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 269,
                  "end": 286,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 286,
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
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
      "start": 494,
      "end": 777,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 501,
        "end": 777,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 704,
          "end": 777,
          "body": [
            {
              "type": "IfStatement",
              "start": 710,
              "end": 775,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 748,
                "end": 775,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 758,
                    "end": 769,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 758,
                      "end": 768,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 758,
                        "end": 762,
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 763,
                        "end": 767,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "CallExpression",
                "start": 714,
                "end": 746,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 732,
                    "end": 736,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 738,
                    "end": 745,
                    "decorators": [],
                    "name": "tagName",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 731,
                  "decorators": [],
                  "name": "assertNodeTagName",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 510,
          "end": 528,
          "decorators": [],
          "name": "assertNodeProperty",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 654,
            "end": 671,
            "decorators": [],
            "name": "node",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 664,
                      "decorators": [],
                      "name": "Node",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 667,
                    "end": 671
                  }
                ]
              }
            }
          },
          {
            "type": "Identifier",
            "start": 673,
            "end": 683,
            "decorators": [],
            "name": "tagName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 680,
              "end": 683,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 682,
                "end": 683,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 682,
                  "end": 683,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 685,
            "end": 692,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 689,
              "end": 692,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 691,
                "end": 692,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 694,
            "end": 702,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 699,
              "end": 702,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 701,
                "end": 702,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 528,
          "end": 653,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 534,
              "end": 567,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 544,
                "end": 567,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 550,
                  "end": 567,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 567,
                    "decorators": [],
                    "name": "ElementTagNameMap",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 534,
                "end": 535,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 573,
              "end": 609,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 583,
                "end": 609,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 589,
                  "end": 609,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 607,
                    "end": 608,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 607,
                      "end": 608,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 589,
                    "end": 606,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 589,
                      "end": 606,
                      "decorators": [],
                      "name": "ElementTagNameMap",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 573,
                "end": 574,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 615,
              "end": 652,
              "const": false,
              "constraint": {
                "type": "TSIndexedAccessType",
                "start": 625,
                "end": 652,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 650,
                  "end": 651,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 625,
                  "end": 649,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 647,
                    "end": 648,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 648,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 625,
                    "end": 646,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 625,
                      "end": 646,
                      "decorators": [],
                      "name": "HTMLElementTagNameMap",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 615,
                "end": 616,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
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
