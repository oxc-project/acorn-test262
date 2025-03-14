file.tsx
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
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 99,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 43,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 45,
            "end": 97,
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
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 72,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 122,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 136,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 136,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 133,
                "end": 136
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 145,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 145,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 142,
                "end": 145
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 154,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 154,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 151,
                "end": 154
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 168,
            "decorators": [],
            "name": "spreads1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 171,
            "end": 194,
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 184,
                "end": 188,
                "expression": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 187,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                }
              }
            ],
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
                    "decorators": [],
                    "name": "p1",
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
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 208,
            "decorators": [],
            "name": "spreads2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 211,
            "end": 234,
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 224,
                "end": 228,
                "expression": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 227,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                }
              }
            ],
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
                    "decorators": [],
                    "name": "p1",
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
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 248,
            "decorators": [],
            "name": "spreads3",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 251,
            "end": 281,
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 271,
                "end": 275,
                "expression": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 274,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                }
              }
            ],
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
                      "decorators": [],
                      "name": "p3",
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
                    "decorators": [],
                    "name": "p1",
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
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 295,
            "decorators": [],
            "name": "spreads4",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 298,
            "end": 329,
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 319,
                "end": 323,
                "expression": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 322,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                }
              }
            ],
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
                    "decorators": [],
                    "name": "p1",
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
                      "decorators": [],
                      "name": "p3",
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
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 343,
            "decorators": [],
            "name": "spreads5",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 346,
            "end": 383,
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 373,
                "end": 377,
                "expression": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 376,
                  "decorators": [],
                  "name": "p2",
                  "optional": false
                }
              }
            ],
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
                      "decorators": [],
                      "name": "p2",
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
                    "decorators": [],
                    "name": "p1",
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
                      "decorators": [],
                      "name": "p3",
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
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
