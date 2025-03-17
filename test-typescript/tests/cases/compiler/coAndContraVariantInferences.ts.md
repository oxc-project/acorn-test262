__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 768,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 15,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 17,
                "end": 20,
                "literal": {
                  "type": "Literal",
                  "start": 17,
                  "end": 20,
                  "raw": "'a'",
                  "value": "a"
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 41,
                "end": 44,
                "literal": {
                  "type": "Literal",
                  "start": 41,
                  "end": 44,
                  "raw": "'b'",
                  "value": "b"
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 87,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 87,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 129,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "fab",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 111,
          "end": 121,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 121,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 116,
              "end": 121,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 116,
                  "end": 117,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 120,
                  "end": 121,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 122,
        "end": 128,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 124,
          "end": 128
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 131,
      "end": 208,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 155,
          "end": 169,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 169,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 158,
              "end": 169,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 160,
                  "end": 167,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 164,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 167,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 166,
                      "end": 167,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 171,
          "end": 200,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 200,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 174,
              "end": 200,
              "params": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 191,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 178,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 180,
                      "end": 191,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 182,
                          "end": 189,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 186,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 193,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 196,
                  "end": 200
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 201,
        "end": 207,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 203,
          "end": 207
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
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
      "type": "ExpressionStatement",
      "start": 210,
      "end": 222,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 221,
        "arguments": [
          {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "fab",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 210,
          "end": 213,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 235,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 223,
        "end": 234,
        "arguments": [
          {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 230,
            "end": 233,
            "decorators": [],
            "name": "fab",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 223,
          "end": 226,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 259,
      "end": 349,
      "body": {
        "type": "TSInterfaceBody",
        "start": 307,
        "end": 349,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 313,
            "end": 325,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 313,
              "end": 317,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 324,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 324,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 324,
                  "decorators": [],
                  "name": "TName",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 330,
            "end": 347,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 337,
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 347,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 347,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
                  "decorators": [],
                  "name": "TPayload",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 269,
        "end": 275,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 275,
        "end": 306,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 276,
            "end": 296,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 290,
              "end": 296
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 276,
              "end": 281,
              "decorators": [],
              "name": "TName",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 297,
            "end": 305,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 297,
              "end": 305,
              "decorators": [],
              "name": "TPayload",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 423,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 422,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 364,
            "decorators": [],
            "name": "actionA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 367,
            "end": 422,
            "expression": {
              "type": "ObjectExpression",
              "start": 367,
              "end": 392,
              "properties": [
                {
                  "type": "Property",
                  "start": 369,
                  "end": 390,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 376,
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 378,
                    "end": 390,
                    "raw": "'any-string'",
                    "value": "any-string"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 396,
              "end": 422,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 402,
                "end": 422,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 403,
                    "end": 413,
                    "literal": {
                      "type": "Literal",
                      "start": 403,
                      "end": 413,
                      "raw": "'ACTION_A'",
                      "value": "ACTION_A"
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 396,
                "end": 402,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 424,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 488,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 437,
            "decorators": [],
            "name": "actionB",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 440,
            "end": 488,
            "expression": {
              "type": "ObjectExpression",
              "start": 440,
              "end": 457,
              "properties": [
                {
                  "type": "Property",
                  "start": 442,
                  "end": 455,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 449,
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 451,
                    "end": 455,
                    "raw": "true",
                    "value": true
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 461,
              "end": 488,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 467,
                "end": 488,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 468,
                    "end": 478,
                    "literal": {
                      "type": "Literal",
                      "start": 468,
                      "end": 478,
                      "raw": "'ACTION_B'",
                      "value": "ACTION_B"
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 480,
                    "end": 487
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 461,
                "end": 467,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 491,
      "end": 636,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 619,
        "end": 636,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 623,
            "end": 634,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 623,
              "end": 633,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 626,
                  "end": 632,
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 623,
                "end": 625,
                "decorators": [],
                "name": "fn",
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
        "start": 500,
        "end": 504,
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 539,
          "end": 569,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 545,
            "end": 569,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 547,
              "end": 569,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 553,
                "end": 569,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 554,
                    "end": 559,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 559,
                      "decorators": [],
                      "name": "TName",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 560,
                    "end": 568,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 560,
                      "end": 568,
                      "decorators": [],
                      "name": "TPayload",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 547,
                "end": 553,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 573,
          "end": 615,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 575,
            "end": 615,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 577,
              "end": 615,
              "params": [
                {
                  "type": "Identifier",
                  "start": 578,
                  "end": 608,
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 584,
                    "end": 608,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 586,
                      "end": 608,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 592,
                        "end": 608,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 593,
                            "end": 598,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 593,
                              "end": 598,
                              "decorators": [],
                              "name": "TName",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 599,
                            "end": 607,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 607,
                              "decorators": [],
                              "name": "TPayload",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 592,
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 609,
                "end": 615,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 612,
                  "end": 615
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 504,
        "end": 535,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 505,
            "end": 525,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 519,
              "end": 525
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 505,
              "end": 510,
              "decorators": [],
              "name": "TName",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 526,
            "end": 534,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 526,
              "end": 534,
              "decorators": [],
              "name": "TPayload",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 638,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 717,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 651,
            "decorators": [],
            "name": "printFn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 654,
            "end": 717,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 698,
              "end": 717,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 710,
                  "end": 716,
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 698,
                "end": 709,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 705,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 709,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 655,
                "end": 694,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 661,
                  "end": 694,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 663,
                    "end": 694,
                    "types": [
                      {
                        "type": "TSTypeQuery",
                        "start": 663,
                        "end": 677,
                        "exprName": {
                          "type": "Identifier",
                          "start": 670,
                          "end": 677,
                          "decorators": [],
                          "name": "actionA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeQuery",
                        "start": 680,
                        "end": 694,
                        "exprName": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 694,
                          "decorators": [],
                          "name": "actionB",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 720,
      "end": 743,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 720,
        "end": 742,
        "arguments": [
          {
            "type": "Identifier",
            "start": 725,
            "end": 732,
            "decorators": [],
            "name": "actionA",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 734,
            "end": 741,
            "decorators": [],
            "name": "printFn",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 720,
          "end": 724,
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 744,
      "end": 767,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 744,
        "end": 766,
        "arguments": [
          {
            "type": "Identifier",
            "start": 749,
            "end": 756,
            "decorators": [],
            "name": "actionB",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 758,
            "end": 765,
            "decorators": [],
            "name": "printFn",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 744,
          "end": 748,
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
