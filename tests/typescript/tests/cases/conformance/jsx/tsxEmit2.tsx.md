__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 360,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 99,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 73,
              "end": 97,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 77,
                  "end": 94,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 87,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
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
      "type": "VariableDeclaration",
      "start": 101,
      "end": 131,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 112,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 112,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 109,
                "end": 112
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 121,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 121,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 118,
                "end": 121
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 130,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 130,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 171,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 144,
            "decorators": [],
            "name": "spreads1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 147,
            "end": 170,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 147,
              "end": 160,
              "name": {
                "type": "JSXIdentifier",
                "start": 148,
                "end": 151,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 152,
                  "end": 159,
                  "argument": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 158,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 160,
                "end": 164,
                "expression": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 163,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 164,
              "end": 170,
              "name": {
                "type": "JSXIdentifier",
                "start": 166,
                "end": 169,
                "name": "div"
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
      "start": 172,
      "end": 211,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 184,
            "decorators": [],
            "name": "spreads2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 187,
            "end": 210,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 187,
              "end": 200,
              "name": {
                "type": "JSXIdentifier",
                "start": 188,
                "end": 191,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 192,
                  "end": 199,
                  "argument": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 198,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 200,
                "end": 204,
                "expression": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 203,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 204,
              "end": 210,
              "name": {
                "type": "JSXIdentifier",
                "start": 206,
                "end": 209,
                "name": "div"
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
      "start": 212,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 224,
            "decorators": [],
            "name": "spreads3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 227,
            "end": 257,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 227,
              "end": 247,
              "name": {
                "type": "JSXIdentifier",
                "start": 228,
                "end": 231,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 232,
                  "end": 238,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 232,
                    "end": 233,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 234,
                    "end": 238,
                    "expression": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 237,
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 239,
                  "end": 246,
                  "argument": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 245,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 247,
                "end": 251,
                "expression": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 250,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 251,
              "end": 257,
              "name": {
                "type": "JSXIdentifier",
                "start": 253,
                "end": 256,
                "name": "div"
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
      "start": 259,
      "end": 306,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 271,
            "decorators": [],
            "name": "spreads4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 274,
            "end": 305,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 274,
              "end": 295,
              "name": {
                "type": "JSXIdentifier",
                "start": 275,
                "end": 278,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 279,
                  "end": 286,
                  "argument": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 285,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 287,
                  "end": 293,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 287,
                    "end": 288,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 289,
                    "end": 293,
                    "expression": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 292,
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 295,
                "end": 299,
                "expression": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 298,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 299,
              "end": 305,
              "name": {
                "type": "JSXIdentifier",
                "start": 301,
                "end": 304,
                "name": "div"
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
      "start": 307,
      "end": 360,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 319,
            "decorators": [],
            "name": "spreads5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 322,
            "end": 359,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 322,
              "end": 349,
              "name": {
                "type": "JSXIdentifier",
                "start": 323,
                "end": 326,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 327,
                  "end": 333,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 327,
                    "end": 328,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 329,
                    "end": 333,
                    "expression": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 332,
                      "decorators": [],
                      "name": "p2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 334,
                  "end": 341,
                  "argument": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 340,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 342,
                  "end": 348,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 342,
                    "end": 343,
                    "name": "y"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 344,
                    "end": 348,
                    "expression": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 347,
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 349,
                "end": 353,
                "expression": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 352,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 353,
              "end": 359,
              "name": {
                "type": "JSXIdentifier",
                "start": 355,
                "end": 358,
                "name": "div"
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
