__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 697,
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
          "value": "react",
          "regex": null,
          "bigint": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
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
                    "typeArguments": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 106,
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "typeAnnotation": null
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
                      "typeArguments": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 120,
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 186,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
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
                        "selfClosing": false,
                        "typeArguments": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 154,
          "end": 163,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
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
      },
      "typeParameters": null
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
                "selfClosing": false,
                "typeArguments": null
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
        "optional": false,
        "typeAnnotation": null
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
      ],
      "returnType": null,
      "typeParameters": null
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
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
                "selfClosing": false,
                "typeArguments": null
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
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 332,
                "end": 336,
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 468,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 384,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 391,
            "end": 468,
            "children": [
              {
                "type": "JSXText",
                "start": 411,
                "end": 420,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 420,
                "end": 430,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 420,
                  "end": 430,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 421,
                    "end": 427,
                    "name": "Button"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 430,
                "end": 439,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 439,
                "end": 456,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 439,
                  "end": 456,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 440,
                    "end": 453,
                    "name": "AnotherButton"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 456,
                "end": 461,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 461,
              "end": 468,
              "name": {
                "type": "JSXIdentifier",
                "start": 463,
                "end": 467,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 391,
              "end": 411,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 397,
                  "end": 403,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 397,
                    "end": 398,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 399,
                    "end": 403,
                    "expression": {
                      "type": "Literal",
                      "start": 400,
                      "end": 402,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 404,
                  "end": 410,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 404,
                    "end": 405,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 406,
                    "end": 410,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 392,
                "end": 396,
                "name": "Comp"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 471,
      "end": 578,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 475,
          "end": 577,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 477,
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 484,
            "end": 577,
            "children": [
              {
                "type": "JSXText",
                "start": 504,
                "end": 529,
                "raw": "\n     \n    \n    \n        ",
                "value": "\n     \n    \n    \n        "
              },
              {
                "type": "JSXElement",
                "start": 529,
                "end": 539,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 529,
                  "end": 539,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 530,
                    "end": 536,
                    "name": "Button"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 539,
                "end": 548,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 548,
                "end": 565,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 548,
                  "end": 565,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 549,
                    "end": 562,
                    "name": "AnotherButton"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 565,
                "end": 570,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 570,
              "end": 577,
              "name": {
                "type": "JSXIdentifier",
                "start": 572,
                "end": 576,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 484,
              "end": 504,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 490,
                  "end": 496,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 490,
                    "end": 491,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 492,
                    "end": 496,
                    "expression": {
                      "type": "Literal",
                      "start": 493,
                      "end": 495,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 497,
                  "end": 503,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 497,
                    "end": 498,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 499,
                    "end": 503,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 485,
                "end": 489,
                "name": "Comp"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 580,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 647,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 586,
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 589,
            "end": 647,
            "children": [
              {
                "type": "JSXElement",
                "start": 609,
                "end": 619,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 609,
                  "end": 619,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 610,
                    "end": 616,
                    "name": "Button"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 619,
                "end": 622,
                "raw": "  \n",
                "value": "  \n"
              },
              {
                "type": "JSXElement",
                "start": 622,
                "end": 639,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 622,
                  "end": 639,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 623,
                    "end": 636,
                    "name": "AnotherButton"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              },
              {
                "type": "JSXText",
                "start": 639,
                "end": 640,
                "raw": "\n",
                "value": "\n"
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 640,
              "end": 647,
              "name": {
                "type": "JSXIdentifier",
                "start": 642,
                "end": 646,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 589,
              "end": 609,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 595,
                  "end": 601,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 595,
                    "end": 596,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 597,
                    "end": 601,
                    "expression": {
                      "type": "Literal",
                      "start": 598,
                      "end": 600,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 602,
                  "end": 608,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 602,
                    "end": 603,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 604,
                    "end": 608,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 590,
                "end": 594,
                "name": "Comp"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 697,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 696,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 656,
            "decorators": [],
            "name": "k4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 659,
            "end": 696,
            "children": [
              {
                "type": "JSXElement",
                "start": 679,
                "end": 689,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 679,
                  "end": 689,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 680,
                    "end": 686,
                    "name": "Button"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 689,
              "end": 696,
              "name": {
                "type": "JSXIdentifier",
                "start": 691,
                "end": 695,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 659,
              "end": 679,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 665,
                  "end": 671,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 665,
                    "end": 666,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 667,
                    "end": 671,
                    "expression": {
                      "type": "Literal",
                      "start": 668,
                      "end": 670,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 672,
                  "end": 678,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 672,
                    "end": 673,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 674,
                    "end": 678,
                    "raw": "\"hi\"",
                    "value": "hi",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 660,
                "end": 664,
                "name": "Comp"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
