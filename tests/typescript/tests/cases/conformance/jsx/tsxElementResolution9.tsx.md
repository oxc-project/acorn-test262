__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 519,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 89,
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
        "end": 89,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 22,
            "end": 54,
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
              "end": 54,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 52,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 51,
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 56,
            "end": 87,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 83,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 84,
              "end": 87,
              "body": []
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
      "type": "TSInterfaceDeclaration",
      "start": 91,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 105,
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 106,
        "end": 173,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 109,
            "end": 139,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 113,
                "end": 122,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 122,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 116,
                    "end": 122
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 125,
                "end": 138,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 127,
                    "end": 136,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 128,
                      "end": 136,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 130,
                        "end": 136
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 141,
            "end": 171,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 154,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 146,
                  "end": 154,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 148,
                    "end": 154
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 170,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 157,
                "end": 170,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 159,
                    "end": 168,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 160,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 162,
                        "end": 168
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 189,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 188,
            "decorators": [],
            "name": "Obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 184,
                "end": 188,
                "typeName": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 188,
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 190,
      "end": 199,
      "expression": {
        "type": "JSXElement",
        "start": 190,
        "end": 198,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 190,
          "end": 198,
          "name": {
            "type": "JSXIdentifier",
            "start": 191,
            "end": 195,
            "name": "Obj1"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 245,
      "end": 321,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 259,
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 260,
        "end": 321,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 263,
            "end": 290,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 264,
                "end": 273,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 265,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 267,
                    "end": 273
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 289,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 276,
                "end": 289,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 278,
                    "end": 287,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 279,
                      "end": 287,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 281,
                        "end": 287
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 292,
            "end": 319,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 293,
                "end": 302,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 294,
                  "end": 302,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 305,
                "end": 318,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 307,
                    "end": 316,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 307,
                      "end": 308,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 308,
                      "end": 316,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 310,
                        "end": 316
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 337,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 336,
            "decorators": [],
            "name": "Obj2",
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
                  "name": "Obj2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 338,
      "end": 347,
      "expression": {
        "type": "JSXElement",
        "start": 338,
        "end": 346,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 338,
          "end": 346,
          "name": {
            "type": "JSXIdentifier",
            "start": 339,
            "end": 343,
            "name": "Obj2"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 393,
      "end": 480,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 407,
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 408,
        "end": 480,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 411,
            "end": 438,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 412,
                "end": 421,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 413,
                  "end": 421,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 437,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 424,
                "end": 437,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 426,
                    "end": 435,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 427,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 427,
                      "end": 435,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 429,
                        "end": 435
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 440,
            "end": 478,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 441,
                "end": 450,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 442,
                  "end": 450,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 444,
                    "end": 450
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 451,
              "end": 477,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 453,
                "end": 477,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 455,
                    "end": 465,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 456,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 456,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 458,
                        "end": 464
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 466,
                    "end": 475,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 467,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 467,
                      "end": 475,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 469,
                        "end": 475
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 481,
      "end": 496,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 495,
            "decorators": [],
            "name": "Obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 489,
              "end": 495,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 491,
                "end": 495,
                "typeName": {
                  "type": "Identifier",
                  "start": 491,
                  "end": 495,
                  "decorators": [],
                  "name": "Obj3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 497,
      "end": 513,
      "expression": {
        "type": "JSXElement",
        "start": 497,
        "end": 512,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 497,
          "end": 512,
          "name": {
            "type": "JSXIdentifier",
            "start": 498,
            "end": 502,
            "name": "Obj3"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 503,
              "end": 509,
              "name": {
                "type": "JSXIdentifier",
                "start": 503,
                "end": 504,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 505,
                "end": 509,
                "expression": {
                  "type": "Literal",
                  "start": 506,
                  "end": 508,
                  "value": 42,
                  "raw": "42"
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
