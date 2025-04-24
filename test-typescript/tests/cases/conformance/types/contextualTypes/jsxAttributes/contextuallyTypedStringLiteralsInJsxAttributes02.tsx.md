__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1396,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 40,
        "end": 115,
        "body": {
          "type": "TSInterfaceBody",
          "start": 65,
          "end": 115,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 71,
              "end": 89,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 71,
                "end": 79,
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
                "start": 80,
                "end": 88,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 94,
              "end": 113,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "decorators": [],
                "name": "className",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 106,
                  "end": 112
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 64,
          "decorators": [],
          "name": "ClickableProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 117,
      "end": 216,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 124,
        "end": 216,
        "body": {
          "type": "TSInterfaceBody",
          "start": 169,
          "end": 216,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 175,
              "end": 214,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 175,
                "end": 182,
                "decorators": [],
                "name": "onClick",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 213,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 184,
                  "end": 213,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 185,
                      "end": 204,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 186,
                        "end": 204,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 188,
                          "end": 204,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 188,
                              "end": 194,
                              "literal": {
                                "type": "Literal",
                                "start": 188,
                                "end": 194,
                                "raw": "\"left\"",
                                "value": "left"
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 197,
                              "end": 204,
                              "literal": {
                                "type": "Literal",
                                "start": 197,
                                "end": 204,
                                "raw": "\"right\"",
                                "value": "right"
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 206,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 209,
                      "end": 213
                    }
                  },
                  "typeParameters": null
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 154,
            "end": 168,
            "expression": {
              "type": "Identifier",
              "start": 154,
              "end": 168,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 134,
          "end": 145,
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 218,
      "end": 301,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 225,
        "end": 301,
        "body": {
          "type": "TSInterfaceBody",
          "start": 268,
          "end": 301,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 274,
              "end": 299,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 274,
                "end": 278,
                "decorators": [],
                "name": "goTo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 278,
                "end": 298,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 280,
                  "end": 298,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 280,
                      "end": 286,
                      "literal": {
                        "type": "Literal",
                        "start": 280,
                        "end": 286,
                        "raw": "\"home\"",
                        "value": "home"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 289,
                      "end": 298,
                      "literal": {
                        "type": "Literal",
                        "start": 289,
                        "end": 298,
                        "raw": "\"contact\"",
                        "value": "contact"
                      }
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 253,
            "end": 267,
            "expression": {
              "type": "Identifier",
              "start": 253,
              "end": 267,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 235,
          "end": 244,
          "decorators": [],
          "name": "LinkProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 303,
      "end": 369,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 310,
        "end": 369,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 319,
          "end": 329,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 330,
            "end": 354,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 343,
                "end": 354,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 354,
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 355,
          "end": 368,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 357,
            "end": 368,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 357,
              "end": 368,
              "left": {
                "type": "Identifier",
                "start": 357,
                "end": 360,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 361,
                "end": 368,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 370,
      "end": 432,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 377,
        "end": 432,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 386,
          "end": 396,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 397,
            "end": 417,
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 408,
                "end": 417,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 417,
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 418,
          "end": 431,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 420,
            "end": 431,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 420,
              "end": 431,
              "left": {
                "type": "Identifier",
                "start": 420,
                "end": 423,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 424,
                "end": 431,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 433,
      "end": 666,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 440,
        "end": 666,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 505,
          "end": 666,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 511,
              "end": 548,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 517,
                  "end": 547,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 517,
                    "end": 526,
                    "decorators": [],
                    "name": "linkProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 529,
                    "end": 547,
                    "expression": {
                      "type": "Identifier",
                      "start": 529,
                      "end": 534,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 538,
                      "end": 547,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 547,
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "IfStatement",
              "start": 553,
              "end": 622,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 572,
                "end": 622,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 582,
                    "end": 616,
                    "argument": {
                      "type": "CallExpression",
                      "start": 589,
                      "end": 615,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 609,
                          "end": 614,
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 589,
                        "end": 608,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 589,
                          "end": 593
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 594,
                          "end": 608,
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "MemberExpression",
                "start": 556,
                "end": 570,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 565,
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 570,
                  "decorators": [],
                  "name": "goTo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 628,
              "end": 664,
              "argument": {
                "type": "CallExpression",
                "start": 635,
                "end": 663,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 657,
                    "end": 662,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 635,
                  "end": 656,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 635,
                    "end": 639
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 640,
                    "end": 656,
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 449,
          "end": 459,
          "decorators": [],
          "name": "MainButton",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 460,
            "end": 490,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 490,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 467,
                "end": 490,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 467,
                    "end": 478,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 478,
                      "decorators": [],
                      "name": "ButtonProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 481,
                    "end": 490,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 490,
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 491,
          "end": 504,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 493,
            "end": 504,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 493,
              "end": 504,
              "left": {
                "type": "Identifier",
                "start": 493,
                "end": 496,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 497,
                "end": 504,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 668,
      "end": 740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 739,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 676,
            "decorators": [],
            "name": "b0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 679,
            "end": 739,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 679,
              "end": 739,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 691,
                  "end": 730,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 695,
                    "end": 729,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 696,
                        "end": 728,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 696,
                          "end": 703,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 705,
                          "end": 728,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 712,
                            "end": 728,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 713,
                                "end": 727,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 713,
                                  "end": 727,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 725,
                                      "end": 726,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 713,
                                    "end": 724,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 713,
                                      "end": 720,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 721,
                                      "end": 724,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
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
                              "start": 706,
                              "end": 707,
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 731,
                  "end": 736,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 731,
                    "end": 736,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 680,
                "end": 690,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 773,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 779,
          "end": 836,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 779,
            "end": 781,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 784,
            "end": 836,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 784,
              "end": 836,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 796,
                  "end": 827,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 796,
                    "end": 803,
                    "name": "onClick"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 804,
                    "end": 827,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 805,
                      "end": 826,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 810,
                        "end": 826,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 811,
                            "end": 825,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 811,
                              "end": 825,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 823,
                                  "end": 824,
                                  "decorators": [],
                                  "name": "k",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 811,
                                "end": 822,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 811,
                                  "end": 818,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 819,
                                  "end": 822,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
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
                          "start": 806,
                          "end": 807,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 828,
                  "end": 833,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 828,
                    "end": 833,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 785,
                "end": 795,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 870,
      "end": 921,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 876,
          "end": 920,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 876,
            "end": 878,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 881,
            "end": 920,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 881,
              "end": 920,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 893,
                  "end": 911,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 897,
                    "end": 910,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 898,
                        "end": 909,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 898,
                          "end": 902,
                          "decorators": [],
                          "name": "goTo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 903,
                          "end": 909,
                          "raw": "\"home\"",
                          "value": "home"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 912,
                  "end": 917,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 912,
                    "end": 917,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 882,
                "end": 892,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 958,
      "end": 1002,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 964,
          "end": 1001,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 964,
            "end": 966,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 969,
            "end": 1001,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 969,
              "end": 1001,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 981,
                  "end": 992,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 981,
                    "end": 985,
                    "name": "goTo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 986,
                    "end": 992,
                    "raw": "\"home\"",
                    "value": "home"
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 993,
                  "end": 998,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 993,
                    "end": 998,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 970,
                "end": 980,
                "name": "MainButton"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1041,
      "end": 1127,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1048,
        "end": 1127,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 1107,
          "end": 1127,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 1109,
              "end": 1125,
              "argument": {
                "type": "Identifier",
                "start": 1116,
                "end": 1125,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 1057,
          "end": 1067,
          "decorators": [],
          "name": "NoOverload",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 1068,
            "end": 1092,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1079,
              "end": 1092,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1081,
                "end": 1092,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1081,
                  "end": 1092,
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1093,
          "end": 1106,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1095,
            "end": 1106,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 1095,
              "end": 1106,
              "left": {
                "type": "Identifier",
                "start": 1095,
                "end": 1098,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1099,
                "end": 1106,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1128,
      "end": 1201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1134,
          "end": 1200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1134,
            "end": 1136,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1139,
            "end": 1200,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1139,
              "end": 1200,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1152,
                  "end": 1191,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1156,
                    "end": 1190,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1157,
                        "end": 1189,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1157,
                          "end": 1164,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1166,
                          "end": 1189,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1173,
                            "end": 1189,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 1174,
                                "end": 1188,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 1174,
                                  "end": 1188,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1186,
                                      "end": 1187,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1174,
                                    "end": 1185,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1174,
                                      "end": 1181,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1182,
                                      "end": 1185,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
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
                              "start": 1167,
                              "end": 1168,
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1192,
                  "end": 1197,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1192,
                    "end": 1197,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1140,
                "end": 1150,
                "name": "NoOverload"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1222,
      "end": 1305,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1229,
        "end": 1305,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 1285,
          "end": 1305,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 1287,
              "end": 1303,
              "argument": {
                "type": "Identifier",
                "start": 1294,
                "end": 1303,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 1238,
          "end": 1249,
          "decorators": [],
          "name": "NoOverload1",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 1250,
            "end": 1270,
            "decorators": [],
            "name": "linkProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1259,
              "end": 1270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1261,
                "end": 1270,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1261,
                  "end": 1270,
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1271,
          "end": 1284,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1273,
            "end": 1284,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 1273,
              "end": 1284,
              "left": {
                "type": "Identifier",
                "start": 1273,
                "end": 1276,
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1277,
                "end": 1284,
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 1306,
      "end": 1359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1312,
          "end": 1358,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1312,
            "end": 1314,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 1317,
            "end": 1358,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1317,
              "end": 1358,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1330,
                  "end": 1348,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1334,
                    "end": 1347,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1335,
                        "end": 1346,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1335,
                          "end": 1339,
                          "decorators": [],
                          "name": "goTo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 1340,
                          "end": 1346,
                          "raw": "\"home\"",
                          "value": "home"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1349,
                  "end": 1354,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1349,
                    "end": 1354,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1318,
                "end": 1329,
                "name": "NoOverload1"
              },
              "selfClosing": true,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
