file.tsx
```json
{
  "type": "Program",
  "start": 0,
  "end": 614,
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
        "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 125,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 125,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 65,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 123,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "decorators": [],
              "name": "children",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 122,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 95,
                "end": 122,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 106,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 95,
                      "end": 106,
                      "left": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 98,
                        "decorators": [],
                        "name": "JSX",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 106,
                        "decorators": [],
                        "name": "Element",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 109,
                    "end": 122,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 120,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 109,
                        "end": 120,
                        "left": {
                          "type": "Identifier",
                          "start": 109,
                          "end": 112,
                          "decorators": [],
                          "name": "JSX",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 120,
                          "decorators": [],
                          "name": "Element",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Prop",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 127,
      "end": 236,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 234,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 186,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 234,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 189,
                "end": 234,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 199,
                    "end": 228,
                    "argument": {
                      "type": "JSXElement",
                      "start": 207,
                      "end": 227,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 212,
                          "end": 221,
                          "raw": "My Button",
                          "value": "My Button"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 221,
                        "end": 227,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 223,
                          "end": 226,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 207,
                        "end": 212,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 208,
                          "end": 211,
                          "name": "div"
                        },
                        "selfClosing": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 139,
        "decorators": [],
        "name": "Button",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 148,
        "end": 163,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 148,
          "end": 153,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 154,
          "end": 163,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 163,
        "end": 173,
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 164,
            "end": 167
          },
          {
            "type": "TSAnyKeyword",
            "start": 169,
            "end": 172
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 238,
      "end": 313,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 269,
        "end": 313,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 275,
            "end": 311,
            "argument": {
              "type": "JSXElement",
              "start": 282,
              "end": 310,
              "children": [
                {
                  "type": "JSXText",
                  "start": 286,
                  "end": 305,
                  "raw": "Just Another Button",
                  "value": "Just Another Button"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 305,
                "end": 310,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 307,
                  "end": 309,
                  "name": "h1"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 282,
                "end": 286,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 283,
                  "end": 285,
                  "name": "h1"
                },
                "selfClosing": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 260,
        "decorators": [],
        "name": "AnotherButton",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 261,
          "end": 267,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 262,
            "end": 267,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 264,
              "end": 267
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 315,
      "end": 370,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 338,
        "end": 370,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 344,
            "end": 368,
            "argument": {
              "type": "JSXElement",
              "start": 351,
              "end": 367,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 356,
                  "end": 361,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 357,
                    "end": 360,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "decorators": [],
                      "name": "p",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 361,
                "end": 367,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 363,
                  "end": 366,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 351,
                "end": 356,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 352,
                  "end": 355,
                  "name": "div"
                },
                "selfClosing": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 328,
        "decorators": [],
        "name": "Comp",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 329,
          "end": 336,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 330,
            "end": 336,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 332,
              "end": 336,
              "typeName": {
                "type": "Identifier",
                "start": 332,
                "end": 336,
                "decorators": [],
                "name": "Prop",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 467,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 408,
            "decorators": [],
            "name": "k1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 411,
            "end": 467,
            "children": [
              {
                "type": "JSXElement",
                "start": 431,
                "end": 441,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 431,
                  "end": 441,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 432,
                    "end": 438,
                    "name": "Button"
                  },
                  "selfClosing": true
                }
              },
              {
                "type": "JSXText",
                "start": 441,
                "end": 443,
                "raw": "  ",
                "value": "  "
              },
              {
                "type": "JSXElement",
                "start": 443,
                "end": 460,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 443,
                  "end": 460,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 444,
                    "end": 457,
                    "name": "AnotherButton"
                  },
                  "selfClosing": true
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 460,
              "end": 467,
              "name": {
                "type": "JSXIdentifier",
                "start": 462,
                "end": 466,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 411,
              "end": 431,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 417,
                  "end": 423,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 417,
                    "end": 418,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 419,
                    "end": 423,
                    "expression": {
                      "type": "Literal",
                      "start": 420,
                      "end": 422,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 424,
                  "end": 430,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 424,
                    "end": 425,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 426,
                    "end": 430,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 412,
                "end": 416,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 539,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 475,
            "decorators": [],
            "name": "k2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 478,
            "end": 539,
            "children": [
              {
                "type": "JSXElement",
                "start": 498,
                "end": 508,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 498,
                  "end": 508,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 499,
                    "end": 505,
                    "name": "Button"
                  },
                  "selfClosing": true
                }
              },
              {
                "type": "JSXText",
                "start": 508,
                "end": 513,
                "raw": "\n    ",
                "value": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 513,
                "end": 530,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 513,
                  "end": 530,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 514,
                    "end": 527,
                    "name": "AnotherButton"
                  },
                  "selfClosing": true
                }
              },
              {
                "type": "JSXText",
                "start": 530,
                "end": 532,
                "raw": "  ",
                "value": "  "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 532,
              "end": 539,
              "name": {
                "type": "JSXIdentifier",
                "start": 534,
                "end": 538,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 478,
              "end": 498,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 484,
                  "end": 490,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 484,
                    "end": 485,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 486,
                    "end": 490,
                    "expression": {
                      "type": "Literal",
                      "start": 487,
                      "end": 489,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 491,
                  "end": 497,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 491,
                    "end": 492,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 493,
                    "end": 497,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 479,
                "end": 483,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 541,
      "end": 614,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 545,
          "end": 613,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 545,
            "end": 547,
            "decorators": [],
            "name": "k3",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 550,
            "end": 613,
            "children": [
              {
                "type": "JSXText",
                "start": 570,
                "end": 574,
                "raw": "    ",
                "value": "    "
              },
              {
                "type": "JSXElement",
                "start": 574,
                "end": 584,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 574,
                  "end": 584,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 575,
                    "end": 581,
                    "name": "Button"
                  },
                  "selfClosing": true
                }
              },
              {
                "type": "JSXText",
                "start": 584,
                "end": 589,
                "raw": "\n    ",
                "value": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 589,
                "end": 606,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 589,
                  "end": 606,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 590,
                    "end": 603,
                    "name": "AnotherButton"
                  },
                  "selfClosing": true
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 606,
              "end": 613,
              "name": {
                "type": "JSXIdentifier",
                "start": 608,
                "end": 612,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 550,
              "end": 570,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 556,
                  "end": 562,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 556,
                    "end": 557,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 558,
                    "end": 562,
                    "expression": {
                      "type": "Literal",
                      "start": 559,
                      "end": 561,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 563,
                  "end": 569,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 563,
                    "end": 564,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 565,
                    "end": 569,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 551,
                "end": 555,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
