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
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 96,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 111,
        "name": "f1",
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
          "start": 115,
          "end": 119,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
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
        "start": 121,
        "end": 218,
        "body": [
          {
            "type": "IfStatement",
            "start": 127,
            "end": 216,
            "test": {
              "type": "BinaryExpression",
              "start": 131,
              "end": 145,
              "left": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 166,
                        "name": "v1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 163,
                          "end": 166,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 165,
                            "end": 166,
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 166,
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
                      "init": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 189,
                        "name": "v2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 186,
                          "end": 189,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 188,
                            "end": 189,
                            "typeName": {
                              "type": "Identifier",
                              "start": 188,
                              "end": 189,
                              "name": "C",
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
                      "init": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 203,
                  "end": 210,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 203,
                    "end": 209,
                    "object": {
                      "type": "Identifier",
                      "start": 203,
                      "end": 204,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 209,
                      "name": "prop",
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 111,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 220,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 231,
        "name": "f2",
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
          "start": 235,
          "end": 239,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 239,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 238,
              "end": 239,
              "typeName": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
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
        "start": 241,
        "end": 352,
        "body": [
          {
            "type": "IfStatement",
            "start": 247,
            "end": 350,
            "test": {
              "type": "BinaryExpression",
              "start": 251,
              "end": 272,
              "left": {
                "type": "UnaryExpression",
                "start": 251,
                "end": 259,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 264,
                "end": 272,
                "value": "string",
                "raw": "\"string\""
              }
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 288,
                        "end": 293,
                        "name": "v1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 290,
                          "end": 293,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 292,
                            "end": 293,
                            "typeName": {
                              "type": "Identifier",
                              "start": 292,
                              "end": 293,
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
                      "init": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 297,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 321,
                        "name": "v2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 313,
                          "end": 321,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 315,
                            "end": 321
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 325,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 335,
                  "end": 344,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 335,
                    "end": 343,
                    "object": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 336,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 343,
                      "name": "length",
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 231,
        "end": 234,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 232,
            "end": 233,
            "name": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 376,
      "end": 614,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 388,
        "name": "fun",
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
          "start": 392,
          "end": 422,
          "name": "item",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 396,
            "end": 422,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 398,
              "end": 422,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 401,
                "end": 413,
                "name": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 406,
                  "end": 413,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 412,
                    "end": 413,
                    "typeName": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 413,
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
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 416,
                "end": 420,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 416,
                  "end": 417,
                  "typeName": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 417,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 418,
                  "end": 419,
                  "typeName": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 406,
                "end": 413,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 412,
                  "end": 413,
                  "typeName": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 413,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "key": {
                "type": "Identifier",
                "start": 401,
                "end": 402,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 453,
                  "name": "strings",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 456,
                  "end": 458,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ForInStatement",
            "start": 464,
            "end": 612,
            "left": {
              "type": "VariableDeclaration",
              "start": 469,
              "end": 478,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 475,
                  "end": 478,
                  "id": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 478,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 482,
              "end": 486,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 504,
                        "end": 509,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 512,
                        "end": 521,
                        "object": {
                          "type": "Identifier",
                          "start": 512,
                          "end": 516,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 517,
                          "end": 520,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 531,
                  "end": 606,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 535,
                    "end": 560,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 535,
                      "end": 547,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 547,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 552,
                      "end": 560,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 562,
                    "end": 606,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 576,
                        "end": 596,
                        "expression": {
                          "type": "CallExpression",
                          "start": 576,
                          "end": 595,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 576,
                            "end": 588,
                            "object": {
                              "type": "Identifier",
                              "start": 576,
                              "end": 583,
                              "name": "strings",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 584,
                              "end": 588,
                              "name": "push",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 589,
                              "end": 594,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 388,
        "end": 391,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 389,
            "end": 390,
            "name": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
