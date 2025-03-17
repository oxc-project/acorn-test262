__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 639,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 28,
        "name": "StatelessComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 28,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 29,
            "end": 35,
            "name": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 33,
              "end": 35,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 37,
        "end": 99,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 41,
            "end": 97,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 74,
                "name": "props",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 50,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                            "computed": false,
                            "optional": true,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 55,
                              "end": 63,
                              "name": "children",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 64,
                              "end": 72,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 66,
                                "end": 72
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 76,
                "end": 89,
                "name": "context",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 86,
                    "end": 89
                  }
                },
                "decorators": [],
                "optional": true
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
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 152,
            "name": "TestComponent",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 141,
                  "name": "StatelessComponent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 141,
                  "end": 152,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 142,
                      "end": 151,
                      "typeName": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 151,
                        "name": "TestProps",
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
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 155,
            "end": 184,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 156,
                "end": 161,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
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
      "type": "TSInterfaceDeclaration",
      "start": 187,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 207,
        "name": "ITestProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 208,
        "end": 233,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 212,
            "end": 231,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 221,
              "name": "ariaLabel",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 230,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
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
      "type": "TSInterfaceDeclaration",
      "start": 236,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 256,
        "name": "NestedProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 256,
        "end": 264,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 257,
            "end": 263,
            "name": {
              "type": "Identifier",
              "start": 257,
              "end": 263,
              "name": "TProps",
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
        "start": 265,
        "end": 285,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 269,
            "end": 283,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 274,
              "name": "props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 282,
                  "name": "TProps",
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
      "type": "TSInterfaceDeclaration",
      "start": 288,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 307,
        "name": "TestProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 308,
        "end": 343,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 312,
            "end": 341,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 316,
              "name": "icon",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 318,
                "end": 340,
                "typeName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 328,
                  "name": "NestedProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 328,
                  "end": 340,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 329,
                      "end": 339,
                      "typeName": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 339,
                        "name": "ITestProps",
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
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 346,
      "end": 436,
      "expression": {
        "type": "CallExpression",
        "start": 346,
        "end": 435,
        "callee": {
          "type": "Identifier",
          "start": 346,
          "end": 359,
          "name": "TestComponent",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 365,
                  "name": "icon",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 367,
                  "end": 433,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 369,
                      "end": 431,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 374,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 376,
                        "end": 431,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 378,
                            "end": 404,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 378,
                              "end": 395,
                              "name": "INVALID_PROP_NAME",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 397,
                              "end": 404,
                              "value": "share",
                              "raw": "'share'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 406,
                            "end": 429,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 406,
                              "end": 415,
                              "name": "ariaLabel",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 417,
                              "end": 429,
                              "value": "test label",
                              "raw": "'test label'"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
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
      "type": "VariableDeclaration",
      "start": 438,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 545,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 513,
            "name": "TestComponent2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 458,
              "end": 513,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 460,
                "end": 513,
                "typeName": {
                  "type": "Identifier",
                  "start": 460,
                  "end": 478,
                  "name": "StatelessComponent",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 488,
                            "name": "TestProps",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 492,
                                "end": 498,
                                "name": "props2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
                                      "computed": false,
                                      "optional": false,
                                      "readonly": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 501,
                                        "end": 502,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 502,
                                        "end": 510,
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 504,
                                          "end": 510
                                        }
                                      },
                                      "accessibility": null,
                                      "static": false
                                    }
                                  ]
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 516,
            "end": 545,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 517,
                "end": 522,
                "name": "props",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
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
      "start": 547,
      "end": 638,
      "expression": {
        "type": "CallExpression",
        "start": 547,
        "end": 637,
        "callee": {
          "type": "Identifier",
          "start": 547,
          "end": 561,
          "name": "TestComponent2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 567,
                  "name": "icon",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 569,
                  "end": 635,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 571,
                      "end": 633,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 571,
                        "end": 576,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 578,
                        "end": 633,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 580,
                            "end": 606,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 580,
                              "end": 597,
                              "name": "INVALID_PROP_NAME",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 599,
                              "end": 606,
                              "value": "share",
                              "raw": "'share'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 608,
                            "end": 631,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 617,
                              "name": "ariaLabel",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 619,
                              "end": 631,
                              "value": "test label",
                              "raw": "'test label'"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
