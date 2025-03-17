__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 385,
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
      "start": 100,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 122,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "name": "React",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 136,
            "name": "p1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 136,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 133,
                "end": 136
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
          "start": 138,
          "end": 145,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 145,
            "name": "p2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 145,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 142,
                "end": 145
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
          "start": 147,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 154,
            "name": "p3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 154,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 151,
                "end": 154
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
      "start": 156,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 168,
            "name": "spreads1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 171,
            "end": 194,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 171,
              "end": 184,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 176,
                  "end": 183,
                  "argument": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 182,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 172,
                "end": 175,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 188,
              "end": 194,
              "name": {
                "type": "JSXIdentifier",
                "start": 190,
                "end": 193,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 184,
                "end": 188,
                "expression": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 187,
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
      "start": 196,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 208,
            "name": "spreads2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 211,
            "end": 234,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 211,
              "end": 224,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 216,
                  "end": 223,
                  "argument": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 222,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 212,
                "end": 215,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 228,
              "end": 234,
              "name": {
                "type": "JSXIdentifier",
                "start": 230,
                "end": 233,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 224,
                "end": 228,
                "expression": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 227,
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
      "start": 236,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 248,
            "name": "spreads3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 251,
            "end": 281,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 251,
              "end": 271,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 256,
                  "end": 262,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 256,
                    "end": 257,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 258,
                    "end": 262,
                    "expression": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 261,
                      "name": "p3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 263,
                  "end": 270,
                  "argument": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 269,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 252,
                "end": 255,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 275,
              "end": 281,
              "name": {
                "type": "JSXIdentifier",
                "start": 277,
                "end": 280,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 271,
                "end": 275,
                "expression": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 274,
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
      "start": 283,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 295,
            "name": "spreads4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 298,
            "end": 329,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 298,
              "end": 319,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 303,
                  "end": 310,
                  "argument": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 309,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 311,
                  "end": 317,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 311,
                    "end": 312,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 313,
                    "end": 317,
                    "expression": {
                      "type": "Identifier",
                      "start": 314,
                      "end": 316,
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
                "start": 299,
                "end": 302,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 323,
              "end": 329,
              "name": {
                "type": "JSXIdentifier",
                "start": 325,
                "end": 328,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 319,
                "end": 323,
                "expression": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 322,
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
      "start": 331,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 343,
            "name": "spreads5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 346,
            "end": 383,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 346,
              "end": 373,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 351,
                  "end": 357,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 351,
                    "end": 352,
                    "name": "x"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 353,
                    "end": 357,
                    "expression": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 356,
                      "name": "p2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 358,
                  "end": 365,
                  "argument": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 364,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 366,
                  "end": 372,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 366,
                    "end": 367,
                    "name": "y"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 368,
                    "end": 372,
                    "expression": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 371,
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
                "start": 347,
                "end": 350,
                "name": "div"
              },
              "selfClosing": false,
              "typeArguments": null
            },
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 377,
              "end": 383,
              "name": {
                "type": "JSXIdentifier",
                "start": 379,
                "end": 382,
                "name": "div"
              }
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 373,
                "end": 377,
                "expression": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 376,
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
