__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 748,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 17,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 39,
        "name": "testD",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 41,
        "end": 46,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 43,
          "end": 46,
          "literal": {
            "type": "Literal",
            "start": 43,
            "end": 46,
            "value": "d",
            "raw": "\"d\""
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 49,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 76,
        "name": "forceMatch",
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
          "start": 80,
          "end": 117,
          "name": "matched",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 117,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 89,
              "end": 117,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 94,
                "end": 108,
                "name": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 97,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 101,
                  "end": 108,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 107,
                    "end": 108,
                    "typeName": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
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
                "type": "TSTypeReference",
                "start": 111,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 114,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 101,
                "end": 108,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 107,
                  "end": 108,
                  "typeName": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
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
                "start": 94,
                "end": 97,
                "name": "key",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
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
        "start": 118,
        "end": 124,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 161,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 160,
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 137,
          "name": "forceMatch",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 138,
            "end": 159,
            "properties": [
              {
                "type": "Property",
                "start": 142,
                "end": 156,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 143,
                  "end": 150,
                  "callee": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 148,
                    "name": "testD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Literal",
                  "start": 153,
                  "end": 156,
                  "value": "d",
                  "raw": "\"d\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 163,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 191,
        "name": "forceMatch2",
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
          "start": 195,
          "end": 260,
          "name": "matched",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 260,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 204,
              "end": 260,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 209,
                "end": 223,
                "name": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 212,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 216,
                  "end": 223,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
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
                "type": "TSFunctionType",
                "start": 226,
                "end": 257,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 227,
                    "end": 248,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 229,
                        "end": 232,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 232,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 232,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 234,
                      "end": 248,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 236,
                        "end": 248,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 238,
                            "end": 246,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 238,
                              "end": 241,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 241,
                              "end": 246,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 243,
                                "end": 246,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 243,
                                  "end": 246,
                                  "name": "key",
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
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 250,
                  "end": 257,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 253,
                    "end": 257
                  }
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 216,
                "end": 223,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 222,
                  "end": 223,
                  "typeName": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
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
                "start": 209,
                "end": 212,
                "name": "key",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 191,
        "end": 194,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 192,
            "end": 193,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
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
        "start": 261,
        "end": 267,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 263,
          "end": 267
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 317,
      "expression": {
        "type": "CallExpression",
        "start": 270,
        "end": 316,
        "callee": {
          "type": "Identifier",
          "start": 270,
          "end": 281,
          "name": "forceMatch2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 282,
            "end": 315,
            "properties": [
              {
                "type": "Property",
                "start": 286,
                "end": 312,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 287,
                  "end": 294,
                  "callee": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 292,
                    "name": "testD",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 297,
                  "end": 312,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 298,
                      "end": 305,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 300,
                          "end": 303,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 300,
                            "end": 303,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 300,
                            "end": 303,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 310,
                    "end": 312,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 336,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 349,
        "name": "Original",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 352,
        "end": 414,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 354,
            "end": 386,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 385,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 359,
                "end": 385,
                "literal": {
                  "type": "Literal",
                  "start": 359,
                  "end": 385,
                  "value": "expects a string literal",
                  "raw": "'expects a string literal'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 387,
            "end": 400,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 390,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 399,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 392,
                "end": 399
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 401,
            "end": 412,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 404,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 412,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 406,
                "end": 412
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
      "start": 416,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 427,
        "name": "Mapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 430,
        "end": 501,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 435,
          "end": 457,
          "name": {
            "type": "Identifier",
            "start": 435,
            "end": 439,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 443,
            "end": 457,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 449,
              "end": 457,
              "typeName": {
                "type": "Identifier",
                "start": 449,
                "end": 457,
                "name": "Original",
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
          "type": "TSFunctionType",
          "start": 460,
          "end": 499,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 461,
              "end": 480,
              "name": "arg",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 464,
                "end": 480,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 466,
                  "end": 480,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 466,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 474,
                      "name": "Original",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 475,
                    "end": 479,
                    "typeName": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 479,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 482,
            "end": 499,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 485,
              "end": 499,
              "objectType": {
                "type": "TSTypeReference",
                "start": 485,
                "end": 493,
                "typeName": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 493,
                  "name": "Original",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 494,
                "end": 498,
                "typeName": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 498,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 443,
          "end": 457,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 449,
            "end": 457,
            "typeName": {
              "type": "Identifier",
              "start": 449,
              "end": 457,
              "name": "Original",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 435,
          "end": 439,
          "name": "prop",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 503,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 592,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 521,
            "name": "propSelector",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 525,
            "end": 592,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 551,
                "end": 569,
                "name": "propName",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 559,
                  "end": 569,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 561,
                    "end": 569,
                    "typeName": {
                      "type": "Identifier",
                      "start": 561,
                      "end": 569,
                      "name": "propName",
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
              "type": "Identifier",
              "start": 584,
              "end": 592,
              "name": "propName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 525,
              "end": 550,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 526,
                  "end": 549,
                  "name": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 534,
                    "name": "propName",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
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
              "start": 570,
              "end": 580,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 572,
                "end": 580,
                "typeName": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 580,
                  "name": "propName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 595,
      "end": 747,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 601,
          "end": 747,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 635,
            "name": "unexpectedlyFailingExample",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 627,
              "end": 635,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 629,
                "end": 635,
                "typeName": {
                  "type": "Identifier",
                  "start": 629,
                  "end": 635,
                  "name": "Mapped",
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
            "type": "ObjectExpression",
            "start": 638,
            "end": 747,
            "properties": [
              {
                "type": "Property",
                "start": 642,
                "end": 682,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 642,
                  "end": 645,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 647,
                  "end": 682,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 648,
                      "end": 651,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 656,
                    "end": 682,
                    "value": "expects a string literal",
                    "raw": "'expects a string literal'"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 686,
                "end": 704,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 689,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 691,
                  "end": 704,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 692,
                      "end": 695,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 700,
                    "end": 704,
                    "value": true,
                    "raw": "true"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 708,
                "end": 745,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 709,
                  "end": 728,
                  "callee": {
                    "type": "Identifier",
                    "start": 709,
                    "end": 721,
                    "name": "propSelector",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 722,
                      "end": 727,
                      "value": "bar",
                      "raw": "'bar'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 731,
                  "end": 745,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 732,
                      "end": 735,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 740,
                    "end": 745,
                    "value": 51345,
                    "raw": "51345"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
