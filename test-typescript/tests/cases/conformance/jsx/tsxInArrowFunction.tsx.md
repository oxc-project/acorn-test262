__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 364,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "div",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                            "name": "text",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 162,
            "end": 165,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        },
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
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "JSXElement",
                "start": 173,
                "end": 191,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 173,
                  "end": 191,
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
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 174,
                    "end": 177,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
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
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 217,
            "end": 220,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        },
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
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "JSXElement",
                "start": 227,
                "end": 245,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 227,
                  "end": 245,
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
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 228,
                    "end": 231,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
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
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 266,
            "end": 269,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        },
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
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "JSXElement",
                "start": 278,
                "end": 296,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 278,
                  "end": 296,
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
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 279,
                    "end": 282,
                    "name": "div"
                  },
                  "selfClosing": true,
                  "typeArguments": null
                },
                "closingElement": null,
                "children": []
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
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
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 322,
            "end": 325,
            "name": "div"
          },
          "selfClosing": false,
          "typeArguments": null
        },
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
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "JSXElement",
                "start": 333,
                "end": 355,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "start": 333,
                  "end": 349,
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
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 334,
                    "end": 337,
                    "name": "div"
                  },
                  "selfClosing": false,
                  "typeArguments": null
                },
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
                },
                "children": []
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
