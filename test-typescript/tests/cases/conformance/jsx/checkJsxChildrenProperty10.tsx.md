__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 487,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 165,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 80,
              "name": "ElementAttributesProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 81,
              "end": 94,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 83,
                  "end": 92,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 88,
                    "name": "props",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 90,
                      "end": 92,
                      "members": []
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
            "type": "TSInterfaceDeclaration",
            "start": 96,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 123,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 124,
              "end": 163,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 129,
                  "end": 138,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 132,
                    "name": "div",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 134,
                      "end": 137
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 141,
                  "end": 149,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 143,
                    "name": "h2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 148,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 145,
                      "end": 148
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 152,
                  "end": 160,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 154,
                    "name": "h1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 154,
                    "end": 159,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 156,
                      "end": 159
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 179,
        "name": "Button",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 253,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 183,
            "end": 192,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 188,
              "name": "props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 190,
                "end": 192,
                "members": []
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 251,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 203,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 203,
              "end": 251,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 251,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 216,
                    "end": 245,
                    "argument": {
                      "type": "JSXElement",
                      "start": 224,
                      "end": 244,
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 224,
                        "end": 229,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 225,
                          "end": 228,
                          "name": "div"
                        },
                        "selfClosing": false,
                        "typeArguments": null
                      },
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 238,
                        "end": 244,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 240,
                          "end": 243,
                          "name": "div"
                        }
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 229,
                          "end": 238,
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
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 315,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 267,
            "name": "k1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 270,
            "end": 315,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 270,
              "end": 275,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 271,
                "end": 274,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 309,
              "end": 315,
              "name": {
                "type": "JSXIdentifier",
                "start": 311,
                "end": 314,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXText",
                "start": 275,
                "end": 276,
                "value": " ",
                "raw": " "
              },
              {
                "type": "JSXElement",
                "start": 276,
                "end": 292,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 276,
                  "end": 280,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 277,
                    "end": 279,
                    "name": "h2"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 287,
                  "end": 292,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 289,
                    "end": 291,
                    "name": "h2"
                  }
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 280,
                    "end": 287,
                    "value": " Hello ",
                    "raw": " Hello "
                  }
                ]
              },
              {
                "type": "JSXText",
                "start": 292,
                "end": 293,
                "value": " ",
                "raw": " "
              },
              {
                "type": "JSXElement",
                "start": 293,
                "end": 309,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 293,
                  "end": 297,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 294,
                    "end": 296,
                    "name": "h1"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 304,
                  "end": 309,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 306,
                    "end": 308,
                    "name": "h1"
                  }
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 297,
                    "end": 304,
                    "value": " world ",
                    "raw": " world "
                  }
                ]
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
      "start": 317,
      "end": 393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 323,
            "name": "k2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 326,
            "end": 392,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 326,
              "end": 331,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 327,
                "end": 330,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 386,
              "end": 392,
              "name": {
                "type": "JSXIdentifier",
                "start": 388,
                "end": 391,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXText",
                "start": 331,
                "end": 332,
                "value": " ",
                "raw": " "
              },
              {
                "type": "JSXElement",
                "start": 332,
                "end": 348,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 332,
                  "end": 336,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 333,
                    "end": 335,
                    "name": "h2"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 343,
                  "end": 348,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 345,
                    "end": 347,
                    "name": "h2"
                  }
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 336,
                    "end": 343,
                    "value": " Hello ",
                    "raw": " Hello "
                  }
                ]
              },
              {
                "type": "JSXText",
                "start": 348,
                "end": 349,
                "value": " ",
                "raw": " "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 349,
                "end": 386,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 350,
                  "end": 385,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 351,
                      "end": 360,
                      "name": "user",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 355,
                        "end": 360,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 357,
                          "end": 360
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "JSXElement",
                    "start": 365,
                    "end": 385,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "start": 365,
                      "end": 369,
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 366,
                        "end": 368,
                        "name": "h2"
                      },
                      "selfClosing": false,
                      "typeArguments": null
                    },
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "start": 380,
                      "end": 385,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 382,
                        "end": 384,
                        "name": "h2"
                      }
                    },
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "start": 369,
                        "end": 380,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 370,
                          "end": 379,
                          "object": {
                            "type": "Identifier",
                            "start": 370,
                            "end": 374,
                            "name": "user",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 379,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
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
      "start": 394,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 400,
            "name": "k3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 403,
            "end": 440,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 403,
              "end": 408,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 404,
                "end": 407,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 434,
              "end": 440,
              "name": {
                "type": "JSXIdentifier",
                "start": 436,
                "end": 439,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXText",
                "start": 408,
                "end": 409,
                "value": " ",
                "raw": " "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 409,
                "end": 412,
                "expression": {
                  "type": "Literal",
                  "start": 410,
                  "end": 411,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "JSXText",
                "start": 412,
                "end": 413,
                "value": " ",
                "raw": " "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 413,
                "end": 433,
                "expression": {
                  "type": "Literal",
                  "start": 414,
                  "end": 432,
                  "value": "That is a number",
                  "raw": "\"That is a number\""
                }
              },
              {
                "type": "JSXText",
                "start": 433,
                "end": 434,
                "value": " ",
                "raw": " "
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
      "start": 442,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 486,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 448,
            "name": "k4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 451,
            "end": 486,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 451,
              "end": 459,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 452,
                "end": 458,
                "name": "Button"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 477,
              "end": 486,
              "name": {
                "type": "JSXIdentifier",
                "start": 479,
                "end": 485,
                "name": "Button"
              }
            },
            "children": [
              {
                "type": "JSXText",
                "start": 459,
                "end": 460,
                "value": " ",
                "raw": " "
              },
              {
                "type": "JSXElement",
                "start": 460,
                "end": 476,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 460,
                  "end": 464,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 461,
                    "end": 463,
                    "name": "h2"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 471,
                  "end": 476,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 473,
                    "end": 475,
                    "name": "h2"
                  }
                },
                "children": [
                  {
                    "type": "JSXText",
                    "start": 464,
                    "end": 471,
                    "value": " Hello ",
                    "raw": " Hello "
                  }
                ]
              },
              {
                "type": "JSXText",
                "start": 476,
                "end": 477,
                "value": " ",
                "raw": " "
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
