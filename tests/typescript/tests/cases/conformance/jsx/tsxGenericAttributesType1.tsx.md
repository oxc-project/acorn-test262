__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 607,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 195,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 49,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 52,
            "end": 194,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 61,
              "end": 64,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 62,
                  "end": 63,
                  "name": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 103,
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 74,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 103,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 76,
                      "end": 100,
                      "left": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 81,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 100,
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 100,
                      "end": 103,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 101,
                          "end": 102,
                          "typeName": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 102,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 133,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 106,
                  "end": 130,
                  "left": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 111,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 130,
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 130,
                  "end": 133,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 131,
                      "end": 132,
                      "typeName": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 134,
              "end": 194,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 140,
                  "end": 192,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 147,
                    "end": 192,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 148,
                        "end": 153,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 158,
                      "end": 192,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 158,
                        "end": 180,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 159,
                          "end": 168,
                          "name": "Component"
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 169,
                            "end": 179,
                            "argument": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 178,
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "selfClosing": false
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 180,
                        "end": 192,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 182,
                          "end": 191,
                          "name": "Component"
                        }
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 388,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 387,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 213,
            "decorators": [],
            "name": "decorator2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 216,
            "end": 387,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 225,
              "end": 250,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 226,
                  "end": 249,
                  "name": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 236,
                    "end": 249,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 238,
                        "end": 247,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 239,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 239,
                          "end": 247,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 241,
                            "end": 247
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 251,
                "end": 289,
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 260,
                  "end": 289,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 262,
                    "end": 289,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 262,
                      "end": 286,
                      "left": {
                        "type": "Identifier",
                        "start": 262,
                        "end": 267,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 286,
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 286,
                      "end": 289,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 287,
                          "end": 288,
                          "typeName": {
                            "type": "Identifier",
                            "start": 287,
                            "end": 288,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 319,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 292,
                "end": 319,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 292,
                  "end": 316,
                  "left": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 297,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 316,
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 316,
                  "end": 319,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 317,
                      "end": 318,
                      "typeName": {
                        "type": "Identifier",
                        "start": 317,
                        "end": 318,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 320,
              "end": 387,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 326,
                  "end": 385,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 333,
                    "end": 385,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 334,
                        "end": 339,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 344,
                      "end": 385,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 344,
                        "end": 373,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 345,
                          "end": 354,
                          "name": "Component"
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 355,
                            "end": 365,
                            "argument": {
                              "type": "Identifier",
                              "start": 359,
                              "end": 364,
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "start": 366,
                            "end": 371,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 366,
                              "end": 367,
                              "name": "x"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 368,
                              "end": 371,
                              "expression": {
                                "type": "Literal",
                                "start": 369,
                                "end": 370,
                                "value": 2,
                                "raw": "2"
                              }
                            }
                          }
                        ],
                        "selfClosing": false
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 373,
                        "end": 385,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 375,
                          "end": 384,
                          "name": "Component"
                        }
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 390,
      "end": 607,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 606,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 406,
            "decorators": [],
            "name": "decorator3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 409,
            "end": 606,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 418,
              "end": 469,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 419,
                  "end": 442,
                  "name": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 429,
                    "end": 442,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 431,
                        "end": 440,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 432,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 432,
                          "end": 440,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 434,
                            "end": 440
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 444,
                  "end": 467,
                  "name": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 454,
                    "end": 467,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 456,
                        "end": 465,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 457,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 457,
                          "end": 465,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 459,
                            "end": 465
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 470,
                "end": 508,
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 479,
                  "end": 508,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 481,
                    "end": 508,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 481,
                      "end": 505,
                      "left": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 486,
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 487,
                        "end": 505,
                        "decorators": [],
                        "name": "StatelessComponent",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 505,
                      "end": 508,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 506,
                          "end": 507,
                          "typeName": {
                            "type": "Identifier",
                            "start": 506,
                            "end": 507,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 509,
              "end": 538,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 511,
                "end": 538,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 511,
                  "end": 535,
                  "left": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 516,
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 535,
                    "decorators": [],
                    "name": "StatelessComponent",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 535,
                  "end": 538,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 536,
                      "end": 537,
                      "typeName": {
                        "type": "Identifier",
                        "start": 536,
                        "end": 537,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 539,
              "end": 606,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 545,
                  "end": 604,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 552,
                    "end": 604,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 553,
                        "end": 558,
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "JSXElement",
                      "start": 563,
                      "end": 604,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 563,
                        "end": 592,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 564,
                          "end": 573,
                          "name": "Component"
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "start": 574,
                            "end": 579,
                            "name": {
                              "type": "JSXIdentifier",
                              "start": 574,
                              "end": 575,
                              "name": "x"
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "start": 576,
                              "end": 579,
                              "expression": {
                                "type": "Literal",
                                "start": 577,
                                "end": 578,
                                "value": 2,
                                "raw": "2"
                              }
                            }
                          },
                          {
                            "type": "JSXSpreadAttribute",
                            "start": 580,
                            "end": 590,
                            "argument": {
                              "type": "Identifier",
                              "start": 584,
                              "end": 589,
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "selfClosing": false
                      },
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 592,
                        "end": 604,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 594,
                          "end": 603,
                          "name": "Component"
                        }
                      }
                    },
                    "id": null,
                    "generator": false
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
