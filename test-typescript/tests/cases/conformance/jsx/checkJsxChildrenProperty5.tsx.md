__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 526,
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "'react'",
          "value": "react"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 104,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 104,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 65,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 102,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "decorators": [],
              "name": "children",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 101,
                  "decorators": [],
                  "name": "Button",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Prop",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 106,
      "end": 215,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 153,
        "end": 215,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 213,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 165,
              "decorators": [],
              "name": "render",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 168,
                "end": 213,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 178,
                    "end": 207,
                    "argument": {
                      "type": "JSXElement",
                      "start": 186,
                      "end": 206,
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 191,
                          "end": 200,
                          "raw": "My Button",
                          "value": "My Button"
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "start": 200,
                        "end": 206,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 202,
                          "end": 205,
                          "name": "div"
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "start": 186,
                        "end": 191,
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 187,
                          "end": 190,
                          "name": "div"
                        },
                        "selfClosing": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 118,
        "decorators": [],
        "name": "Button",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 127,
        "end": 142,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 127,
          "end": 132,
          "decorators": [],
          "name": "React",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 133,
          "end": 142,
          "decorators": [],
          "name": "Component",
          "optional": false
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 142,
        "end": 152,
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 143,
            "end": 146
          },
          {
            "type": "TSAnyKeyword",
            "start": 148,
            "end": 151
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 217,
      "end": 272,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 272,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 246,
            "end": 270,
            "argument": {
              "type": "JSXElement",
              "start": 253,
              "end": 269,
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 258,
                  "end": 263,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 259,
                    "end": 262,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "p",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 263,
                "end": 269,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 265,
                  "end": 268,
                  "name": "div"
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 253,
                "end": 258,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 254,
                  "end": 257,
                  "name": "div"
                },
                "selfClosing": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 230,
        "decorators": [],
        "name": "Comp",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 231,
          "end": 238,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 232,
            "end": 238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 234,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 234,
                "end": 238,
                "decorators": [],
                "name": "Prop",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 314,
            "end": 336,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 314,
              "end": 336,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 320,
                  "end": 326,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 320,
                    "end": 321,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 322,
                    "end": 326,
                    "expression": {
                      "type": "Literal",
                      "start": 323,
                      "end": 325,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 327,
                  "end": 333,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 327,
                    "end": 328,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 329,
                    "end": 333,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 315,
                "end": 319,
                "name": "Comp"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 461,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "decorators": [],
            "name": "k1",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 410,
            "end": 461,
            "children": [
              {
                "type": "JSXText",
                "start": 430,
                "end": 439,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 439,
                "end": 449,
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 439,
                  "end": 449,
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 440,
                    "end": 446,
                    "name": "Button"
                  },
                  "selfClosing": true
                }
              },
              {
                "type": "JSXText",
                "start": 449,
                "end": 454,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 454,
              "end": 461,
              "name": {
                "type": "JSXIdentifier",
                "start": 456,
                "end": 460,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 410,
              "end": 430,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 416,
                  "end": 422,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 416,
                    "end": 417,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 418,
                    "end": 422,
                    "expression": {
                      "type": "Literal",
                      "start": 419,
                      "end": 421,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 423,
                  "end": 429,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 423,
                    "end": 424,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 425,
                    "end": 429,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 411,
                "end": 415,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 463,
      "end": 526,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 525,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 469,
            "decorators": [],
            "name": "k2",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 476,
            "end": 525,
            "children": [
              {
                "type": "JSXText",
                "start": 496,
                "end": 505,
                "raw": "\n        ",
                "value": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 505,
                "end": 513,
                "expression": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 512,
                  "decorators": [],
                  "name": "Button",
                  "optional": false
                }
              },
              {
                "type": "JSXText",
                "start": 513,
                "end": 518,
                "raw": "\n    ",
                "value": "\n    "
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 518,
              "end": 525,
              "name": {
                "type": "JSXIdentifier",
                "start": 520,
                "end": 524,
                "name": "Comp"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 476,
              "end": 496,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 482,
                  "end": 488,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 482,
                    "end": 483,
                    "name": "a"
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "start": 484,
                    "end": 488,
                    "expression": {
                      "type": "Literal",
                      "start": 485,
                      "end": 487,
                      "raw": "10",
                      "value": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 489,
                  "end": 495,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 489,
                    "end": 490,
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 491,
                    "end": 495,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 477,
                "end": 481,
                "name": "Comp"
              },
              "selfClosing": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
