__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 955,
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
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 123,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
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
                    },
                    "typeArguments": null
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
                      },
                      "typeArguments": null
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
    {
      "type": "ClassDeclaration",
      "start": 127,
      "end": 236,
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 148,
        "end": 163,
        "object": {
          "type": "Identifier",
          "start": 148,
          "end": 153,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 154,
          "end": 163,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 234,
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
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 234,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 207,
                        "end": 212,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 208,
                          "end": 211,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 212,
                          "end": 221,
                          "value": "My Button",
                          "raw": "My Button"
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
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 238,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 260,
        "decorators": [],
        "name": "AnotherButton",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 282,
                "end": 286,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 283,
                  "end": 285,
                  "name": "h1"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 286,
                  "end": 305,
                  "value": "Just Another Button",
                  "raw": "Just Another Button"
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
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 315,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 328,
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 351,
                "end": 356,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 352,
                  "end": 355,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 356,
                  "end": 361,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 357,
                    "end": 360,
                    "object": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
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
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 447,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 446,
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
            "start": 387,
            "end": 446,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 387,
              "end": 407,
              "name": {
                "type": "JSXIdentifier",
                "start": 388,
                "end": 392,
                "name": "Comp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 393,
                  "end": 399,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 393,
                    "end": 394,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 395,
                    "end": 399,
                    "expression": {
                      "type": "Literal",
                      "start": 396,
                      "end": 398,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 400,
                  "end": 406,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 400,
                    "end": 401,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 402,
                    "end": 406,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXFragment",
                "start": 407,
                "end": 412,
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 407,
                  "end": 409
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 409,
                  "end": 412
                }
              },
              {
                "type": "JSXElement",
                "start": 412,
                "end": 422,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 412,
                  "end": 422,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 413,
                    "end": 419,
                    "name": "Button"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXElement",
                "start": 422,
                "end": 439,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 422,
                  "end": 439,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 423,
                    "end": 436,
                    "name": "AnotherButton"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 439,
              "end": 446,
              "name": {
                "type": "JSXIdentifier",
                "start": 441,
                "end": 445,
                "name": "Comp"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 517,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 454,
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 457,
            "end": 516,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 457,
              "end": 477,
              "name": {
                "type": "JSXIdentifier",
                "start": 458,
                "end": 462,
                "name": "Comp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 463,
                  "end": 469,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 463,
                    "end": 464,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 465,
                    "end": 469,
                    "expression": {
                      "type": "Literal",
                      "start": 466,
                      "end": 468,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 470,
                  "end": 476,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 470,
                    "end": 471,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 472,
                    "end": 476,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXFragment",
                "start": 477,
                "end": 492,
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 477,
                  "end": 479
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "start": 479,
                    "end": 489,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 479,
                      "end": 489,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 480,
                        "end": 486,
                        "name": "Button"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true
                    },
                    "children": [],
                    "closingElement": null
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 489,
                  "end": 492
                }
              },
              {
                "type": "JSXElement",
                "start": 492,
                "end": 509,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 492,
                  "end": 509,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 493,
                    "end": 506,
                    "name": "AnotherButton"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 509,
              "end": 516,
              "name": {
                "type": "JSXIdentifier",
                "start": 511,
                "end": 515,
                "name": "Comp"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 587,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 524,
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 527,
            "end": 586,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 527,
              "end": 547,
              "name": {
                "type": "JSXIdentifier",
                "start": 528,
                "end": 532,
                "name": "Comp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 533,
                  "end": 539,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 533,
                    "end": 534,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 535,
                    "end": 539,
                    "expression": {
                      "type": "Literal",
                      "start": 536,
                      "end": 538,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 540,
                  "end": 546,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 540,
                    "end": 541,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 542,
                    "end": 546,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXFragment",
                "start": 547,
                "end": 579,
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 547,
                  "end": 549
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "start": 549,
                    "end": 559,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 549,
                      "end": 559,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 550,
                        "end": 556,
                        "name": "Button"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true
                    },
                    "children": [],
                    "closingElement": null
                  },
                  {
                    "type": "JSXElement",
                    "start": 559,
                    "end": 576,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 559,
                      "end": 576,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 560,
                        "end": 573,
                        "name": "AnotherButton"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true
                    },
                    "children": [],
                    "closingElement": null
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 576,
                  "end": 579
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 579,
              "end": 586,
              "name": {
                "type": "JSXIdentifier",
                "start": 581,
                "end": 585,
                "name": "Comp"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 589,
      "end": 675,
      "id": {
        "type": "Identifier",
        "start": 599,
        "end": 614,
        "decorators": [],
        "name": "SingleChildProp",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 615,
        "end": 675,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 621,
            "end": 631,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 622,
              "end": 630,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 624,
                "end": 630
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 636,
            "end": 646,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 636,
              "end": 637,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 637,
              "end": 645,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 639,
                "end": 645
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 651,
            "end": 673,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 651,
              "end": 659,
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 659,
              "end": 672,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 661,
                "end": 672,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 661,
                  "end": 672,
                  "left": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 664,
                    "decorators": [],
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 672,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 677,
      "end": 754,
      "id": {
        "type": "Identifier",
        "start": 686,
        "end": 701,
        "decorators": [],
        "name": "SingleChildComp",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 702,
          "end": 720,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 703,
            "end": 720,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 705,
              "end": 720,
              "typeName": {
                "type": "Identifier",
                "start": 705,
                "end": 720,
                "decorators": [],
                "name": "SingleChildProp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 722,
        "end": 754,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 728,
            "end": 752,
            "argument": {
              "type": "JSXElement",
              "start": 735,
              "end": 751,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 735,
                "end": 740,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 736,
                  "end": 739,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 740,
                  "end": 745,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 741,
                    "end": 744,
                    "object": {
                      "type": "Identifier",
                      "start": 741,
                      "end": 742,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 744,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 745,
                "end": 751,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 747,
                  "end": 750,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 762,
      "end": 853,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 766,
          "end": 852,
          "id": {
            "type": "Identifier",
            "start": 766,
            "end": 768,
            "decorators": [],
            "name": "k4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 771,
            "end": 852,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 771,
              "end": 802,
              "name": {
                "type": "JSXIdentifier",
                "start": 772,
                "end": 787,
                "name": "SingleChildComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 788,
                  "end": 794,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 788,
                    "end": 789,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 790,
                    "end": 794,
                    "expression": {
                      "type": "Literal",
                      "start": 791,
                      "end": 793,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 795,
                  "end": 801,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 795,
                    "end": 796,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 797,
                    "end": 801,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXFragment",
                "start": 802,
                "end": 834,
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 802,
                  "end": 804
                },
                "children": [
                  {
                    "type": "JSXElement",
                    "start": 804,
                    "end": 814,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 804,
                      "end": 814,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 805,
                        "end": 811,
                        "name": "Button"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true
                    },
                    "children": [],
                    "closingElement": null
                  },
                  {
                    "type": "JSXElement",
                    "start": 814,
                    "end": 831,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 814,
                      "end": 831,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 815,
                        "end": 828,
                        "name": "AnotherButton"
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true
                    },
                    "children": [],
                    "closingElement": null
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 831,
                  "end": 834
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 834,
              "end": 852,
              "name": {
                "type": "JSXIdentifier",
                "start": 836,
                "end": 851,
                "name": "SingleChildComp"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 864,
      "end": 955,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 868,
          "end": 954,
          "id": {
            "type": "Identifier",
            "start": 868,
            "end": 870,
            "decorators": [],
            "name": "k5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 873,
            "end": 954,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 873,
              "end": 904,
              "name": {
                "type": "JSXIdentifier",
                "start": 874,
                "end": 889,
                "name": "SingleChildComp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 890,
                  "end": 896,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 890,
                    "end": 891,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 892,
                    "end": 896,
                    "expression": {
                      "type": "Literal",
                      "start": 893,
                      "end": 895,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 897,
                  "end": 903,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 897,
                    "end": 898,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 899,
                    "end": 903,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXFragment",
                "start": 904,
                "end": 909,
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 904,
                  "end": 906
                },
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 906,
                  "end": 909
                }
              },
              {
                "type": "JSXElement",
                "start": 909,
                "end": 919,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 909,
                  "end": 919,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 910,
                    "end": 916,
                    "name": "Button"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXElement",
                "start": 919,
                "end": 936,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 919,
                  "end": 936,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 920,
                    "end": 933,
                    "name": "AnotherButton"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 936,
              "end": 954,
              "name": {
                "type": "JSXIdentifier",
                "start": 938,
                "end": 953,
                "name": "SingleChildComp"
              }
            }
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
