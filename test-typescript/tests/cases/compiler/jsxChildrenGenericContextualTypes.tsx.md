__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 994,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 285,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 285,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 47,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 44,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 45,
                "end": 47,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 52,
            "end": 109,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 59,
              "end": 109,
              "id": {
                "type": "Identifier",
                "start": 69,
                "end": 94,
                "name": "ElementAttributesProperty",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 95,
                "end": 109,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 97,
                    "end": 107,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 102,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 104,
                        "end": 106,
                        "members": []
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 114,
            "end": 173,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 121,
              "end": 173,
              "id": {
                "type": "Identifier",
                "start": 131,
                "end": 155,
                "name": "ElementChildrenAttribute",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 156,
                "end": 173,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 158,
                    "end": 171,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 166,
                      "name": "children",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 166,
                      "end": 170,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 168,
                        "end": 170,
                        "members": []
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 178,
            "end": 217,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 185,
              "end": 217,
              "id": {
                "type": "Identifier",
                "start": 195,
                "end": 214,
                "name": "IntrinsicAttributes",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 215,
                "end": 217,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 222,
            "end": 283,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 229,
              "end": 283,
              "id": {
                "type": "Identifier",
                "start": 239,
                "end": 256,
                "name": "IntrinsicElements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 257,
                "end": 283,
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "start": 259,
                    "end": 281,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 260,
                        "end": 271,
                        "name": "key",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 263,
                          "end": 271,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 265,
                            "end": 271
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 272,
                      "end": 281,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 274,
                        "end": 281,
                        "typeName": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 281,
                          "name": "Element",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 296,
            "name": "Elem",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 299,
            "end": 364,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 311,
                "end": 348,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 312,
                  "end": 348,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 314,
                    "end": 348,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 316,
                        "end": 324,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 320,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 320,
                          "end": 323,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 322,
                            "end": 323,
                            "typeName": {
                              "type": "Identifier",
                              "start": 322,
                              "end": 323,
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
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 325,
                        "end": 346,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 333,
                          "name": "children",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 333,
                          "end": 346,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 335,
                            "end": 346,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 336,
                                "end": 340,
                                "name": "t",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 337,
                                  "end": 340,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 339,
                                    "end": 340,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 339,
                                      "end": 340,
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
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 342,
                              "end": 346,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 345,
                                "end": 346,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 345,
                                  "end": 346,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
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
            "body": {
              "type": "JSXElement",
              "start": 353,
              "end": 364,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 353,
                "end": 358,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 354,
                  "end": 357,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 358,
                "end": 364,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 360,
                  "end": 363,
                  "name": "div"
                }
              },
              "children": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 299,
              "end": 310,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 300,
                  "end": 301,
                  "name": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 301,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 302,
                  "end": 309,
                  "name": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 304,
                    "end": 309
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
      "start": 366,
      "end": 416,
      "expression": {
        "type": "CallExpression",
        "start": 366,
        "end": 415,
        "callee": {
          "type": "Identifier",
          "start": 366,
          "end": 370,
          "name": "Elem",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 371,
            "end": 414,
            "properties": [
              {
                "type": "Property",
                "start": 372,
                "end": 386,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 376,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 378,
                  "end": 386,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 379,
                      "end": 385,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 380,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 382,
                        "end": 385,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 388,
                "end": 413,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 396,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 398,
                  "end": 413,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 398,
                      "end": 399,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ObjectExpression",
                    "start": 404,
                    "end": 412,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 405,
                        "end": 411,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 406,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 408,
                          "end": 411,
                          "value": "z",
                          "raw": "\"z\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
      "type": "VariableDeclaration",
      "start": 417,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 478,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 424,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 427,
            "end": 478,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 427,
              "end": 478,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 433,
                  "end": 448,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 433,
                    "end": 437,
                    "name": "prop"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 438,
                    "end": 448,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 439,
                      "end": 447,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 440,
                          "end": 446,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 440,
                            "end": 441,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 443,
                            "end": 446,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 449,
                  "end": 475,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 449,
                    "end": 457,
                    "name": "children"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 458,
                    "end": 475,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 459,
                      "end": 474,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 459,
                          "end": 460,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "ObjectExpression",
                        "start": 465,
                        "end": 473,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 466,
                            "end": 472,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 466,
                              "end": 467,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 469,
                              "end": 472,
                              "value": "z",
                              "raw": "\"z\""
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 428,
                "end": 432,
                "name": "Elem"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 479,
      "end": 536,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 536,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 487,
            "name": "qq",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 490,
            "end": 536,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 490,
              "end": 512,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 496,
                  "end": 511,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 496,
                    "end": 500,
                    "name": "prop"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 501,
                    "end": 511,
                    "expression": {
                      "type": "ObjectExpression",
                      "start": 502,
                      "end": 510,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 503,
                          "end": 509,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 503,
                            "end": 504,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 506,
                            "end": 509,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 491,
                "end": 495,
                "name": "Elem"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 529,
              "end": 536,
              "name": {
                "type": "JSXIdentifier",
                "start": 531,
                "end": 535,
                "name": "Elem"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 512,
                "end": 529,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 513,
                  "end": 528,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 513,
                      "end": 514,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ObjectExpression",
                    "start": 519,
                    "end": 527,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 520,
                        "end": 526,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 520,
                          "end": 521,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 523,
                          "end": 526,
                          "value": "z",
                          "raw": "\"z\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 538,
      "end": 597,
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 556,
        "name": "LitProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 556,
        "end": 559,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 557,
            "end": 558,
            "name": {
              "type": "Identifier",
              "start": 557,
              "end": 558,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 560,
        "end": 597,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 562,
            "end": 570,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 562,
              "end": 566,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 569,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 568,
                "end": 569,
                "typeName": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
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
          },
          {
            "type": "TSPropertySignature",
            "start": 571,
            "end": 595,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 579,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 595,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 581,
                "end": 595,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 582,
                    "end": 589,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 583,
                      "end": 589,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 585,
                        "end": 589
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 591,
                  "end": 595,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 594,
                    "end": 595,
                    "typeName": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 595,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
      "start": 598,
      "end": 664,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 604,
          "end": 663,
          "id": {
            "type": "Identifier",
            "start": 604,
            "end": 611,
            "name": "ElemLit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 614,
            "end": 663,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 633,
                "end": 647,
                "name": "p",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 634,
                  "end": 647,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 636,
                    "end": 647,
                    "typeName": {
                      "type": "Identifier",
                      "start": 636,
                      "end": 644,
                      "name": "LitProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 644,
                      "end": 647,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 645,
                          "end": 646,
                          "typeName": {
                            "type": "Identifier",
                            "start": 645,
                            "end": 646,
                            "name": "T",
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
            "body": {
              "type": "JSXElement",
              "start": 652,
              "end": 663,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 652,
                "end": 657,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 653,
                  "end": 656,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 657,
                "end": 663,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 659,
                  "end": 662,
                  "name": "div"
                }
              },
              "children": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 614,
              "end": 632,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 615,
                  "end": 631,
                  "name": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 625,
                    "end": 631
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
      "start": 665,
      "end": 707,
      "expression": {
        "type": "CallExpression",
        "start": 665,
        "end": 706,
        "callee": {
          "type": "Identifier",
          "start": 665,
          "end": 672,
          "name": "ElemLit",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 673,
            "end": 705,
            "properties": [
              {
                "type": "Property",
                "start": 674,
                "end": 683,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 678,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 680,
                  "end": 683,
                  "value": "x",
                  "raw": "\"x\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 685,
                "end": 704,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 693,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 695,
                  "end": 704,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 701,
                    "end": 704,
                    "value": "x",
                    "raw": "\"x\""
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
      "type": "VariableDeclaration",
      "start": 708,
      "end": 759,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 714,
          "end": 759,
          "id": {
            "type": "Identifier",
            "start": 714,
            "end": 715,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 718,
            "end": 759,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 718,
              "end": 759,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 727,
                  "end": 735,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 727,
                    "end": 731,
                    "name": "prop"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 732,
                    "end": 735,
                    "value": "x",
                    "raw": "\"x\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 736,
                  "end": 756,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 736,
                    "end": 744,
                    "name": "children"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 745,
                    "end": 756,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 746,
                      "end": 755,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Literal",
                        "start": 752,
                        "end": 755,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 719,
                "end": 726,
                "name": "ElemLit"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 760,
      "end": 810,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 766,
          "end": 810,
          "id": {
            "type": "Identifier",
            "start": 766,
            "end": 768,
            "name": "jj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 771,
            "end": 810,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 771,
              "end": 789,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 780,
                  "end": 788,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 780,
                    "end": 784,
                    "name": "prop"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 785,
                    "end": 788,
                    "value": "x",
                    "raw": "\"x\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 772,
                "end": 779,
                "name": "ElemLit"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 800,
              "end": 810,
              "name": {
                "type": "JSXIdentifier",
                "start": 802,
                "end": 809,
                "name": "ElemLit"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 789,
                "end": 800,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 790,
                  "end": 799,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 796,
                    "end": 799,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 828,
      "end": 880,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 834,
          "end": 880,
          "id": {
            "type": "Identifier",
            "start": 834,
            "end": 837,
            "name": "arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 840,
            "end": 880,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 840,
              "end": 880,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 849,
                  "end": 857,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 849,
                    "end": 853,
                    "name": "prop"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 854,
                    "end": 857,
                    "value": "x",
                    "raw": "\"x\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 858,
                  "end": 877,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 858,
                    "end": 866,
                    "name": "children"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 867,
                    "end": 877,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 868,
                      "end": 876,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 868,
                          "end": 869,
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "Literal",
                        "start": 873,
                        "end": 876,
                        "value": "y",
                        "raw": "\"y\""
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 841,
                "end": 848,
                "name": "ElemLit"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 881,
      "end": 936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 887,
          "end": 936,
          "id": {
            "type": "Identifier",
            "start": 887,
            "end": 895,
            "name": "argchild",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 898,
            "end": 936,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 898,
              "end": 916,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 907,
                  "end": 915,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 907,
                    "end": 911,
                    "name": "prop"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 912,
                    "end": 915,
                    "value": "x",
                    "raw": "\"x\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 899,
                "end": 906,
                "name": "ElemLit"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 926,
              "end": 936,
              "name": {
                "type": "JSXIdentifier",
                "start": 928,
                "end": 935,
                "name": "ElemLit"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 916,
                "end": 926,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 917,
                  "end": 925,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 917,
                      "end": 918,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 922,
                    "end": 925,
                    "value": "y",
                    "raw": "\"y\""
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 937,
      "end": 994,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 943,
          "end": 994,
          "id": {
            "type": "Identifier",
            "start": 943,
            "end": 953,
            "name": "mismatched",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 956,
            "end": 994,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 956,
              "end": 974,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 965,
                  "end": 973,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 965,
                    "end": 969,
                    "name": "prop"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 970,
                    "end": 973,
                    "value": "x",
                    "raw": "\"x\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 957,
                "end": 964,
                "name": "ElemLit"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 984,
              "end": 994,
              "name": {
                "type": "JSXIdentifier",
                "start": 986,
                "end": 993,
                "name": "ElemLit"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 974,
                "end": 984,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 975,
                  "end": 983,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 981,
                    "end": 983,
                    "value": 12,
                    "raw": "12"
                  },
                  "typeParameters": null,
                  "returnType": null
                }
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
