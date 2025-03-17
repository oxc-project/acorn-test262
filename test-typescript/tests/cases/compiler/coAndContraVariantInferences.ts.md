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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 15,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "a",
                  "raw": "'a'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "b",
                  "raw": "'b'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "name": "A",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 87,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "name": "B",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 90,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "name": "fab",
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
          "start": 111,
          "end": 121,
          "name": "arg",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 120,
                  "end": 121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 122,
        "end": 128,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 124,
          "end": 128
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 131,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "name": "foo",
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
          "start": 155,
          "end": 169,
          "name": "x",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 164,
                    "name": "kind",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 167,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 166,
                      "end": 167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 171,
          "end": 200,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 200,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 174,
              "end": 200,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 191,
                  "name": "arg",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 186,
                            "name": "kind",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 201,
        "end": 207,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 203,
          "end": 207
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 222,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 221,
        "callee": {
          "type": "Identifier",
          "start": 210,
          "end": 213,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "name": "fab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 223,
      "end": 235,
      "expression": {
        "type": "CallExpression",
        "start": 223,
        "end": 234,
        "callee": {
          "type": "Identifier",
          "start": 223,
          "end": 226,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 230,
            "end": 233,
            "name": "fab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 259,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 275,
        "name": "Action",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 275,
        "end": 306,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 276,
            "end": 296,
            "name": {
              "type": "Identifier",
              "start": 276,
              "end": 281,
              "name": "TName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 290,
              "end": 296
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 297,
            "end": 305,
            "name": {
              "type": "Identifier",
              "start": 297,
              "end": 305,
              "name": "TPayload",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 307,
        "end": 349,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 313,
            "end": 325,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 313,
              "end": 317,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 324,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 324,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 324,
                  "name": "TName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 330,
            "end": 347,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 337,
              "name": "payload",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 347,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 347,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 347,
                  "name": "TPayload",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 364,
            "name": "actionA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 376,
                    "name": "payload",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 378,
                    "end": 390,
                    "value": "any-string",
                    "raw": "'any-string'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 396,
              "end": 422,
              "typeName": {
                "type": "Identifier",
                "start": 396,
                "end": 402,
                "name": "Action",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "value": "ACTION_A",
                      "raw": "'ACTION_A'"
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 437,
            "name": "actionB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 449,
                    "name": "payload",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 451,
                    "end": 455,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 461,
              "end": 488,
              "typeName": {
                "type": "Identifier",
                "start": 461,
                "end": 467,
                "name": "Action",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "value": "ACTION_B",
                      "raw": "'ACTION_B'"
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 480,
                    "end": 487
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 491,
      "end": 636,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 504,
        "name": "call",
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
          "start": 539,
          "end": 569,
          "name": "action",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 545,
            "end": 569,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 547,
              "end": 569,
              "typeName": {
                "type": "Identifier",
                "start": 547,
                "end": 553,
                "name": "Action",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 553,
                "end": 569,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 554,
                    "end": 559,
                    "typeName": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 559,
                      "name": "TName",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 560,
                    "end": 568,
                    "typeName": {
                      "type": "Identifier",
                      "start": 560,
                      "end": 568,
                      "name": "TPayload",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 573,
          "end": 615,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 575,
            "end": 615,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 577,
              "end": 615,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 578,
                  "end": 608,
                  "name": "action",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 584,
                    "end": 608,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 586,
                      "end": 608,
                      "typeName": {
                        "type": "Identifier",
                        "start": 586,
                        "end": 592,
                        "name": "Action",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 592,
                        "end": 608,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 593,
                            "end": 598,
                            "typeName": {
                              "type": "Identifier",
                              "start": 593,
                              "end": 598,
                              "name": "TName",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 599,
                            "end": 607,
                            "typeName": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 607,
                              "name": "TPayload",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 619,
        "end": 636,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 623,
            "end": 634,
            "expression": {
              "type": "CallExpression",
              "start": 623,
              "end": 633,
              "callee": {
                "type": "Identifier",
                "start": 623,
                "end": 625,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 626,
                  "end": 632,
                  "name": "action",
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
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 504,
        "end": 535,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 505,
            "end": 525,
            "name": {
              "type": "Identifier",
              "start": 505,
              "end": 510,
              "name": "TName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 519,
              "end": 525
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 526,
            "end": 534,
            "name": {
              "type": "Identifier",
              "start": 526,
              "end": 534,
              "name": "TPayload",
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
      "type": "VariableDeclaration",
      "start": 638,
      "end": 718,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 644,
          "end": 717,
          "id": {
            "type": "Identifier",
            "start": 644,
            "end": 651,
            "name": "printFn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 654,
            "end": 717,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 655,
                "end": 694,
                "name": "action",
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
                          "name": "actionA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "actionB",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 698,
              "end": 717,
              "callee": {
                "type": "MemberExpression",
                "start": 698,
                "end": 709,
                "object": {
                  "type": "Identifier",
                  "start": 698,
                  "end": 705,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 709,
                  "name": "log",
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
                  "start": 710,
                  "end": 716,
                  "name": "action",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 720,
      "end": 743,
      "expression": {
        "type": "CallExpression",
        "start": 720,
        "end": 742,
        "callee": {
          "type": "Identifier",
          "start": 720,
          "end": 724,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 725,
            "end": 732,
            "name": "actionA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 734,
            "end": 741,
            "name": "printFn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 744,
      "end": 767,
      "expression": {
        "type": "CallExpression",
        "start": 744,
        "end": 766,
        "callee": {
          "type": "Identifier",
          "start": 744,
          "end": 748,
          "name": "call",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 749,
            "end": 756,
            "name": "actionB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 758,
            "end": 765,
            "name": "printFn",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
