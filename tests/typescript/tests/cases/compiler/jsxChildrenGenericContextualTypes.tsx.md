__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 47
              },
              "declare": false,
              "start": 27,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 47
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 94
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 102
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 104,
                        "end": 106
                      },
                      "start": 102,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 97,
                    "end": 107
                  }
                ],
                "start": 95,
                "end": 109
              },
              "declare": false,
              "start": 59,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 52,
            "end": 109
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 155
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 166
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 168,
                        "end": 170
                      },
                      "start": 166,
                      "end": 170
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 158,
                    "end": 171
                  }
                ],
                "start": 156,
                "end": 173
              },
              "declare": false,
              "start": 121,
              "end": 173
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 114,
            "end": 173
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 214
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 215,
                "end": 217
              },
              "declare": false,
              "start": 185,
              "end": 217
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 178,
            "end": 217
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 256
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 265,
                            "end": 271
                          },
                          "start": 263,
                          "end": 271
                        },
                        "start": 260,
                        "end": 271
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 281
                        },
                        "typeArguments": null,
                        "start": 274,
                        "end": 281
                      },
                      "start": 272,
                      "end": 281
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 259,
                    "end": 281
                  }
                ],
                "start": 257,
                "end": 283
              },
              "declare": false,
              "start": 229,
              "end": 283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 222,
            "end": 283
          }
        ],
        "start": 14,
        "end": 285
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 285
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Elem",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 296
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 301
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 300,
                  "end": 301
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 304,
                    "end": 309
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 302,
                  "end": 309
                }
              ],
              "start": 299,
              "end": 310
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 320
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 322,
                              "end": 323
                            },
                            "typeArguments": null,
                            "start": 322,
                            "end": 323
                          },
                          "start": 320,
                          "end": 323
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 316,
                        "end": 324
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 333
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 339,
                                      "end": 340
                                    },
                                    "typeArguments": null,
                                    "start": 339,
                                    "end": 340
                                  },
                                  "start": 337,
                                  "end": 340
                                },
                                "start": 336,
                                "end": 340
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 345,
                                  "end": 346
                                },
                                "typeArguments": null,
                                "start": 345,
                                "end": 346
                              },
                              "start": 342,
                              "end": 346
                            },
                            "start": 335,
                            "end": 346
                          },
                          "start": 333,
                          "end": 346
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 325,
                        "end": 346
                      }
                    ],
                    "start": 314,
                    "end": 348
                  },
                  "start": 312,
                  "end": 348
                },
                "start": 311,
                "end": 348
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 354,
                  "end": 357
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 353,
                "end": 358
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 360,
                  "end": 363
                },
                "start": 358,
                "end": 364
              },
              "start": 353,
              "end": 364
            },
            "id": null,
            "generator": false,
            "start": 299,
            "end": 364
          },
          "definite": false,
          "start": 292,
          "end": 364
        }
      ],
      "declare": false,
      "start": 286,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 370
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 376
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 380
                      },
                      "value": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 382,
                        "end": 385
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 379,
                      "end": 385
                    }
                  ],
                  "start": 378,
                  "end": 386
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 372,
                "end": 386
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 396
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 399
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 406
                        },
                        "value": {
                          "type": "Literal",
                          "value": "z",
                          "raw": "\"z\"",
                          "start": 408,
                          "end": 411
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 405,
                        "end": 411
                      }
                    ],
                    "start": 404,
                    "end": 412
                  },
                  "id": null,
                  "generator": false,
                  "start": 398,
                  "end": 413
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 388,
                "end": 413
              }
            ],
            "start": 371,
            "end": 414
          }
        ],
        "optional": false,
        "start": 366,
        "end": 415
      },
      "directive": null,
      "start": 366,
      "end": 416
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 424
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 428,
                "end": 432
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 433,
                    "end": 437
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 440,
                            "end": 441
                          },
                          "value": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 443,
                            "end": 446
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 440,
                          "end": 446
                        }
                      ],
                      "start": 439,
                      "end": 447
                    },
                    "start": 438,
                    "end": 448
                  },
                  "start": 433,
                  "end": 448
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 449,
                    "end": 457
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 460
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 466,
                              "end": 467
                            },
                            "value": {
                              "type": "Literal",
                              "value": "z",
                              "raw": "\"z\"",
                              "start": 469,
                              "end": 472
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 466,
                            "end": 472
                          }
                        ],
                        "start": 465,
                        "end": 473
                      },
                      "id": null,
                      "generator": false,
                      "start": 459,
                      "end": 474
                    },
                    "start": 458,
                    "end": 475
                  },
                  "start": 449,
                  "end": 475
                }
              ],
              "selfClosing": true,
              "start": 427,
              "end": 478
            },
            "children": [],
            "closingElement": null,
            "start": 427,
            "end": 478
          },
          "definite": false,
          "start": 423,
          "end": 478
        }
      ],
      "declare": false,
      "start": 417,
      "end": 478
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "qq",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 487
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 491,
                "end": 495
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 496,
                    "end": 500
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 503,
                            "end": 504
                          },
                          "value": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 506,
                            "end": 509
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 503,
                          "end": 509
                        }
                      ],
                      "start": 502,
                      "end": 510
                    },
                    "start": 501,
                    "end": 511
                  },
                  "start": 496,
                  "end": 511
                }
              ],
              "selfClosing": false,
              "start": 490,
              "end": 512
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 514
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 520,
                          "end": 521
                        },
                        "value": {
                          "type": "Literal",
                          "value": "z",
                          "raw": "\"z\"",
                          "start": 523,
                          "end": 526
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 520,
                        "end": 526
                      }
                    ],
                    "start": 519,
                    "end": 527
                  },
                  "id": null,
                  "generator": false,
                  "start": 513,
                  "end": 528
                },
                "start": 512,
                "end": 529
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 531,
                "end": 535
              },
              "start": 529,
              "end": 536
            },
            "start": 490,
            "end": 536
          },
          "definite": false,
          "start": 485,
          "end": 536
        }
      ],
      "declare": false,
      "start": 479,
      "end": 536
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LitProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 556
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 558
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 557,
            "end": 558
          }
        ],
        "start": 556,
        "end": 559
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 566
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 569
                },
                "typeArguments": null,
                "start": 568,
                "end": 569
              },
              "start": 566,
              "end": 569
            },
            "accessibility": null,
            "static": false,
            "start": 562,
            "end": 570
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 579
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 585,
                        "end": 589
                      },
                      "start": 583,
                      "end": 589
                    },
                    "start": 582,
                    "end": 589
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 594,
                      "end": 595
                    },
                    "typeArguments": null,
                    "start": 594,
                    "end": 595
                  },
                  "start": 591,
                  "end": 595
                },
                "start": 581,
                "end": 595
              },
              "start": 579,
              "end": 595
            },
            "accessibility": null,
            "static": false,
            "start": 571,
            "end": 595
          }
        ],
        "start": 560,
        "end": 597
      },
      "declare": false,
      "start": 538,
      "end": 597
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElemLit",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 611
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 615,
                    "end": 616
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 625,
                    "end": 631
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 615,
                  "end": 631
                }
              ],
              "start": 614,
              "end": 632
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LitProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 636,
                      "end": 644
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 645,
                            "end": 646
                          },
                          "typeArguments": null,
                          "start": 645,
                          "end": 646
                        }
                      ],
                      "start": 644,
                      "end": 647
                    },
                    "start": 636,
                    "end": 647
                  },
                  "start": 634,
                  "end": 647
                },
                "start": 633,
                "end": 647
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 653,
                  "end": 656
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 652,
                "end": 657
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 659,
                  "end": 662
                },
                "start": 657,
                "end": 663
              },
              "start": 652,
              "end": 663
            },
            "id": null,
            "generator": false,
            "start": 614,
            "end": 663
          },
          "definite": false,
          "start": 604,
          "end": 663
        }
      ],
      "declare": false,
      "start": 598,
      "end": 664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElemLit",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 672
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 678
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 680,
                  "end": 683
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 674,
                "end": 683
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 693
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 701,
                    "end": 704
                  },
                  "id": null,
                  "generator": false,
                  "start": 695,
                  "end": 704
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 685,
                "end": 704
              }
            ],
            "start": 673,
            "end": 705
          }
        ],
        "optional": false,
        "start": 665,
        "end": 706
      },
      "directive": null,
      "start": 665,
      "end": 707
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 714,
            "end": 715
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 719,
                "end": 726
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 727,
                    "end": 731
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 732,
                    "end": 735
                  },
                  "start": 727,
                  "end": 735
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 736,
                    "end": 744
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 752,
                        "end": 755
                      },
                      "id": null,
                      "generator": false,
                      "start": 746,
                      "end": 755
                    },
                    "start": 745,
                    "end": 756
                  },
                  "start": 736,
                  "end": 756
                }
              ],
              "selfClosing": true,
              "start": 718,
              "end": 759
            },
            "children": [],
            "closingElement": null,
            "start": 718,
            "end": 759
          },
          "definite": false,
          "start": 714,
          "end": 759
        }
      ],
      "declare": false,
      "start": 708,
      "end": 759
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "jj",
            "optional": false,
            "typeAnnotation": null,
            "start": 766,
            "end": 768
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 772,
                "end": 779
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 780,
                    "end": 784
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 785,
                    "end": 788
                  },
                  "start": 780,
                  "end": 788
                }
              ],
              "selfClosing": false,
              "start": 771,
              "end": 789
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 796,
                    "end": 799
                  },
                  "id": null,
                  "generator": false,
                  "start": 790,
                  "end": 799
                },
                "start": 789,
                "end": 800
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 802,
                "end": 809
              },
              "start": 800,
              "end": 810
            },
            "start": 771,
            "end": 810
          },
          "definite": false,
          "start": 766,
          "end": 810
        }
      ],
      "declare": false,
      "start": 760,
      "end": 810
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 834,
            "end": 837
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 841,
                "end": 848
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 849,
                    "end": 853
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 854,
                    "end": 857
                  },
                  "start": 849,
                  "end": 857
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 858,
                    "end": 866
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 868,
                          "end": 869
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "y",
                        "raw": "\"y\"",
                        "start": 873,
                        "end": 876
                      },
                      "id": null,
                      "generator": false,
                      "start": 868,
                      "end": 876
                    },
                    "start": 867,
                    "end": 877
                  },
                  "start": 858,
                  "end": 877
                }
              ],
              "selfClosing": true,
              "start": 840,
              "end": 880
            },
            "children": [],
            "closingElement": null,
            "start": 840,
            "end": 880
          },
          "definite": false,
          "start": 834,
          "end": 880
        }
      ],
      "declare": false,
      "start": 828,
      "end": 880
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "argchild",
            "optional": false,
            "typeAnnotation": null,
            "start": 887,
            "end": 895
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 899,
                "end": 906
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 907,
                    "end": 911
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 912,
                    "end": 915
                  },
                  "start": 907,
                  "end": 915
                }
              ],
              "selfClosing": false,
              "start": 898,
              "end": 916
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 917,
                      "end": 918
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "\"y\"",
                    "start": 922,
                    "end": 925
                  },
                  "id": null,
                  "generator": false,
                  "start": 917,
                  "end": 925
                },
                "start": 916,
                "end": 926
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 928,
                "end": 935
              },
              "start": 926,
              "end": 936
            },
            "start": 898,
            "end": 936
          },
          "definite": false,
          "start": 887,
          "end": 936
        }
      ],
      "declare": false,
      "start": 881,
      "end": 936
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mismatched",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 953
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 957,
                "end": 964
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 965,
                    "end": 969
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 970,
                    "end": 973
                  },
                  "start": 965,
                  "end": 973
                }
              ],
              "selfClosing": false,
              "start": 956,
              "end": 974
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 981,
                    "end": 983
                  },
                  "id": null,
                  "generator": false,
                  "start": 975,
                  "end": 983
                },
                "start": 974,
                "end": 984
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 986,
                "end": 993
              },
              "start": 984,
              "end": 994
            },
            "start": 956,
            "end": 994
          },
          "definite": false,
          "start": 943,
          "end": 994
        }
      ],
      "declare": false,
      "start": 937,
      "end": 994
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 994
}
```
