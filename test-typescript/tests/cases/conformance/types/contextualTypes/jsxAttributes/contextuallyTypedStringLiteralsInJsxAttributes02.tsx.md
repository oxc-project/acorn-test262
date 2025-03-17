__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 1422,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 25,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 37,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 140,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 65,
        "end": 140,
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 89,
          "name": "ClickableProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 90,
          "end": 140,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 96,
              "end": 114,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 96,
                "end": 104,
                "name": "children",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 105,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 107,
                  "end": 113
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 119,
              "end": 138,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 119,
                "end": 128,
                "name": "className",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 129,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 131,
                  "end": 137
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
      "start": 142,
      "end": 241,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 149,
        "end": 241,
        "id": {
          "type": "Identifier",
          "start": 159,
          "end": 170,
          "name": "ButtonProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 179,
            "end": 193,
            "expression": {
              "type": "Identifier",
              "start": 179,
              "end": 193,
              "name": "ClickableProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 194,
          "end": 241,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 200,
              "end": 239,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 200,
                "end": 207,
                "name": "onClick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 207,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 209,
                  "end": 238,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 210,
                      "end": 229,
                      "name": "k",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 211,
                        "end": 229,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 213,
                          "end": 229,
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "start": 213,
                              "end": 219,
                              "literal": {
                                "type": "Literal",
                                "start": 213,
                                "end": 219,
                                "value": "left",
                                "raw": "\"left\""
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 222,
                              "end": 229,
                              "literal": {
                                "type": "Literal",
                                "start": 222,
                                "end": 229,
                                "value": "right",
                                "raw": "\"right\""
                              }
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 231,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 234,
                      "end": 238
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 326,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 250,
        "end": 326,
        "id": {
          "type": "Identifier",
          "start": 260,
          "end": 269,
          "name": "LinkProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 278,
            "end": 292,
            "expression": {
              "type": "Identifier",
              "start": 278,
              "end": 292,
              "name": "ClickableProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 293,
          "end": 326,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 299,
              "end": 324,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 299,
                "end": 303,
                "name": "goTo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 303,
                "end": 323,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 305,
                  "end": 323,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 305,
                      "end": 311,
                      "literal": {
                        "type": "Literal",
                        "start": 305,
                        "end": 311,
                        "value": "home",
                        "raw": "\"home\""
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 314,
                      "end": 323,
                      "literal": {
                        "type": "Literal",
                        "start": 314,
                        "end": 323,
                        "value": "contact",
                        "raw": "\"contact\""
                      }
                    }
                  ]
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
      "start": 328,
      "end": 394,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 335,
        "end": 394,
        "id": {
          "type": "Identifier",
          "start": 344,
          "end": 354,
          "name": "MainButton",
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
            "start": 355,
            "end": 379,
            "name": "buttonProps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 379,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 368,
                "end": 379,
                "typeName": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 379,
                  "name": "ButtonProps",
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
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 380,
          "end": 393,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 382,
            "end": 393,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 382,
              "end": 393,
              "left": {
                "type": "Identifier",
                "start": 382,
                "end": 385,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 386,
                "end": 393,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 395,
      "end": 457,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 402,
        "end": 457,
        "id": {
          "type": "Identifier",
          "start": 411,
          "end": 421,
          "name": "MainButton",
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
            "start": 422,
            "end": 442,
            "name": "linkProps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 431,
              "end": 442,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 433,
                "end": 442,
                "typeName": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 442,
                  "name": "LinkProps",
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
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 443,
          "end": 456,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 445,
            "end": 456,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 445,
              "end": 456,
              "left": {
                "type": "Identifier",
                "start": 445,
                "end": 448,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 449,
                "end": 456,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 458,
      "end": 691,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 465,
        "end": 691,
        "id": {
          "type": "Identifier",
          "start": 474,
          "end": 484,
          "name": "MainButton",
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
            "start": 485,
            "end": 515,
            "name": "props",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 515,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 492,
                "end": 515,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 492,
                    "end": 503,
                    "typeName": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 503,
                      "name": "ButtonProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 506,
                    "end": 515,
                    "typeName": {
                      "type": "Identifier",
                      "start": 506,
                      "end": 515,
                      "name": "LinkProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 530,
          "end": 691,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 536,
              "end": 573,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 542,
                  "end": 572,
                  "id": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 551,
                    "name": "linkProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "start": 554,
                    "end": 572,
                    "expression": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 559,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 563,
                      "end": 572,
                      "typeName": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 572,
                        "name": "LinkProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            {
              "type": "IfStatement",
              "start": 578,
              "end": 647,
              "test": {
                "type": "MemberExpression",
                "start": 581,
                "end": 595,
                "object": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 590,
                  "name": "linkProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 595,
                  "name": "goTo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 597,
                "end": 647,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 607,
                    "end": 641,
                    "argument": {
                      "type": "CallExpression",
                      "start": 614,
                      "end": 640,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 614,
                        "end": 633,
                        "object": {
                          "type": "ThisExpression",
                          "start": 614,
                          "end": 618
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 633,
                          "name": "_buildMainLink",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 634,
                          "end": 639,
                          "name": "props",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "start": 653,
              "end": 689,
              "argument": {
                "type": "CallExpression",
                "start": 660,
                "end": 688,
                "callee": {
                  "type": "MemberExpression",
                  "start": 660,
                  "end": 681,
                  "object": {
                    "type": "ThisExpression",
                    "start": 660,
                    "end": 664
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 681,
                    "name": "_buildMainButton",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 682,
                    "end": 687,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 516,
          "end": 529,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 518,
            "end": 529,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 518,
              "end": 529,
              "left": {
                "type": "Identifier",
                "start": 518,
                "end": 521,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 522,
                "end": 529,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 693,
      "end": 765,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 699,
          "end": 764,
          "id": {
            "type": "Identifier",
            "start": 699,
            "end": 701,
            "name": "b0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 704,
            "end": 764,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 704,
              "end": 764,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 716,
                  "end": 755,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 720,
                    "end": 754,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 721,
                        "end": 753,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 721,
                          "end": 728,
                          "name": "onClick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 730,
                          "end": 753,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 731,
                              "end": 732,
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 737,
                            "end": 753,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 738,
                                "end": 752,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 738,
                                  "end": 752,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 738,
                                    "end": 749,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 738,
                                      "end": 745,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 746,
                                      "end": 749,
                                      "name": "log",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 750,
                                      "end": 751,
                                      "name": "k",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
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
                },
                {
                  "type": "JSXAttribute",
                  "start": 756,
                  "end": 761,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 756,
                    "end": 761,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 705,
                "end": 715,
                "name": "MainButton"
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
      "start": 798,
      "end": 862,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 804,
          "end": 861,
          "id": {
            "type": "Identifier",
            "start": 804,
            "end": 806,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 809,
            "end": 861,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 809,
              "end": 861,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 821,
                  "end": 852,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 821,
                    "end": 828,
                    "name": "onClick"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 829,
                    "end": 852,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 830,
                      "end": 851,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 831,
                          "end": 832,
                          "name": "k",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 835,
                        "end": 851,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 836,
                            "end": 850,
                            "expression": {
                              "type": "CallExpression",
                              "start": 836,
                              "end": 850,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 836,
                                "end": 847,
                                "object": {
                                  "type": "Identifier",
                                  "start": 836,
                                  "end": 843,
                                  "name": "console",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 844,
                                  "end": 847,
                                  "name": "log",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 848,
                                  "end": 849,
                                  "name": "k",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 853,
                  "end": 858,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 853,
                    "end": 858,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 810,
                "end": 820,
                "name": "MainButton"
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
      "start": 895,
      "end": 946,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 901,
          "end": 945,
          "id": {
            "type": "Identifier",
            "start": 901,
            "end": 903,
            "name": "b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 906,
            "end": 945,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 906,
              "end": 945,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 918,
                  "end": 936,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 922,
                    "end": 935,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 923,
                        "end": 934,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 923,
                          "end": 927,
                          "name": "goTo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 928,
                          "end": 934,
                          "value": "home",
                          "raw": "\"home\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 937,
                  "end": 942,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 937,
                    "end": 942,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 907,
                "end": 917,
                "name": "MainButton"
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
      "start": 983,
      "end": 1027,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 989,
          "end": 1026,
          "id": {
            "type": "Identifier",
            "start": 989,
            "end": 991,
            "name": "b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 994,
            "end": 1026,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 994,
              "end": 1026,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 1006,
                  "end": 1017,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1006,
                    "end": 1010,
                    "name": "goTo"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1011,
                    "end": 1017,
                    "value": "home",
                    "raw": "\"home\""
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1018,
                  "end": 1023,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1018,
                    "end": 1023,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 995,
                "end": 1005,
                "name": "MainButton"
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
      "type": "ExportNamedDeclaration",
      "start": 1066,
      "end": 1152,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1073,
        "end": 1152,
        "id": {
          "type": "Identifier",
          "start": 1082,
          "end": 1092,
          "name": "NoOverload",
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
            "start": 1093,
            "end": 1117,
            "name": "buttonProps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1104,
              "end": 1117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1106,
                "end": 1117,
                "typeName": {
                  "type": "Identifier",
                  "start": 1106,
                  "end": 1117,
                  "name": "ButtonProps",
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
          "type": "BlockStatement",
          "start": 1132,
          "end": 1152,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 1134,
              "end": 1150,
              "argument": {
                "type": "Identifier",
                "start": 1141,
                "end": 1150,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1118,
          "end": 1131,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1120,
            "end": 1131,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 1120,
              "end": 1131,
              "left": {
                "type": "Identifier",
                "start": 1120,
                "end": 1123,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1124,
                "end": 1131,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 1153,
      "end": 1226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1159,
          "end": 1225,
          "id": {
            "type": "Identifier",
            "start": 1159,
            "end": 1161,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1164,
            "end": 1225,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1164,
              "end": 1225,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1177,
                  "end": 1216,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1181,
                    "end": 1215,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1182,
                        "end": 1214,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1182,
                          "end": 1189,
                          "name": "onClick",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1191,
                          "end": 1214,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1192,
                              "end": 1193,
                              "name": "k",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 1198,
                            "end": 1214,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 1199,
                                "end": 1213,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 1199,
                                  "end": 1213,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1199,
                                    "end": 1210,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1199,
                                      "end": 1206,
                                      "name": "console",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1207,
                                      "end": 1210,
                                      "name": "log",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1211,
                                      "end": 1212,
                                      "name": "k",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
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
                },
                {
                  "type": "JSXAttribute",
                  "start": 1217,
                  "end": 1222,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1217,
                    "end": 1222,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1165,
                "end": 1175,
                "name": "NoOverload"
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
      "type": "ExportNamedDeclaration",
      "start": 1247,
      "end": 1330,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1254,
        "end": 1330,
        "id": {
          "type": "Identifier",
          "start": 1263,
          "end": 1274,
          "name": "NoOverload1",
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
            "start": 1275,
            "end": 1295,
            "name": "linkProps",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1284,
              "end": 1295,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1286,
                "end": 1295,
                "typeName": {
                  "type": "Identifier",
                  "start": 1286,
                  "end": 1295,
                  "name": "LinkProps",
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
          "type": "BlockStatement",
          "start": 1310,
          "end": 1330,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 1312,
              "end": 1328,
              "argument": {
                "type": "Identifier",
                "start": 1319,
                "end": 1328,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1296,
          "end": 1309,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1298,
            "end": 1309,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 1298,
              "end": 1309,
              "left": {
                "type": "Identifier",
                "start": 1298,
                "end": 1301,
                "name": "JSX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1302,
                "end": 1309,
                "name": "Element",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 1331,
      "end": 1384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1337,
          "end": 1383,
          "id": {
            "type": "Identifier",
            "start": 1337,
            "end": 1339,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1342,
            "end": 1383,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 1342,
              "end": 1383,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 1355,
                  "end": 1373,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1359,
                    "end": 1372,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1360,
                        "end": 1371,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1360,
                          "end": 1364,
                          "name": "goTo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1365,
                          "end": 1371,
                          "value": "home",
                          "raw": "\"home\""
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 1374,
                  "end": 1379,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 1374,
                    "end": 1379,
                    "name": "extra"
                  },
                  "value": null
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 1343,
                "end": 1354,
                "name": "NoOverload1"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
