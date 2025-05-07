__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 638,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 99,
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 99,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 41,
            "end": 97,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 74,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 49,
                    "end": 74,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 49,
                        "end": 50,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 50,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 53,
                        "end": 74,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 55,
                            "end": 72,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 55,
                              "end": 63,
                              "decorators": [],
                              "name": "children",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 64,
                              "end": 72,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 76,
                "end": 89,
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 86,
                    "end": 89
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 92,
                "end": 96
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 28,
        "decorators": [],
        "name": "StatelessComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 35,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 33,
              "end": 35,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "P",
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
      "start": 102,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 152,
            "decorators": [],
            "name": "TestComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 152,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 141,
                  "end": 152,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 142,
                      "end": 151,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 151,
                        "decorators": [],
                        "name": "TestProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 141,
                  "decorators": [],
                  "name": "StatelessComponent",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 155,
            "end": 184,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 166,
              "end": 184,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 170,
                  "end": 182,
                  "argument": {
                    "type": "Literal",
                    "start": 177,
                    "end": 181,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 156,
                "end": 161,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
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
      "type": "TSInterfaceDeclaration",
      "start": 187,
      "end": 233,
      "body": {
        "type": "TSInterfaceBody",
        "start": 208,
        "end": 233,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 212,
            "end": 231,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 221,
              "decorators": [],
              "name": "ariaLabel",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 207,
        "decorators": [],
        "name": "ITestProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 236,
      "end": 285,
      "body": {
        "type": "TSInterfaceBody",
        "start": 265,
        "end": 285,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 269,
            "end": 283,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 274,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 282,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 282,
                  "decorators": [],
                  "name": "TProps",
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
        "start": 246,
        "end": 256,
        "decorators": [],
        "name": "NestedProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 256,
        "end": 264,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 257,
            "end": 263,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 257,
              "end": 263,
              "decorators": [],
              "name": "TProps",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 288,
      "end": 343,
      "body": {
        "type": "TSInterfaceBody",
        "start": 308,
        "end": 343,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 312,
            "end": 341,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 316,
              "decorators": [],
              "name": "icon",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 318,
                "end": 340,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 328,
                  "end": 340,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 329,
                      "end": 339,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 339,
                        "decorators": [],
                        "name": "ITestProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 328,
                  "decorators": [],
                  "name": "NestedProp",
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
        "start": 298,
        "end": 307,
        "decorators": [],
        "name": "TestProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 436,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 346,
        "end": 435,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 360,
            "end": 434,
            "properties": [
              {
                "type": "Property",
                "start": 361,
                "end": 433,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 365,
                  "decorators": [],
                  "name": "icon",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 367,
                  "end": 433,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 369,
                      "end": 431,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 374,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 376,
                        "end": 431,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 378,
                            "end": 404,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 378,
                              "end": 395,
                              "decorators": [],
                              "name": "INVALID_PROP_NAME",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 397,
                              "end": 404,
                              "raw": "'share'",
                              "value": "share",
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 406,
                            "end": 429,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 406,
                              "end": 415,
                              "decorators": [],
                              "name": "ariaLabel",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 417,
                              "end": 429,
                              "raw": "'test label'",
                              "value": "test label",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 346,
          "end": 359,
          "decorators": [],
          "name": "TestComponent",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 545,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 513,
            "decorators": [],
            "name": "TestComponent2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 513,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 460,
                "end": 513,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 478,
                  "end": 513,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 479,
                      "end": 512,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 479,
                          "end": 488,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 488,
                            "decorators": [],
                            "name": "TestProps",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 491,
                          "end": 512,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 492,
                              "end": 511,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 492,
                                "end": 498,
                                "decorators": [],
                                "name": "props2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 498,
                                "end": 511,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 500,
                                  "end": 511,
                                  "members": [
                                    {
                                      "type": "TSPropertySignature",
                                      "start": 501,
                                      "end": 510,
                                      "accessibility": null,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 501,
                                        "end": 502,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "readonly": false,
                                      "static": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 502,
                                        "end": 510,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 504,
                                          "end": 510
                                        }
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 478,
                  "decorators": [],
                  "name": "StatelessComponent",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 516,
            "end": 545,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 527,
              "end": 545,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 531,
                  "end": 543,
                  "argument": {
                    "type": "Literal",
                    "start": 538,
                    "end": 542,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 517,
                "end": 522,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null
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
      "start": 547,
      "end": 638,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 547,
        "end": 637,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 562,
            "end": 636,
            "properties": [
              {
                "type": "Property",
                "start": 563,
                "end": 635,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 567,
                  "decorators": [],
                  "name": "icon",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 569,
                  "end": 635,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 571,
                      "end": 633,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 576,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "start": 578,
                        "end": 633,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 580,
                            "end": 606,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 580,
                              "end": 597,
                              "decorators": [],
                              "name": "INVALID_PROP_NAME",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 599,
                              "end": 606,
                              "raw": "'share'",
                              "value": "share",
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 608,
                            "end": 631,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 617,
                              "decorators": [],
                              "name": "ariaLabel",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 619,
                              "end": 631,
                              "raw": "'test label'",
                              "value": "test label",
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 547,
          "end": 561,
          "decorators": [],
          "name": "TestComponent2",
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
