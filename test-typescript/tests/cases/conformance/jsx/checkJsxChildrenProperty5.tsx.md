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
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "name": "Prop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 70,
            "end": 80,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 85,
            "end": 102,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 93,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "Button",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "ClassDeclaration",
      "start": 106,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 118,
        "name": "Button",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 127,
        "end": 142,
        "object": {
          "type": "Identifier",
          "start": 127,
          "end": 132,
          "name": "React",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 133,
          "end": 142,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 153,
        "end": 215,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 213,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 165,
              "name": "render",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 165,
              "end": 213,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "selfClosing": false,
                        "typeArguments": null
                      },
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
                      "children": [
                        {
                          "type": "JSXText",
                          "start": 191,
                          "end": 200,
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
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 230,
        "name": "Comp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 231,
          "end": 238,
          "name": "p",
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
                "name": "Prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "selfClosing": false,
                "typeArguments": null
              },
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
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "start": 258,
                  "end": 263,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 259,
                    "end": 262,
                    "object": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
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
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 310,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 314,
            "end": 336,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 315,
                "end": 319,
                "name": "Comp"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "name": "k1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 410,
            "end": 461,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 411,
                "end": 415,
                "name": "Comp"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 430,
                "end": 439,
                "value": "\n        ",
                "raw": "\n        "
              },
              {
                "type": "JSXElement",
                "start": 439,
                "end": 449,
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
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              {
                "type": "JSXText",
                "start": 449,
                "end": 454,
                "value": "\n    ",
                "raw": "\n    "
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
      "start": 463,
      "end": 526,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 525,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 469,
            "name": "k2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 476,
            "end": 525,
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
                      "value": 10,
                      "raw": "10"
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
                    "value": "hi",
                    "raw": "\"hi\""
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 477,
                "end": 481,
                "name": "Comp"
              },
              "selfClosing": false,
              "typeArguments": null
            },
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
            "children": [
              {
                "type": "JSXText",
                "start": 496,
                "end": 505,
                "value": "\n        ",
                "raw": "\n        "
              },
              {
                "type": "JSXExpressionContainer",
                "start": 505,
                "end": 513,
                "expression": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 512,
                  "name": "Button",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "JSXText",
                "start": 513,
                "end": 518,
                "value": "\n    ",
                "raw": "\n    "
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
