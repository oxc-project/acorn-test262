__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 660,
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
      "end": 145,
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
        "end": 145,
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
            "end": 143,
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
              "end": 142,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 95,
                "end": 142,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 95,
                    "end": 101
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 115,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 104,
                      "end": 115,
                      "left": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 107,
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 115,
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
                    "start": 118,
                    "end": 142,
                    "elementType": {
                      "type": "TSUnionType",
                      "start": 119,
                      "end": 139,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 119,
                          "end": 125
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 128,
                          "end": 139,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 128,
                            "end": 139,
                            "left": {
                              "type": "Identifier",
                              "start": 128,
                              "end": 131,
                              "decorators": [],
                              "name": "JSX",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 132,
                              "end": 139,
                              "decorators": [],
                              "name": "Element",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": null
                        }
                      ]
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
      "start": 147,
      "end": 256,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 159,
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 168,
        "end": 183,
        "object": {
          "type": "Identifier",
          "start": 168,
          "end": 173,
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 174,
          "end": 183,
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
        "start": 183,
        "end": 193,
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 184,
            "end": 187
          },
          {
            "type": "TSAnyKeyword",
            "start": 189,
            "end": 192
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 194,
        "end": 256,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 200,
            "end": 254,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 206,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 254,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 254,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 219,
                    "end": 248,
                    "argument": {
                      "type": "JSXElement",
                      "start": 227,
                      "end": 247,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 227,
                        "end": 232,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 228,
                          "end": 231,
                          "name": "div"
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 232,
                          "end": 241,
                          "value": "My Button",
                          "raw": "My Button"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 241,
                        "end": 247,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 243,
                          "end": 246,
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
      "start": 258,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 280,
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
          "start": 281,
          "end": 287,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 282,
            "end": 287,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 284,
              "end": 287
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 333,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 295,
            "end": 331,
            "argument": {
              "type": "JSXElement",
              "start": 302,
              "end": 330,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 302,
                "end": 306,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 303,
                  "end": 305,
                  "name": "h1"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 306,
                  "end": 325,
                  "value": "Just Another Button",
                  "raw": "Just Another Button"
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 325,
                "end": 330,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 327,
                  "end": 329,
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
      "start": 335,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 348,
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
          "start": 349,
          "end": 356,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 350,
            "end": 356,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 352,
              "end": 356,
              "typeName": {
                "type": "Identifier",
                "start": 352,
                "end": 356,
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
        "start": 358,
        "end": 390,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 364,
            "end": 388,
            "argument": {
              "type": "JSXElement",
              "start": 371,
              "end": 387,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 371,
                "end": 376,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 372,
                  "end": 375,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 376,
                  "end": 381,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 377,
                    "end": 380,
                    "object": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 380,
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
                "start": 381,
                "end": 387,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 383,
                  "end": 386,
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
      "start": 398,
      "end": 464,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 402,
          "end": 463,
          "id": {
            "type": "Identifier",
            "start": 402,
            "end": 404,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 407,
            "end": 463,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 407,
              "end": 427,
              "name": {
                "type": "JSXIdentifier",
                "start": 408,
                "end": 412,
                "name": "Comp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 413,
                  "end": 419,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 413,
                    "end": 414,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 415,
                    "end": 419,
                    "expression": {
                      "type": "Literal",
                      "start": 416,
                      "end": 418,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 420,
                  "end": 426,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 420,
                    "end": 421,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 422,
                    "end": 426,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 427,
                "end": 437,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 427,
                  "end": 437,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 428,
                    "end": 434,
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
                "type": "JSXText",
                "start": 437,
                "end": 439,
                "value": "  ",
                "raw": "  "
              },
              {
                "type": "JSXElement",
                "start": 439,
                "end": 456,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 439,
                  "end": 456,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 440,
                    "end": 453,
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
              "start": 456,
              "end": 463,
              "name": {
                "type": "JSXIdentifier",
                "start": 458,
                "end": 462,
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
      "start": 465,
      "end": 536,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 469,
          "end": 535,
          "id": {
            "type": "Identifier",
            "start": 469,
            "end": 471,
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 474,
            "end": 535,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 474,
              "end": 494,
              "name": {
                "type": "JSXIdentifier",
                "start": 475,
                "end": 479,
                "name": "Comp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 480,
                  "end": 486,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 480,
                    "end": 481,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 482,
                    "end": 486,
                    "expression": {
                      "type": "Literal",
                      "start": 483,
                      "end": 485,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 487,
                  "end": 493,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 487,
                    "end": 488,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 489,
                    "end": 493,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 494,
                "end": 504,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 494,
                  "end": 504,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 495,
                    "end": 501,
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
                "type": "JSXText",
                "start": 504,
                "end": 509,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 509,
                "end": 526,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 509,
                  "end": 526,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 510,
                    "end": 523,
                    "name": "AnotherButton"
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              {
                "type": "JSXText",
                "start": 526,
                "end": 528,
                "value": "  ",
                "raw": "  "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 528,
              "end": 535,
              "name": {
                "type": "JSXIdentifier",
                "start": 530,
                "end": 534,
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
      "start": 537,
      "end": 610,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 609,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 543,
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 546,
            "end": 609,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 546,
              "end": 566,
              "name": {
                "type": "JSXIdentifier",
                "start": 547,
                "end": 551,
                "name": "Comp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 552,
                  "end": 558,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 552,
                    "end": 553,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 554,
                    "end": 558,
                    "expression": {
                      "type": "Literal",
                      "start": 555,
                      "end": 557,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 559,
                  "end": 565,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 559,
                    "end": 560,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 561,
                    "end": 565,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXText",
                "start": 566,
                "end": 570,
                "value": "    ",
                "raw": "    "
              },
              {
                "type": "JSXElement",
                "start": 570,
                "end": 580,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 570,
                  "end": 580,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 571,
                    "end": 577,
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
                "type": "JSXText",
                "start": 580,
                "end": 585,
                "value": "\n    ",
                "raw": "\n    "
              },
              {
                "type": "JSXElement",
                "start": 585,
                "end": 602,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 585,
                  "end": 602,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 586,
                    "end": 599,
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
              "start": 602,
              "end": 609,
              "name": {
                "type": "JSXIdentifier",
                "start": 604,
                "end": 608,
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
      "start": 611,
      "end": 660,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 659,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 617,
            "decorators": [],
            "name": "k4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 620,
            "end": 659,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 620,
              "end": 640,
              "name": {
                "type": "JSXIdentifier",
                "start": 621,
                "end": 625,
                "name": "Comp"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 626,
                  "end": 632,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 626,
                    "end": 627,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 628,
                    "end": 632,
                    "expression": {
                      "type": "Literal",
                      "start": 629,
                      "end": 631,
                      "value": 10,
                      "raw": "10"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 633,
                  "end": 639,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 633,
                    "end": 634,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 635,
                    "end": 639,
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXElement",
                "start": 640,
                "end": 650,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 640,
                  "end": 650,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 641,
                    "end": 647,
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
                "type": "JSXText",
                "start": 650,
                "end": 652,
                "value": "  ",
                "raw": "  "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 652,
              "end": 659,
              "name": {
                "type": "JSXIdentifier",
                "start": 654,
                "end": 658,
                "name": "Comp"
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
