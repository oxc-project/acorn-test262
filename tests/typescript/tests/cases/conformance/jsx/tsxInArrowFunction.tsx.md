__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 363,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 143,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 45,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 46,
              "end": 49,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 54,
            "end": 141,
            "id": {
              "type": "Identifier",
              "start": 64,
              "end": 81,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 82,
              "end": 141,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 92,
                  "end": 135,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 95,
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 135,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 97,
                      "end": 135,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 111,
                          "end": 125,
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 111,
                            "end": 115,
                            "decorators": [],
                            "name": "text",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 116,
                            "end": 124,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 118,
                              "end": 124
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
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 199,
      "expression": {
        "type": "JSXElement",
        "start": 161,
        "end": 198,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 161,
          "end": 166,
          "name": {
            "type": "JSXIdentifier",
            "start": 162,
            "end": 165,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "start": 166,
            "end": 192,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 167,
              "end": 191,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "start": 173,
                "end": 191,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 173,
                  "end": 191,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 174,
                    "end": 177,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 178,
                      "end": 188,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 178,
                        "end": 182,
                        "name": "text"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 183,
                        "end": 188,
                        "value": "wat",
                        "raw": "\"wat\""
                      }
                    }
                  ],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              "id": null,
              "generator": false
            }
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 192,
          "end": 198,
          "name": {
            "type": "JSXIdentifier",
            "start": 194,
            "end": 197,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 216,
      "end": 253,
      "expression": {
        "type": "JSXElement",
        "start": 216,
        "end": 252,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 216,
          "end": 221,
          "name": {
            "type": "JSXIdentifier",
            "start": 217,
            "end": 220,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "start": 221,
            "end": 246,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 222,
              "end": 245,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "start": 227,
                "end": 245,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 227,
                  "end": 245,
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
                      "end": 242,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 232,
                        "end": 236,
                        "name": "text"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 237,
                        "end": 242,
                        "value": "wat",
                        "raw": "\"wat\""
                      }
                    }
                  ],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              "id": null,
              "generator": false
            }
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 246,
          "end": 252,
          "name": {
            "type": "JSXIdentifier",
            "start": 248,
            "end": 251,
            "name": "div"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 305,
      "expression": {
        "type": "JSXElement",
        "start": 265,
        "end": 304,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 265,
          "end": 270,
          "name": {
            "type": "JSXIdentifier",
            "start": 266,
            "end": 269,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "start": 270,
            "end": 298,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 271,
              "end": 297,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "start": 278,
                "end": 296,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 278,
                  "end": 296,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 279,
                    "end": 282,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 283,
                      "end": 293,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 283,
                        "end": 287,
                        "name": "text"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 288,
                        "end": 293,
                        "value": "wat",
                        "raw": "\"wat\""
                      }
                    }
                  ],
                  "selfClosing": true
                },
                "children": [],
                "closingElement": null
              },
              "id": null,
              "generator": false
            }
          }
        ],
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 363,
      "expression": {
        "type": "JSXElement",
        "start": 321,
        "end": 362,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 321,
          "end": 326,
          "name": {
            "type": "JSXIdentifier",
            "start": 322,
            "end": 325,
            "name": "div"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false
        },
        "children": [
          {
            "type": "JSXExpressionContainer",
            "start": 326,
            "end": 356,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 327,
              "end": 355,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "JSXElement",
                "start": 333,
                "end": 355,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 333,
                  "end": 349,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 334,
                    "end": 337,
                    "name": "div"
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "start": 338,
                      "end": 348,
                      "name": {
                        "type": "JSXIdentifier",
                        "start": 338,
                        "end": 342,
                        "name": "text"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 343,
                        "end": 348,
                        "value": "wat",
                        "raw": "\"wat\""
                      }
                    }
                  ],
                  "selfClosing": false
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "start": 349,
                  "end": 355,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 351,
                    "end": 354,
                    "name": "div"
                  }
                }
              },
              "id": null,
              "generator": false
            }
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "start": 356,
          "end": 362,
          "name": {
            "type": "JSXIdentifier",
            "start": 358,
            "end": 361,
            "name": "div"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
