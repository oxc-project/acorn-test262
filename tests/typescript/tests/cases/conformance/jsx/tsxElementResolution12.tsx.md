__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 656,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 128,
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
        "end": 128,
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
            "end": 93,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 80,
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 81,
              "end": 93,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 83,
                  "end": 91,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 85,
                    "decorators": [],
                    "name": "pr",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 87,
                      "end": 90
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
            "start": 95,
            "end": 126,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 122,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 123,
              "end": 126,
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
      "start": 130,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 148,
        "decorators": [],
        "name": "Obj1type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 149,
        "end": 174,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 152,
            "end": 172,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 156,
                "end": 165,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 165,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 159,
                    "end": 165
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 171,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 168,
                "end": 171
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 194,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 193,
            "decorators": [],
            "name": "Obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 193,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 193,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 193,
                  "decorators": [],
                  "name": "Obj1type",
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
      "start": 195,
      "end": 211,
      "expression": {
        "type": "JSXElement",
        "start": 195,
        "end": 210,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 195,
          "end": 210,
          "name": {
            "type": "JSXIdentifier",
            "start": 196,
            "end": 200,
            "name": "Obj1"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 201,
              "end": 207,
              "name": {
                "type": "JSXIdentifier",
                "start": 201,
                "end": 202,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 203,
                "end": 207,
                "expression": {
                  "type": "Literal",
                  "start": 204,
                  "end": 206,
                  "value": 10,
                  "raw": "10"
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 219,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 237,
        "decorators": [],
        "name": "Obj2type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 238,
        "end": 283,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 241,
            "end": 281,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 245,
                "end": 254,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 246,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 248,
                    "end": 254
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 280,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 257,
                "end": 280,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 259,
                    "end": 270,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "q",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 261,
                      "end": 269,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 263,
                        "end": 269
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 271,
                    "end": 278,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 273,
                      "decorators": [],
                      "name": "pr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 273,
                      "end": 278,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 275,
                        "end": 278
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
      "start": 284,
      "end": 303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 302,
            "decorators": [],
            "name": "Obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 294,
                "end": 302,
                "typeName": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 302,
                  "decorators": [],
                  "name": "Obj2type",
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
      "start": 304,
      "end": 320,
      "expression": {
        "type": "JSXElement",
        "start": 304,
        "end": 319,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 304,
          "end": 319,
          "name": {
            "type": "JSXIdentifier",
            "start": 305,
            "end": 309,
            "name": "Obj2"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 310,
              "end": 316,
              "name": {
                "type": "JSXIdentifier",
                "start": 310,
                "end": 311,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 312,
                "end": 316,
                "expression": {
                  "type": "Literal",
                  "start": 313,
                  "end": 315,
                  "value": 10,
                  "raw": "10"
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 328,
      "end": 383,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 346,
        "decorators": [],
        "name": "Obj3type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 347,
        "end": 383,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 350,
            "end": 381,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 354,
                "end": 363,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 355,
                  "end": 363,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 357,
                    "end": 363
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 366,
                "end": 380,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 368,
                    "end": 378,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 369,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 369,
                      "end": 377,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 371,
                        "end": 377
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
      "start": 384,
      "end": 403,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 402,
            "decorators": [],
            "name": "Obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 392,
              "end": 402,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 394,
                "end": 402,
                "typeName": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 402,
                  "decorators": [],
                  "name": "Obj3type",
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
      "start": 404,
      "end": 420,
      "expression": {
        "type": "JSXElement",
        "start": 404,
        "end": 419,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 404,
          "end": 419,
          "name": {
            "type": "JSXIdentifier",
            "start": 405,
            "end": 409,
            "name": "Obj3"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 410,
              "end": 416,
              "name": {
                "type": "JSXIdentifier",
                "start": 410,
                "end": 411,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 412,
                "end": 416,
                "expression": {
                  "type": "Literal",
                  "start": 413,
                  "end": 415,
                  "value": 10,
                  "raw": "10"
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
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 450,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 449,
            "decorators": [],
            "name": "attributes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 449,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 446,
                "end": 449
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
      "start": 451,
      "end": 476,
      "expression": {
        "type": "JSXElement",
        "start": 451,
        "end": 475,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 451,
          "end": 475,
          "name": {
            "type": "JSXIdentifier",
            "start": 452,
            "end": 456,
            "name": "Obj3"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 457,
              "end": 472,
              "argument": {
                "type": "Identifier",
                "start": 461,
                "end": 471,
                "decorators": [],
                "name": "attributes",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 486,
      "end": 503,
      "expression": {
        "type": "JSXElement",
        "start": 486,
        "end": 502,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 486,
          "end": 502,
          "name": {
            "type": "JSXIdentifier",
            "start": 487,
            "end": 491,
            "name": "Obj3"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "start": 492,
              "end": 499,
              "argument": {
                "type": "ObjectExpression",
                "start": 496,
                "end": 498,
                "properties": []
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 511,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 521,
        "end": 529,
        "decorators": [],
        "name": "Obj4type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 530,
        "end": 585,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 533,
            "end": 583,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 537,
                "end": 546,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 538,
                  "end": 546,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 540,
                    "end": 546
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 547,
              "end": 582,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 549,
                "end": 582,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 551,
                    "end": 561,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 552,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 552,
                      "end": 560,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 554,
                        "end": 560
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 562,
                    "end": 580,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 562,
                      "end": 564,
                      "decorators": [],
                      "name": "pr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 564,
                      "end": 580,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 566,
                        "end": 580,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 568,
                            "end": 578,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 568,
                              "end": 569,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 569,
                              "end": 577,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 571,
                                "end": 577
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
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
      "start": 586,
      "end": 605,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 604,
            "decorators": [],
            "name": "Obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 604,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 596,
                "end": 604,
                "typeName": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 604,
                  "decorators": [],
                  "name": "Obj4type",
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
      "start": 606,
      "end": 622,
      "expression": {
        "type": "JSXElement",
        "start": 606,
        "end": 621,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 606,
          "end": 621,
          "name": {
            "type": "JSXIdentifier",
            "start": 607,
            "end": 611,
            "name": "Obj4"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 612,
              "end": 618,
              "name": {
                "type": "JSXIdentifier",
                "start": 612,
                "end": 613,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 614,
                "end": 618,
                "expression": {
                  "type": "Literal",
                  "start": 615,
                  "end": 617,
                  "value": 10,
                  "raw": "10"
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
    },
    {
      "type": "ExpressionStatement",
      "start": 629,
      "end": 647,
      "expression": {
        "type": "JSXElement",
        "start": 629,
        "end": 646,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 629,
          "end": 646,
          "name": {
            "type": "JSXIdentifier",
            "start": 630,
            "end": 634,
            "name": "Obj4"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 635,
              "end": 643,
              "name": {
                "type": "JSXIdentifier",
                "start": 635,
                "end": 636,
                "name": "x"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 637,
                "end": 643,
                "expression": {
                  "type": "Literal",
                  "start": 638,
                  "end": 642,
                  "value": "10",
                  "raw": "'10'"
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
