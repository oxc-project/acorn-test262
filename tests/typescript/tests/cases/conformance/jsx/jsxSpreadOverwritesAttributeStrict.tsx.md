__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 517,
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
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 49,
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 50,
        "end": 115,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 56,
            "end": 66,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 81,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 80,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 74,
                "end": 80
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 97,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 113,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
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
      "type": "VariableDeclaration",
      "start": 118,
      "end": 154,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 153,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 136,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 131,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 136,
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 139,
            "end": 153,
            "properties": [
              {
                "type": "Property",
                "start": 141,
                "end": 145,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 144,
                  "end": 145,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 147,
                "end": 151,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 150,
                  "end": 151,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 208,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 164,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 167,
            "end": 207,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 168,
                "end": 180,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 173,
                  "end": 180,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 180,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 180,
                      "decorators": [],
                      "name": "Props",
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
              "type": "JSXElement",
              "start": 185,
              "end": 207,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 185,
                "end": 190,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 186,
                  "end": 189,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 190,
                  "end": 201,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 192,
                    "end": 199,
                    "object": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 197,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "decorators": [],
                      "name": "a",
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
                "start": 201,
                "end": 207,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 203,
                  "end": 206,
                  "name": "div"
                }
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 250,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 227,
            "end": 249,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 227,
              "end": 243,
              "name": {
                "type": "JSXIdentifier",
                "start": 228,
                "end": 231,
                "name": "Foo"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 232,
                  "end": 242,
                  "argument": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 241,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 243,
              "end": 249,
              "name": {
                "type": "JSXIdentifier",
                "start": 245,
                "end": 248,
                "name": "Foo"
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
      "start": 251,
      "end": 291,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 290,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 262,
            "end": 290,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 262,
              "end": 284,
              "name": {
                "type": "JSXIdentifier",
                "start": 263,
                "end": 266,
                "name": "Foo"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 267,
                  "end": 272,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 267,
                    "end": 268,
                    "name": "d"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 269,
                    "end": 272,
                    "expression": {
                      "type": "Literal",
                      "start": 270,
                      "end": 271,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 273,
                  "end": 283,
                  "argument": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 282,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 284,
              "end": 290,
              "name": {
                "type": "JSXIdentifier",
                "start": 286,
                "end": 289,
                "name": "Foo"
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
      "start": 302,
      "end": 342,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 341,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 310,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 313,
            "end": 341,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 313,
              "end": 335,
              "name": {
                "type": "JSXIdentifier",
                "start": 314,
                "end": 317,
                "name": "Foo"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 318,
                  "end": 323,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 318,
                    "end": 319,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 320,
                    "end": 323,
                    "expression": {
                      "type": "Literal",
                      "start": 321,
                      "end": 322,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 324,
                  "end": 334,
                  "argument": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 333,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 335,
              "end": 341,
              "name": {
                "type": "JSXIdentifier",
                "start": 337,
                "end": 340,
                "name": "Foo"
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
      "start": 343,
      "end": 389,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 388,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 354,
            "end": 388,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 354,
              "end": 382,
              "name": {
                "type": "JSXIdentifier",
                "start": 355,
                "end": 358,
                "name": "Foo"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 359,
                  "end": 364,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 359,
                    "end": 360,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 361,
                    "end": 364,
                    "expression": {
                      "type": "Literal",
                      "start": 362,
                      "end": 363,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 365,
                  "end": 370,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 365,
                    "end": 366,
                    "name": "b"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 367,
                    "end": 370,
                    "expression": {
                      "type": "Literal",
                      "start": 368,
                      "end": 369,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 371,
                  "end": 381,
                  "argument": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 380,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 382,
              "end": 388,
              "name": {
                "type": "JSXIdentifier",
                "start": 384,
                "end": 387,
                "name": "Foo"
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
      "start": 390,
      "end": 450,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 398,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 401,
            "end": 449,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 401,
              "end": 443,
              "name": {
                "type": "JSXIdentifier",
                "start": 402,
                "end": 405,
                "name": "Foo"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 406,
                  "end": 411,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 406,
                    "end": 407,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 408,
                    "end": 411,
                    "expression": {
                      "type": "Literal",
                      "start": 409,
                      "end": 410,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 412,
                  "end": 417,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 412,
                    "end": 413,
                    "name": "d"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 414,
                    "end": 417,
                    "expression": {
                      "type": "Literal",
                      "start": 415,
                      "end": 416,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 418,
                  "end": 428,
                  "argument": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 427,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 429,
                  "end": 442,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 433,
                    "end": 441,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 435,
                        "end": 439,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 436,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 438,
                          "end": 439,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 443,
              "end": 449,
              "name": {
                "type": "JSXIdentifier",
                "start": 445,
                "end": 448,
                "name": "Foo"
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
      "start": 451,
      "end": 517,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 459,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 462,
            "end": 516,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 462,
              "end": 510,
              "name": {
                "type": "JSXIdentifier",
                "start": 463,
                "end": 466,
                "name": "Foo"
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 467,
                  "end": 472,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 467,
                    "end": 468,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 469,
                    "end": 472,
                    "expression": {
                      "type": "Literal",
                      "start": 470,
                      "end": 471,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 473,
                  "end": 478,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 473,
                    "end": 474,
                    "name": "d"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 475,
                    "end": 478,
                    "expression": {
                      "type": "Literal",
                      "start": 476,
                      "end": 477,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 479,
                  "end": 489,
                  "argument": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 488,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "start": 490,
                  "end": 509,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 494,
                    "end": 508,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 496,
                        "end": 500,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 496,
                          "end": 497,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 499,
                          "end": 500,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 502,
                        "end": 506,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 502,
                          "end": 503,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 505,
                          "end": 506,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                }
              ],
              "selfClosing": false
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 510,
              "end": 516,
              "name": {
                "type": "JSXIdentifier",
                "start": 512,
                "end": 515,
                "name": "Foo"
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
