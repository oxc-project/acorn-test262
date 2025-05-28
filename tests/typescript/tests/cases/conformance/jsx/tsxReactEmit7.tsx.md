__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 401,
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
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 109,
            "end": 130,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 109,
              "end": 124,
              "name": {
                "type": "JSXIdentifier",
                "start": 110,
                "end": 113,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 114,
                  "end": 123,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 114,
                    "end": 117,
                    "name": "x-y"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 118,
                    "end": 123,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 124,
              "end": 130,
              "name": {
                "type": "JSXIdentifier",
                "start": 126,
                "end": 129,
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
      "start": 132,
      "end": 163,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 140,
            "end": 162,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 140,
              "end": 156,
              "name": {
                "type": "JSXIdentifier",
                "start": 141,
                "end": 144,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 145,
                  "end": 155,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 145,
                    "end": 149,
                    "name": "xx-y"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 150,
                    "end": 155,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 156,
              "end": 162,
              "name": {
                "type": "JSXIdentifier",
                "start": 158,
                "end": 161,
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
      "start": 164,
      "end": 195,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 172,
            "end": 194,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 172,
              "end": 188,
              "name": {
                "type": "JSXIdentifier",
                "start": 173,
                "end": 176,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 177,
                  "end": 187,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 177,
                    "end": 181,
                    "name": "x-yy"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 182,
                    "end": 187,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 228,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 227,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 204,
            "end": 227,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 204,
              "end": 221,
              "name": {
                "type": "JSXIdentifier",
                "start": 205,
                "end": 208,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 209,
                  "end": 220,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 209,
                    "end": 214,
                    "name": "xx-yy"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 215,
                    "end": 220,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 275,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 252,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 255,
            "end": 274,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 255,
              "end": 268,
              "name": {
                "type": "JSXIdentifier",
                "start": 256,
                "end": 259,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 260,
                  "end": 267,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 260,
                    "end": 261,
                    "name": "x"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 262,
                    "end": 267,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 268,
              "end": 274,
              "name": {
                "type": "JSXIdentifier",
                "start": 270,
                "end": 273,
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
      "start": 276,
      "end": 305,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 304,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 281,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 284,
            "end": 304,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 284,
              "end": 298,
              "name": {
                "type": "JSXIdentifier",
                "start": 285,
                "end": 288,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 289,
                  "end": 297,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 289,
                    "end": 291,
                    "name": "xx"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 292,
                    "end": 297,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 298,
              "end": 304,
              "name": {
                "type": "JSXIdentifier",
                "start": 300,
                "end": 303,
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
      "start": 306,
      "end": 336,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 314,
            "end": 335,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 314,
              "end": 329,
              "name": {
                "type": "JSXIdentifier",
                "start": 315,
                "end": 318,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 319,
                  "end": 328,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 319,
                    "end": 322,
                    "name": "xxx"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 323,
                    "end": 328,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 329,
              "end": 335,
              "name": {
                "type": "JSXIdentifier",
                "start": 331,
                "end": 334,
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
      "start": 337,
      "end": 368,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 341,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 345,
            "end": 367,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 345,
              "end": 361,
              "name": {
                "type": "JSXIdentifier",
                "start": 346,
                "end": 349,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 350,
                  "end": 360,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 350,
                    "end": 354,
                    "name": "xxxx"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 355,
                    "end": 360,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 369,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 374,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 377,
            "end": 400,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 377,
              "end": 394,
              "name": {
                "type": "JSXIdentifier",
                "start": 378,
                "end": 381,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 382,
                  "end": 393,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 382,
                    "end": 387,
                    "name": "xxxxx"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 388,
                    "end": 393,
                    "value": "val",
                    "raw": "\"val\""
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 394,
              "end": 400,
              "name": {
                "type": "JSXIdentifier",
                "start": 396,
                "end": 399,
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
