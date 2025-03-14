contextualComputedNonBindablePropertyType.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 39,
        "decorators": [],
        "name": "testD",
        "optional": false
      },
      "params": [],
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
            "raw": "\"d\"",
            "value": "d"
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 49,
      "end": 125,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 76,
        "decorators": [],
        "name": "forceMatch",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 80,
          "end": 117,
          "decorators": [],
          "name": "matched",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 117,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 89,
              "end": 117,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 97,
                "decorators": [],
                "name": "key",
                "optional": false
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
                  "decorators": [],
                  "name": "key",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 118,
        "end": 124,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 143,
                  "end": 150,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 148,
                    "decorators": [],
                    "name": "testD",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 153,
                  "end": 156,
                  "raw": "\"d\"",
                  "value": "d"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 137,
          "decorators": [],
          "name": "forceMatch",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 163,
      "end": 268,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 191,
        "decorators": [],
        "name": "forceMatch2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 195,
          "end": 260,
          "decorators": [],
          "name": "matched",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 260,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 204,
              "end": 260,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 209,
                "end": 212,
                "decorators": [],
                "name": "key",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 226,
                "end": 257,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 227,
                    "end": 248,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 229,
                        "end": 232,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 232,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 232,
                          "decorators": [],
                          "name": "key",
                          "optional": false
                        }
                      }
                    ],
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
                            "key": {
                              "type": "Identifier",
                              "start": 238,
                              "end": 241,
                              "decorators": [],
                              "name": "key",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
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
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false
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
                  "start": 250,
                  "end": 257,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 253,
                    "end": 257
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 261,
        "end": 267,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 263,
          "end": 267
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 191,
        "end": 194,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 192,
            "end": 193,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 287,
                  "end": 294,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 292,
                    "decorators": [],
                    "name": "testD",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 297,
                  "end": 312,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 310,
                    "end": 312,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 298,
                      "end": 305,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 300,
                          "end": 303,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 300,
                            "end": 303,
                            "decorators": [],
                            "name": "key",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 300,
                            "end": 303,
                            "decorators": [],
                            "name": "key",
                            "optional": false
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 270,
          "end": 281,
          "decorators": [],
          "name": "forceMatch2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 336,
      "end": 414,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 349,
        "decorators": [],
        "name": "Original",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 357,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "'expects a string literal'",
                  "value": "expects a string literal"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 387,
            "end": 400,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 387,
              "end": 390,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 399,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 392,
                "end": 399
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 401,
            "end": 412,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 401,
              "end": 404,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 412,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 406,
                "end": 412
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 416,
      "end": 501,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 427,
        "decorators": [],
        "name": "Mapped",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 430,
        "end": 501,
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
              "decorators": [],
              "name": "Original",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 435,
          "end": 439,
          "decorators": [],
          "name": "prop",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 460,
          "end": 499,
          "params": [
            {
              "type": "Identifier",
              "start": 461,
              "end": 480,
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 464,
                "end": 480,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 466,
                  "end": 480,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 475,
                    "end": 479,
                    "typeName": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 479,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 466,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 474,
                      "decorators": [],
                      "name": "Original",
                      "optional": false
                    }
                  }
                }
              }
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
              "indexType": {
                "type": "TSTypeReference",
                "start": 494,
                "end": 498,
                "typeName": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 498,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 485,
                "end": 493,
                "typeName": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 493,
                  "decorators": [],
                  "name": "Original",
                  "optional": false
                }
              }
            }
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 521,
            "decorators": [],
            "name": "propSelector",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 525,
            "end": 592,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 584,
              "end": 592,
              "decorators": [],
              "name": "propName",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 551,
                "end": 569,
                "decorators": [],
                "name": "propName",
                "optional": false,
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
                      "decorators": [],
                      "name": "propName",
                      "optional": false
                    }
                  }
                }
              }
            ],
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
                  "decorators": [],
                  "name": "propName",
                  "optional": false
                }
              }
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
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 534,
                    "decorators": [],
                    "name": "propName",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 635,
            "decorators": [],
            "name": "unexpectedlyFailingExample",
            "optional": false,
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
                  "decorators": [],
                  "name": "Mapped",
                  "optional": false
                }
              }
            }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 642,
                  "end": 645,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 647,
                  "end": 682,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 656,
                    "end": 682,
                    "raw": "'expects a string literal'",
                    "value": "expects a string literal"
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 648,
                      "end": 651,
                      "decorators": [],
                      "name": "arg",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 686,
                "end": 704,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 689,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 691,
                  "end": 704,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 700,
                    "end": 704,
                    "raw": "true",
                    "value": true
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 692,
                      "end": 695,
                      "decorators": [],
                      "name": "arg",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 708,
                "end": 745,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 709,
                  "end": 728,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 722,
                      "end": 727,
                      "raw": "'bar'",
                      "value": "bar"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 709,
                    "end": 721,
                    "decorators": [],
                    "name": "propSelector",
                    "optional": false
                  },
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 731,
                  "end": 745,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 740,
                    "end": 745,
                    "raw": "51345",
                    "value": 51345
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 732,
                      "end": 735,
                      "decorators": [],
                      "name": "arg",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
