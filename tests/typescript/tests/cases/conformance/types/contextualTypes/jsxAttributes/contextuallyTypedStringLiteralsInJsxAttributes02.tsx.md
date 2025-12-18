__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClickableProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 64
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 79
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                },
                "start": 80,
                "end": 88
              },
              "accessibility": null,
              "static": false,
              "start": 71,
              "end": 89
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 103
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 106,
                  "end": 112
                },
                "start": 104,
                "end": 112
              },
              "accessibility": null,
              "static": false,
              "start": 94,
              "end": 113
            }
          ],
          "start": 65,
          "end": 115
        },
        "declare": false,
        "start": 40,
        "end": 115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 33,
      "end": 115
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 145
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 168
            },
            "typeArguments": null,
            "start": 154,
            "end": 168
          }
        ],
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
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 182
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
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "left",
                                "raw": "\"left\"",
                                "start": 188,
                                "end": 194
                              },
                              "start": 188,
                              "end": 194
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "right",
                                "raw": "\"right\"",
                                "start": 197,
                                "end": 204
                              },
                              "start": 197,
                              "end": 204
                            }
                          ],
                          "start": 188,
                          "end": 204
                        },
                        "start": 186,
                        "end": 204
                      },
                      "start": 185,
                      "end": 204
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 209,
                      "end": 213
                    },
                    "start": 206,
                    "end": 213
                  },
                  "start": 184,
                  "end": 213
                },
                "start": 182,
                "end": 213
              },
              "accessibility": null,
              "static": false,
              "start": 175,
              "end": 214
            }
          ],
          "start": 169,
          "end": 216
        },
        "declare": false,
        "start": 124,
        "end": 216
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 117,
      "end": 216
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LinkProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 244
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 267
            },
            "typeArguments": null,
            "start": 253,
            "end": 267
          }
        ],
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
                "name": "goTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 278
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "home",
                        "raw": "\"home\"",
                        "start": 280,
                        "end": 286
                      },
                      "start": 280,
                      "end": 286
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "contact",
                        "raw": "\"contact\"",
                        "start": 289,
                        "end": 298
                      },
                      "start": 289,
                      "end": 298
                    }
                  ],
                  "start": 280,
                  "end": 298
                },
                "start": 278,
                "end": 298
              },
              "accessibility": null,
              "static": false,
              "start": 274,
              "end": 299
            }
          ],
          "start": 268,
          "end": 301
        },
        "declare": false,
        "start": 225,
        "end": 301
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 218,
      "end": 301
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 329
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 354
                },
                "typeArguments": null,
                "start": 343,
                "end": 354
              },
              "start": 341,
              "end": 354
            },
            "start": 330,
            "end": 354
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 360
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 368
              },
              "start": 357,
              "end": 368
            },
            "typeArguments": null,
            "start": 357,
            "end": 368
          },
          "start": 355,
          "end": 368
        },
        "body": null,
        "expression": false,
        "start": 310,
        "end": 369
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 303,
      "end": 369
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 396
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 417
                },
                "typeArguments": null,
                "start": 408,
                "end": 417
              },
              "start": 406,
              "end": 417
            },
            "start": 397,
            "end": 417
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 423
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 431
              },
              "start": 420,
              "end": 431
            },
            "typeArguments": null,
            "start": 420,
            "end": 431
          },
          "start": 418,
          "end": 431
        },
        "body": null,
        "expression": false,
        "start": 377,
        "end": 432
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 370,
      "end": 432
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null,
          "start": 449,
          "end": 459
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ButtonProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 478
                    },
                    "typeArguments": null,
                    "start": 467,
                    "end": 478
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 481,
                      "end": 490
                    },
                    "typeArguments": null,
                    "start": 481,
                    "end": 490
                  }
                ],
                "start": 467,
                "end": 490
              },
              "start": 465,
              "end": 490
            },
            "start": 460,
            "end": 490
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 496
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 497,
                "end": 504
              },
              "start": 493,
              "end": 504
            },
            "typeArguments": null,
            "start": 493,
            "end": 504
          },
          "start": 491,
          "end": 504
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "linkProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 526
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 529,
                      "end": 534
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 547
                      },
                      "typeArguments": null,
                      "start": 538,
                      "end": 547
                    },
                    "start": 529,
                    "end": 547
                  },
                  "definite": false,
                  "start": 517,
                  "end": 547
                }
              ],
              "declare": false,
              "start": 511,
              "end": 548
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 565
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "goTo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 570
                },
                "optional": false,
                "computed": false,
                "start": 556,
                "end": 570
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 589,
                          "end": 593
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 594,
                          "end": 608
                        },
                        "optional": false,
                        "computed": false,
                        "start": 589,
                        "end": 608
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 609,
                          "end": 614
                        }
                      ],
                      "optional": false,
                      "start": 589,
                      "end": 615
                    },
                    "start": 582,
                    "end": 616
                  }
                ],
                "start": 572,
                "end": 622
              },
              "alternate": null,
              "start": 553,
              "end": 622
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 635,
                    "end": 639
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 640,
                    "end": 656
                  },
                  "optional": false,
                  "computed": false,
                  "start": 635,
                  "end": 656
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 657,
                    "end": 662
                  }
                ],
                "optional": false,
                "start": 635,
                "end": 663
              },
              "start": 628,
              "end": 664
            }
          ],
          "start": 505,
          "end": 666
        },
        "expression": false,
        "start": 440,
        "end": 666
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 433,
      "end": 666
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
            "name": "b0",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 676
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 680,
                "end": 690
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 696,
                          "end": 703
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 706,
                              "end": 707
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 713,
                                      "end": 720
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 721,
                                      "end": 724
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 713,
                                    "end": 724
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 725,
                                      "end": 726
                                    }
                                  ],
                                  "optional": false,
                                  "start": 713,
                                  "end": 727
                                },
                                "directive": null,
                                "start": 713,
                                "end": 727
                              }
                            ],
                            "start": 712,
                            "end": 728
                          },
                          "id": null,
                          "generator": false,
                          "start": 705,
                          "end": 728
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 696,
                        "end": 728
                      }
                    ],
                    "start": 695,
                    "end": 729
                  },
                  "start": 691,
                  "end": 730
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 731,
                    "end": 736
                  },
                  "value": null,
                  "start": 731,
                  "end": 736
                }
              ],
              "selfClosing": true,
              "start": 679,
              "end": 739
            },
            "children": [],
            "closingElement": null,
            "start": 679,
            "end": 739
          },
          "definite": false,
          "start": 674,
          "end": 739
        }
      ],
      "declare": false,
      "start": 668,
      "end": 740
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 781
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 785,
                "end": 795
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 796,
                    "end": 803
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 806,
                          "end": 807
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 811,
                                  "end": 818
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 819,
                                  "end": 822
                                },
                                "optional": false,
                                "computed": false,
                                "start": 811,
                                "end": 822
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "k",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 823,
                                  "end": 824
                                }
                              ],
                              "optional": false,
                              "start": 811,
                              "end": 825
                            },
                            "directive": null,
                            "start": 811,
                            "end": 825
                          }
                        ],
                        "start": 810,
                        "end": 826
                      },
                      "id": null,
                      "generator": false,
                      "start": 805,
                      "end": 826
                    },
                    "start": 804,
                    "end": 827
                  },
                  "start": 796,
                  "end": 827
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 828,
                    "end": 833
                  },
                  "value": null,
                  "start": 828,
                  "end": 833
                }
              ],
              "selfClosing": true,
              "start": 784,
              "end": 836
            },
            "children": [],
            "closingElement": null,
            "start": 784,
            "end": 836
          },
          "definite": false,
          "start": 779,
          "end": 836
        }
      ],
      "declare": false,
      "start": 773,
      "end": 837
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": null,
            "start": 876,
            "end": 878
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 882,
                "end": 892
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "goTo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 898,
                          "end": 902
                        },
                        "value": {
                          "type": "Literal",
                          "value": "home",
                          "raw": "\"home\"",
                          "start": 903,
                          "end": 909
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 898,
                        "end": 909
                      }
                    ],
                    "start": 897,
                    "end": 910
                  },
                  "start": 893,
                  "end": 911
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 912,
                    "end": 917
                  },
                  "value": null,
                  "start": 912,
                  "end": 917
                }
              ],
              "selfClosing": true,
              "start": 881,
              "end": 920
            },
            "children": [],
            "closingElement": null,
            "start": 881,
            "end": 920
          },
          "definite": false,
          "start": 876,
          "end": 920
        }
      ],
      "declare": false,
      "start": 870,
      "end": 921
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": null,
            "start": 964,
            "end": 966
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MainButton",
                "start": 970,
                "end": 980
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "goTo",
                    "start": 981,
                    "end": 985
                  },
                  "value": {
                    "type": "Literal",
                    "value": "home",
                    "raw": "\"home\"",
                    "start": 986,
                    "end": 992
                  },
                  "start": 981,
                  "end": 992
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 993,
                    "end": 998
                  },
                  "value": null,
                  "start": 993,
                  "end": 998
                }
              ],
              "selfClosing": true,
              "start": 969,
              "end": 1001
            },
            "children": [],
            "closingElement": null,
            "start": 969,
            "end": 1001
          },
          "definite": false,
          "start": 964,
          "end": 1001
        }
      ],
      "declare": false,
      "start": 958,
      "end": 1002
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoOverload",
          "optional": false,
          "typeAnnotation": null,
          "start": 1057,
          "end": 1067
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1081,
                  "end": 1092
                },
                "typeArguments": null,
                "start": 1081,
                "end": 1092
              },
              "start": 1079,
              "end": 1092
            },
            "start": 1068,
            "end": 1092
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 1095,
                "end": 1098
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1106
              },
              "start": 1095,
              "end": 1106
            },
            "typeArguments": null,
            "start": 1095,
            "end": 1106
          },
          "start": 1093,
          "end": 1106
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1125
              },
              "start": 1109,
              "end": 1125
            }
          ],
          "start": 1107,
          "end": 1127
        },
        "expression": false,
        "start": 1048,
        "end": 1127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1041,
      "end": 1127
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1134,
            "end": 1136
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "NoOverload",
                "start": 1140,
                "end": 1150
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1157,
                          "end": 1164
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1167,
                              "end": 1168
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1174,
                                      "end": 1181
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1182,
                                      "end": 1185
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1174,
                                    "end": 1185
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1186,
                                      "end": 1187
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1174,
                                  "end": 1188
                                },
                                "directive": null,
                                "start": 1174,
                                "end": 1188
                              }
                            ],
                            "start": 1173,
                            "end": 1189
                          },
                          "id": null,
                          "generator": false,
                          "start": 1166,
                          "end": 1189
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1157,
                        "end": 1189
                      }
                    ],
                    "start": 1156,
                    "end": 1190
                  },
                  "start": 1152,
                  "end": 1191
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 1192,
                    "end": 1197
                  },
                  "value": null,
                  "start": 1192,
                  "end": 1197
                }
              ],
              "selfClosing": true,
              "start": 1139,
              "end": 1200
            },
            "children": [],
            "closingElement": null,
            "start": 1139,
            "end": 1200
          },
          "definite": false,
          "start": 1134,
          "end": 1200
        }
      ],
      "declare": false,
      "start": 1128,
      "end": 1201
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoOverload1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1238,
          "end": 1249
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1261,
                  "end": 1270
                },
                "typeArguments": null,
                "start": 1261,
                "end": 1270
              },
              "start": 1259,
              "end": 1270
            },
            "start": 1250,
            "end": 1270
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1276
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 1277,
                "end": 1284
              },
              "start": 1273,
              "end": 1284
            },
            "typeArguments": null,
            "start": 1273,
            "end": 1284
          },
          "start": 1271,
          "end": 1284
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1294,
                "end": 1303
              },
              "start": 1287,
              "end": 1303
            }
          ],
          "start": 1285,
          "end": 1305
        },
        "expression": false,
        "start": 1229,
        "end": 1305
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1222,
      "end": 1305
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1312,
            "end": 1314
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "NoOverload1",
                "start": 1318,
                "end": 1329
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "goTo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1335,
                          "end": 1339
                        },
                        "value": {
                          "type": "Literal",
                          "value": "home",
                          "raw": "\"home\"",
                          "start": 1340,
                          "end": 1346
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1335,
                        "end": 1346
                      }
                    ],
                    "start": 1334,
                    "end": 1347
                  },
                  "start": 1330,
                  "end": 1348
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "extra",
                    "start": 1349,
                    "end": 1354
                  },
                  "value": null,
                  "start": 1349,
                  "end": 1354
                }
              ],
              "selfClosing": true,
              "start": 1317,
              "end": 1358
            },
            "children": [],
            "closingElement": null,
            "start": 1317,
            "end": 1358
          },
          "definite": false,
          "start": 1312,
          "end": 1358
        }
      ],
      "declare": false,
      "start": 1306,
      "end": 1359
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1396
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39,
    "range": [
      33,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 40,
    "end": 49,
    "range": [
      40,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 50,
    "end": 64,
    "range": [
      50,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 71,
    "end": 79,
    "range": [
      71,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 94,
    "end": 103,
    "range": [
      94,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112,
    "range": [
      106,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 117,
    "end": 123,
    "range": [
      117,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 124,
    "end": 133,
    "range": [
      124,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 134,
    "end": 145,
    "range": [
      134,
      145
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 146,
    "end": 153,
    "range": [
      146,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 154,
    "end": 168,
    "range": [
      154,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 175,
    "end": 182,
    "range": [
      175,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "String",
    "value": "\"left\"",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "String",
    "value": "\"right\"",
    "start": 197,
    "end": 204,
    "range": [
      197,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 206,
    "end": 208,
    "range": [
      206,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 209,
    "end": 213,
    "range": [
      209,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 218,
    "end": 224,
    "range": [
      218,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 225,
    "end": 234,
    "range": [
      225,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 235,
    "end": 244,
    "range": [
      235,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 245,
    "end": 252,
    "range": [
      245,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "ClickableProps",
    "start": 253,
    "end": 267,
    "range": [
      253,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "goTo",
    "start": 274,
    "end": 278,
    "range": [
      274,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 280,
    "end": 286,
    "range": [
      280,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "String",
    "value": "\"contact\"",
    "start": 289,
    "end": 298,
    "range": [
      289,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 303,
    "end": 309,
    "range": [
      303,
      309
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 310,
    "end": 318,
    "range": [
      310,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 319,
    "end": 329,
    "range": [
      319,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 330,
    "end": 341,
    "range": [
      330,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 343,
    "end": 354,
    "range": [
      343,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 357,
    "end": 360,
    "range": [
      357,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 361,
    "end": 368,
    "range": [
      361,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 370,
    "end": 376,
    "range": [
      370,
      376
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 377,
    "end": 385,
    "range": [
      377,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 386,
    "end": 396,
    "range": [
      386,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 397,
    "end": 406,
    "range": [
      397,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 408,
    "end": 417,
    "range": [
      408,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 420,
    "end": 423,
    "range": [
      420,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 424,
    "end": 431,
    "range": [
      424,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 433,
    "end": 439,
    "range": [
      433,
      439
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 440,
    "end": 448,
    "range": [
      440,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "MainButton",
    "start": 449,
    "end": 459,
    "range": [
      449,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 460,
    "end": 465,
    "range": [
      460,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 467,
    "end": 478,
    "range": [
      467,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 481,
    "end": 490,
    "range": [
      481,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 493,
    "end": 496,
    "range": [
      493,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 497,
    "end": 504,
    "range": [
      497,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 511,
    "end": 516,
    "range": [
      511,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 517,
    "end": 526,
    "range": [
      517,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 529,
    "end": 534,
    "range": [
      529,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 535,
    "end": 537,
    "range": [
      535,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 538,
    "end": 547,
    "range": [
      538,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 553,
    "end": 555,
    "range": [
      553,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 556,
    "end": 565,
    "range": [
      556,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "goTo",
    "start": 566,
    "end": 570,
    "range": [
      566,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 582,
    "end": 588,
    "range": [
      582,
      588
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 589,
    "end": 593,
    "range": [
      589,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "_buildMainLink",
    "start": 594,
    "end": 608,
    "range": [
      594,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 609,
    "end": 614,
    "range": [
      609,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 628,
    "end": 634,
    "range": [
      628,
      634
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 635,
    "end": 639,
    "range": [
      635,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "_buildMainButton",
    "start": 640,
    "end": 656,
    "range": [
      640,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 657,
    "end": 662,
    "range": [
      657,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 668,
    "end": 673,
    "range": [
      668,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 674,
    "end": 676,
    "range": [
      674,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 680,
    "end": 690,
    "range": [
      680,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 692,
    "end": 695,
    "range": [
      692,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 696,
    "end": 703,
    "range": [
      696,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 709,
    "end": 711,
    "range": [
      709,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 713,
    "end": 720,
    "range": [
      713,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 721,
    "end": 724,
    "range": [
      721,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 731,
    "end": 736,
    "range": [
      731,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 773,
    "end": 778,
    "range": [
      773,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 779,
    "end": 781,
    "range": [
      779,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 785,
    "end": 795,
    "range": [
      785,
      795
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 796,
    "end": 803,
    "range": [
      796,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 808,
    "end": 810,
    "range": [
      808,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 811,
    "end": 818,
    "range": [
      811,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 819,
    "end": 822,
    "range": [
      819,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 828,
    "end": 833,
    "range": [
      828,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 870,
    "end": 875,
    "range": [
      870,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 876,
    "end": 878,
    "range": [
      876,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 882,
    "end": 892,
    "range": [
      882,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 894,
    "end": 897,
    "range": [
      894,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "goTo",
    "start": 898,
    "end": 902,
    "range": [
      898,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 903,
    "end": 909,
    "range": [
      903,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 912,
    "end": 917,
    "range": [
      912,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 958,
    "end": 963,
    "range": [
      958,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 964,
    "end": 966,
    "range": [
      964,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "MainButton",
    "start": 970,
    "end": 980,
    "range": [
      970,
      980
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "goTo",
    "start": 981,
    "end": 985,
    "range": [
      981,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "JSXText",
    "value": "\"home\"",
    "start": 986,
    "end": 992,
    "range": [
      986,
      992
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 993,
    "end": 998,
    "range": [
      993,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1041,
    "end": 1047,
    "range": [
      1041,
      1047
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1048,
    "end": 1056,
    "range": [
      1048,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "NoOverload",
    "start": 1057,
    "end": 1067,
    "range": [
      1057,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "buttonProps",
    "start": 1068,
    "end": 1079,
    "range": [
      1068,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 1081,
    "end": 1092,
    "range": [
      1081,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1095,
    "end": 1098,
    "range": [
      1095,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1099,
    "end": 1106,
    "range": [
      1099,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1109,
    "end": 1115,
    "range": [
      1109,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1116,
    "end": 1125,
    "range": [
      1116,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1128,
    "end": 1133,
    "range": [
      1128,
      1133
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1134,
    "end": 1136,
    "range": [
      1134,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "NoOverload",
    "start": 1140,
    "end": 1150,
    "range": [
      1140,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1153,
    "end": 1156,
    "range": [
      1153,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1157,
    "end": 1164,
    "range": [
      1157,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1170,
    "end": 1172,
    "range": [
      1170,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "console",
    "start": 1174,
    "end": 1181,
    "range": [
      1174,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "log",
    "start": 1182,
    "end": 1185,
    "range": [
      1182,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 1192,
    "end": 1197,
    "range": [
      1192,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1222,
    "end": 1228,
    "range": [
      1222,
      1228
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1229,
    "end": 1237,
    "range": [
      1229,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "NoOverload1",
    "start": 1238,
    "end": 1249,
    "range": [
      1238,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Identifier",
    "value": "linkProps",
    "start": 1250,
    "end": 1259,
    "range": [
      1250,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "LinkProps",
    "start": 1261,
    "end": 1270,
    "range": [
      1261,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1273,
    "end": 1276,
    "range": [
      1273,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1277,
    "end": 1284,
    "range": [
      1277,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1287,
    "end": 1293,
    "range": [
      1287,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1294,
    "end": 1303,
    "range": [
      1294,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1306,
    "end": 1311,
    "range": [
      1306,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1312,
    "end": 1314,
    "range": [
      1312,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "NoOverload1",
    "start": 1318,
    "end": 1329,
    "range": [
      1318,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1331,
    "end": 1334,
    "range": [
      1331,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "goTo",
    "start": 1335,
    "end": 1339,
    "range": [
      1335,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "String",
    "value": "\"home\"",
    "start": 1340,
    "end": 1346,
    "range": [
      1340,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "extra",
    "start": 1349,
    "end": 1354,
    "range": [
      1349,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  }
]
```
