__ESTREE_TEST__:PASS:
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
