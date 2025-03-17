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
        "name": "State",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 140,
        "name": "SomeClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 147,
            "end": 161,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 152,
              "name": "state",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                  "name": "State",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 166,
            "end": 337,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 172,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 337,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "state",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 222,
                        "name": "data",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 251,
                          "name": "type",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 293,
                              "end": 320,
                              "id": {
                                "type": "Identifier",
                                "start": 293,
                                "end": 302,
                                "name": "s",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 294,
                                  "end": 302,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 296,
                                    "end": 302
                                  }
                                },
                                "decorators": [],
                                "optional": false
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
                                    "name": "state",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 316,
                                  "end": 320,
                                  "name": "data",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 341,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 357,
        "name": "SomeClass2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 358,
        "end": 607,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 364,
            "end": 378,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 364,
              "end": 369,
              "name": "state",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                  "name": "State",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 383,
            "end": 605,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 389,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 389,
              "end": 605,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 392,
                "end": 605,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 402,
                    "end": 418,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 408,
                        "end": 417,
                        "id": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 409,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
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
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "state",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 464,
                          "end": 468,
                          "name": "type",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                                "name": "state",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 515,
                              "end": 519,
                              "name": "data",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 543,
                        "end": 571,
                        "id": {
                          "type": "Identifier",
                          "start": 543,
                          "end": 552,
                          "name": "n",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 544,
                            "end": 552,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 546,
                              "end": 552
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                                "name": "state",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 567,
                              "end": 571,
                              "name": "data",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": true
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
