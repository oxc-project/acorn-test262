__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 69,
  "end": 615,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 218,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 218,
        "body": [
          {
            "type": "IfStatement",
            "start": 127,
            "end": 216,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 147,
              "end": 216,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 157,
                  "end": 171,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 161,
                      "end": 170,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 166,
                        "decorators": [],
                        "name": "v1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 163,
                          "end": 166,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 165,
                            "end": 166,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 180,
                  "end": 194,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 184,
                      "end": 193,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 189,
                        "decorators": [],
                        "name": "v2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 186,
                          "end": 189,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 188,
                            "end": 189,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 188,
                              "end": 189,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 203,
                  "end": 210,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 203,
                    "end": 209,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 204,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 209,
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
              "type": "BinaryExpression",
              "start": 131,
              "end": 145,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
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
        "start": 109,
        "end": 111,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 115,
          "end": 119,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "T",
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
        "start": 111,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 220,
      "end": 352,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 352,
        "body": [
          {
            "type": "IfStatement",
            "start": 247,
            "end": 350,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 274,
              "end": 350,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 284,
                  "end": 298,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 288,
                      "end": 297,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 293,
                        "decorators": [],
                        "name": "v1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 290,
                          "end": 293,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 292,
                            "end": 293,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 292,
                              "end": 293,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 307,
                  "end": 326,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 311,
                      "end": 325,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 321,
                        "decorators": [],
                        "name": "v2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 313,
                          "end": 321,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 315,
                            "end": 321
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 325,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 335,
                  "end": 344,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 335,
                    "end": 343,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 336,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 343,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 251,
              "end": 272,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 251,
                "end": 259,
                "argument": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 264,
                "end": 272,
                "raw": "\"string\"",
                "value": "string"
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
        "start": 229,
        "end": 231,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 235,
          "end": 239,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 239,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 238,
              "end": 239,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "T",
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
        "start": 231,
        "end": 234,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 232,
            "end": 233,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 376,
      "end": 614,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 424,
        "end": 614,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 430,
            "end": 459,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 436,
                "end": 458,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 453,
                  "decorators": [],
                  "name": "strings",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 453,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 445,
                      "end": 453,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 445,
                        "end": 451
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 456,
                  "end": 458,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ForInStatement",
            "start": 464,
            "end": 612,
            "body": {
              "type": "BlockStatement",
              "start": 488,
              "end": 612,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 498,
                  "end": 522,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 504,
                      "end": 521,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 504,
                        "end": 509,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 512,
                        "end": 521,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 512,
                          "end": 516,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 517,
                          "end": 520,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "start": 531,
                  "end": 606,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 562,
                    "end": 606,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 576,
                        "end": 596,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 576,
                          "end": 595,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 589,
                              "end": 594,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 576,
                            "end": 588,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 576,
                              "end": 583,
                              "decorators": [],
                              "name": "strings",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 584,
                              "end": 588,
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 535,
                    "end": 560,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 535,
                      "end": 547,
                      "argument": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 547,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 552,
                      "end": 560,
                      "raw": "\"string\"",
                      "value": "string"
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 469,
              "end": 478,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 475,
                  "end": 478,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 478,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 482,
              "end": 486,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 388,
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 392,
          "end": 422,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 396,
            "end": 422,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 398,
              "end": 422,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 406,
                "end": 413,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 412,
                  "end": 413,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 413,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 401,
                "end": 402,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "nameType": null,
              "optional": null,
              "readonly": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 416,
                "end": 420,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 418,
                  "end": 419,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 416,
                  "end": 417,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 388,
        "end": 391,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 389,
            "end": 390,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
