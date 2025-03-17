__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 361,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 99,
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
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      },
                      "decorators": [],
                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 112,
            "name": "p1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 112,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 109,
                "end": 112
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "p2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 121,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 118,
                "end": 121
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "p3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 130,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 171,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 170,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 144,
            "name": "spreads1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 147,
            "end": 170,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 147,
              "end": 160,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 152,
                  "end": 159,
                  "argument": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 158,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 148,
                "end": 151,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 184,
            "name": "spreads2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 187,
            "end": 210,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 187,
              "end": 200,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 192,
                  "end": 199,
                  "argument": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 198,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 188,
                "end": 191,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 224,
            "name": "spreads3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 227,
            "end": 257,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 227,
              "end": 247,
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
                      "name": "p3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 228,
                "end": 231,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 259,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 271,
            "name": "spreads4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 274,
            "end": 305,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 274,
              "end": 295,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 279,
                  "end": 286,
                  "argument": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 285,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "name": "p3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 275,
                "end": 278,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 319,
            "name": "spreads5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 322,
            "end": 359,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 322,
              "end": 349,
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
                      "name": "p2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "name": "p3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 323,
                "end": 326,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
                  "name": "p2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
