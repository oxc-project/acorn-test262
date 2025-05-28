__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 607,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 10,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 20,
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 23,
        "end": 122,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 23,
            "end": 71,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 29,
                "end": 51,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 33,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 35,
                    "end": 50,
                    "literal": {
                      "type": "Literal",
                      "start": 35,
                      "end": 50,
                      "value": "numberVariant",
                      "raw": "\"numberVariant\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 56,
                "end": 69,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 60,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 74,
            "end": 122,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 80,
                "end": 102,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 84,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 86,
                    "end": 101,
                    "literal": {
                      "type": "Literal",
                      "start": 86,
                      "end": 101,
                      "value": "stringVariant",
                      "raw": "\"stringVariant\""
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 107,
                "end": 120,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 113,
                    "end": 119
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 125,
      "end": 339,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 140,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 161,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 152,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 166,
            "end": 337,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 172,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 337,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 337,
                "body": [
                  {
                    "type": "WhileStatement",
                    "start": 185,
                    "end": 198,
                    "test": {
                      "type": "Literal",
                      "start": 192,
                      "end": 193,
                      "value": 0,
                      "raw": "0"
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 195,
                      "end": 198,
                      "body": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 207,
                    "end": 223,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 207,
                      "end": 222,
                      "object": {
                        "type": "MemberExpression",
                        "start": 207,
                        "end": 217,
                        "object": {
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 217,
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 222,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 232,
                    "end": 331,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 236,
                      "end": 271,
                      "left": {
                        "type": "MemberExpression",
                        "start": 236,
                        "end": 251,
                        "object": {
                          "type": "MemberExpression",
                          "start": 236,
                          "end": 246,
                          "object": {
                            "type": "ThisExpression",
                            "start": 236,
                            "end": 240
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 241,
                            "end": 246,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 251,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 256,
                        "end": 271,
                        "value": "stringVariant",
                        "raw": "\"stringVariant\""
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 273,
                      "end": 331,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 287,
                          "end": 321,
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 293,
                              "end": 320,
                              "id": {
                                "type": "Identifier",
                                "start": 293,
                                "end": 302,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 294,
                                  "end": 302,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 296,
                                    "end": 302
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 305,
                                "end": 320,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 305,
                                  "end": 315,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 305,
                                    "end": 309
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 310,
                                    "end": 315,
                                    "decorators": [],
                                    "name": "state",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 316,
                                  "end": 320,
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 341,
      "end": 607,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 357,
        "decorators": [],
        "name": "SomeClass2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 358,
        "end": 607,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 364,
            "end": 378,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 364,
              "end": 369,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 377,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 372,
                "end": 377,
                "typeName": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 377,
                  "decorators": [],
                  "name": "State",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 383,
            "end": 605,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 389,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 389,
              "end": 605,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 392,
                "end": 605,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 402,
                    "end": 418,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 408,
                        "end": 417,
                        "id": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 409,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 412,
                          "end": 417,
                          "value": false,
                          "raw": "false"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "WhileStatement",
                    "start": 427,
                    "end": 440,
                    "test": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 435,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 437,
                      "end": 440,
                      "body": []
                    }
                  },
                  {
                    "type": "IfStatement",
                    "start": 449,
                    "end": 530,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 453,
                      "end": 488,
                      "left": {
                        "type": "MemberExpression",
                        "start": 453,
                        "end": 468,
                        "object": {
                          "type": "MemberExpression",
                          "start": 453,
                          "end": 463,
                          "object": {
                            "type": "ThisExpression",
                            "start": 453,
                            "end": 457
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 463,
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 464,
                          "end": 468,
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 473,
                        "end": 488,
                        "value": "numberVariant",
                        "raw": "\"numberVariant\""
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 490,
                      "end": 530,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 504,
                          "end": 520,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 504,
                            "end": 519,
                            "object": {
                              "type": "MemberExpression",
                              "start": 504,
                              "end": 514,
                              "object": {
                                "type": "ThisExpression",
                                "start": 504,
                                "end": 508
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 509,
                                "end": 514,
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 515,
                              "end": 519,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 539,
                    "end": 572,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 543,
                        "end": 571,
                        "id": {
                          "type": "Identifier",
                          "start": 543,
                          "end": 552,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 544,
                            "end": 552,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 546,
                              "end": 552
                            }
                          }
                        },
                        "init": {
                          "type": "ChainExpression",
                          "start": 555,
                          "end": 571,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 555,
                            "end": 571,
                            "object": {
                              "type": "MemberExpression",
                              "start": 555,
                              "end": 565,
                              "object": {
                                "type": "ThisExpression",
                                "start": 555,
                                "end": 559
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 560,
                                "end": 565,
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 567,
                              "end": 571,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "computed": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
