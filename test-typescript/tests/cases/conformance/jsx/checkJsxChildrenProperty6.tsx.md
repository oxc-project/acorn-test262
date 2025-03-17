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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "Prop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                        "name": "JSX",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 106,
                        "name": "Element",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "JSX",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 120,
                          "name": "Element",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 139,
        "name": "Button",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 148,
        "end": 163,
        "object": {
          "type": "Identifier",
          "start": 148,
          "end": 153,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 154,
          "end": 163,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 180,
            "end": 234,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 186,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 234,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 208,
                          "end": 211,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 212,
                          "end": 221,
                          "value": "My Button",
                          "raw": "My Button"
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
      "id": {
        "type": "Identifier",
        "start": 247,
        "end": 260,
        "name": "AnotherButton",
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
          "start": 261,
          "end": 267,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 262,
            "end": 267,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 264,
              "end": 267
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 283,
                  "end": 285,
                  "name": "h1"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 286,
                  "end": 305,
                  "value": "Just Another Button",
                  "raw": "Just Another Button"
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 315,
      "end": 370,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 328,
        "name": "Comp",
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
          "start": 329,
          "end": 336,
          "name": "p",
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
                "name": "Prop",
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
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 352,
                  "end": 355,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
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
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 384,
            "name": "k1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 391,
            "end": 468,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
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
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 411,
                "end": 420,
                "value": "\n        ",
                "raw": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 420,
                "end": 430,
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
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 430,
                "end": 439,
                "value": "\n        ",
                "raw": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 439,
                "end": 456,
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
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 456,
                "end": 461,
                "value": "\n    ",
                "raw": "\n    "
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 477,
            "name": "k2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 484,
            "end": 577,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
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
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 504,
                "end": 529,
                "value": "\n     \n    \n    \n        ",
                "raw": "\n     \n    \n    \n        "
              },
              {
                "type": "JSXElement",
                "start": 529,
                "end": 539,
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
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 539,
                "end": 548,
                "value": "\n        ",
                "raw": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 548,
                "end": 565,
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
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 565,
                "end": 570,
                "value": "\n    ",
                "raw": "\n    "
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 586,
            "name": "k3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 589,
            "end": 647,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
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
            },
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
            "children": [
              {
                "type": "JSXElement",
                "start": 609,
                "end": 619,
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
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 619,
                "end": 622,
                "value": "  \n",
                "raw": "  \n"
              },
              {
                "type": "JSXElement",
                "start": 622,
                "end": 639,
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
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 639,
                "end": 640,
                "value": "\n",
                "raw": "\n"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 656,
            "name": "k4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 659,
            "end": 696,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
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
            },
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
            "children": [
              {
                "type": "JSXElement",
                "start": 679,
                "end": 689,
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
                },
                "closingElement": null,
                "children": []
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
