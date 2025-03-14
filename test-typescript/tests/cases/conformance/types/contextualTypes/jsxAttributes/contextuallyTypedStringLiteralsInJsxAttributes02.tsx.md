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
        "decorators": [],
        "name": "React",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 40,
        "end": 56,
        "expression": {
          "type": "Literal",
          "start": 48,
          "end": 55,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 58,
      "end": 140,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 65,
        "end": 140,
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
              "key": {
                "type": "Identifier",
                "start": 96,
                "end": 104,
                "decorators": [],
                "name": "children",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 105,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 107,
                  "end": 113
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 119,
              "end": 138,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 119,
                "end": 128,
                "decorators": [],
                "name": "className",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 129,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 131,
                  "end": 137
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 75,
          "end": 89,
          "decorators": [],
          "name": "ClickableProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 142,
      "end": 241,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 149,
        "end": 241,
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
              "key": {
                "type": "Identifier",
                "start": 200,
                "end": 207,
                "decorators": [],
                "name": "onClick",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 207,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 209,
                  "end": 238,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 210,
                      "end": 229,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
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
                                "raw": "\"left\"",
                                "value": "left"
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
                    "start": 231,
                    "end": 238,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 234,
                      "end": 238
                    }
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 179,
            "end": 193,
            "expression": {
              "type": "Identifier",
              "start": 179,
              "end": 193,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 159,
          "end": 170,
          "decorators": [],
          "name": "ButtonProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 326,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 250,
        "end": 326,
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
              "key": {
                "type": "Identifier",
                "start": 299,
                "end": 303,
                "decorators": [],
                "name": "goTo",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                        "raw": "\"home\"",
                        "value": "home"
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
            "start": 278,
            "end": 292,
            "expression": {
              "type": "Identifier",
              "start": 278,
              "end": 292,
              "decorators": [],
              "name": "ClickableProps",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 260,
          "end": 269,
          "decorators": [],
          "name": "LinkProps",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 328,
      "end": 394,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 335,
        "end": 394,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 344,
          "end": 354,
          "decorators": [],
          "name": "MainButton",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 355,
            "end": 379,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
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
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false
                }
              }
            }
          }
        ],
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
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 386,
                "end": 393,
                "decorators": [],
                "name": "Element",
                "optional": false
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 395,
      "end": 457,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 402,
        "end": 457,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 411,
          "end": 421,
          "decorators": [],
          "name": "MainButton",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 422,
            "end": 442,
            "decorators": [],
            "name": "linkProps",
            "optional": false,
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
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false
                }
              }
            }
          }
        ],
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
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 449,
                "end": 456,
                "decorators": [],
                "name": "Element",
                "optional": false
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 458,
      "end": 691,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 465,
        "end": 691,
        "async": false,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 551,
                    "decorators": [],
                    "name": "linkProps",
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
                      "decorators": [],
                      "name": "props",
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
                        "decorators": [],
                        "name": "LinkProps",
                        "optional": false
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
              "start": 578,
              "end": 647,
              "alternate": null,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 634,
                          "end": 639,
                          "decorators": [],
                          "name": "props",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 614,
                        "end": 633,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 614,
                          "end": 618
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 619,
                          "end": 633,
                          "decorators": [],
                          "name": "_buildMainLink",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "MemberExpression",
                "start": 581,
                "end": 595,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 590,
                  "decorators": [],
                  "name": "linkProps",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 595,
                  "decorators": [],
                  "name": "goTo",
                  "optional": false
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 653,
              "end": 689,
              "argument": {
                "type": "CallExpression",
                "start": 660,
                "end": 688,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 682,
                    "end": 687,
                    "decorators": [],
                    "name": "props",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 660,
                  "end": 681,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 660,
                    "end": 664
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 681,
                    "decorators": [],
                    "name": "_buildMainButton",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 474,
          "end": 484,
          "decorators": [],
          "name": "MainButton",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 485,
            "end": 515,
            "decorators": [],
            "name": "props",
            "optional": false,
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
                      "decorators": [],
                      "name": "ButtonProps",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 506,
                    "end": 515,
                    "typeName": {
                      "type": "Identifier",
                      "start": 506,
                      "end": 515,
                      "decorators": [],
                      "name": "LinkProps",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ],
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
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 522,
                "end": 529,
                "decorators": [],
                "name": "Element",
                "optional": false
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 699,
            "end": 701,
            "decorators": [],
            "name": "b0",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 704,
            "end": 764,
            "children": [],
            "closingElement": null,
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 721,
                          "end": 728,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 730,
                          "end": 753,
                          "async": false,
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
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 750,
                                      "end": 751,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 738,
                                    "end": 749,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 738,
                                      "end": 745,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 746,
                                      "end": 749,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
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
                              "start": 731,
                              "end": 732,
                              "decorators": [],
                              "name": "k",
                              "optional": false
                            }
                          ]
                        }
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 804,
            "end": 806,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 809,
            "end": 861,
            "children": [],
            "closingElement": null,
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
                      "async": false,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 848,
                                  "end": 849,
                                  "decorators": [],
                                  "name": "k",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 836,
                                "end": 847,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 836,
                                  "end": 843,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 844,
                                  "end": 847,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false
                                }
                              },
                              "optional": false
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
                          "start": 831,
                          "end": 832,
                          "decorators": [],
                          "name": "k",
                          "optional": false
                        }
                      ]
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 901,
            "end": 903,
            "decorators": [],
            "name": "b3",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 906,
            "end": 945,
            "children": [],
            "closingElement": null,
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 923,
                          "end": 927,
                          "decorators": [],
                          "name": "goTo",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 928,
                          "end": 934,
                          "raw": "\"home\"",
                          "value": "home"
                        }
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 989,
            "end": 991,
            "decorators": [],
            "name": "b4",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 994,
            "end": 1026,
            "children": [],
            "closingElement": null,
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
                    "raw": "\"home\"",
                    "value": "home"
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1066,
      "end": 1152,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1073,
        "end": 1152,
        "async": false,
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
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 1082,
          "end": 1092,
          "decorators": [],
          "name": "NoOverload",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 1093,
            "end": 1117,
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
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
                  "decorators": [],
                  "name": "ButtonProps",
                  "optional": false
                }
              }
            }
          }
        ],
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
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1124,
                "end": 1131,
                "decorators": [],
                "name": "Element",
                "optional": false
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1159,
            "end": 1161,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1164,
            "end": 1225,
            "children": [],
            "closingElement": null,
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1182,
                          "end": 1189,
                          "decorators": [],
                          "name": "onClick",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 1191,
                          "end": 1214,
                          "async": false,
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
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1211,
                                      "end": 1212,
                                      "decorators": [],
                                      "name": "k",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1199,
                                    "end": 1210,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1199,
                                      "end": 1206,
                                      "decorators": [],
                                      "name": "console",
                                      "optional": false
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1207,
                                      "end": 1210,
                                      "decorators": [],
                                      "name": "log",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
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
                              "start": 1192,
                              "end": 1193,
                              "decorators": [],
                              "name": "k",
                              "optional": false
                            }
                          ]
                        }
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1247,
      "end": 1330,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1254,
        "end": 1330,
        "async": false,
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
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 1263,
          "end": 1274,
          "decorators": [],
          "name": "NoOverload1",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 1275,
            "end": 1295,
            "decorators": [],
            "name": "linkProps",
            "optional": false,
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
                  "decorators": [],
                  "name": "LinkProps",
                  "optional": false
                }
              }
            }
          }
        ],
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
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1302,
                "end": 1309,
                "decorators": [],
                "name": "Element",
                "optional": false
              }
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1337,
            "end": 1339,
            "decorators": [],
            "name": "d1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 1342,
            "end": 1383,
            "children": [],
            "closingElement": null,
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1360,
                          "end": 1364,
                          "decorators": [],
                          "name": "goTo",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 1365,
                          "end": 1371,
                          "raw": "\"home\"",
                          "value": "home"
                        }
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
