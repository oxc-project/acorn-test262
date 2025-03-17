__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 171,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 19,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 38,
        "end": 170,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 41,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 58,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 62,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 64,
            "end": 114,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 91,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 92,
              "end": 114,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 102,
                  "end": 111,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 105,
                    "name": "div",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 107,
                      "end": 110
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
            "start": 119,
            "end": 168,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 154,
              "name": "ElementAttributesProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 155,
              "end": 168,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 157,
                  "end": 166,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 161,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 161,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 163,
                      "end": 166
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
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 451,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "IProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 41,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "name": "primaryText",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 44,
            "end": 79,
            "parameters": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 61,
                "name": "propName",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 79,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 64,
                "end": 79,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 64,
                    "end": 70
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 73,
                    "end": 79
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 111,
        "name": "VerticalNavMenuItem",
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
          "start": 112,
          "end": 124,
          "name": "prop",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 116,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 124,
                "name": "IProps",
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
        "start": 126,
        "end": 167,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 130,
            "end": 165,
            "argument": {
              "type": "JSXElement",
              "start": 137,
              "end": 165,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 137,
                "end": 142,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 138,
                  "end": 141,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 159,
                "end": 165,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 161,
                  "end": 164,
                  "name": "div"
                }
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 142,
                  "end": 159,
                  "value": "props.primaryText",
                  "raw": "props.primaryText"
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
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 450,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 189,
        "name": "VerticalNav",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 450,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 196,
            "end": 448,
            "argument": {
              "type": "JSXElement",
              "start": 209,
              "end": 444,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 209,
                "end": 214,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 210,
                  "end": 213,
                  "name": "div"
                },
                "selfClosing": false,
                "typeArguments": null
              },
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 438,
                "end": 444,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 440,
                  "end": 443,
                  "name": "div"
                }
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 214,
                  "end": 221,
                  "value": "\n      ",
                  "raw": "\n      "
                },
                {
                  "type": "JSXElement",
                  "start": 221,
                  "end": 260,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 221,
                    "end": 260,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 242,
                        "end": 257,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 242,
                          "end": 253,
                          "name": "primaryText"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 254,
                          "end": 257,
                          "expression": {
                            "type": "Literal",
                            "start": 255,
                            "end": 256,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 222,
                      "end": 241,
                      "name": "VerticalNavMenuItem"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                {
                  "type": "JSXText",
                  "start": 260,
                  "end": 277,
                  "value": "  // error\n      ",
                  "raw": "  // error\n      "
                },
                {
                  "type": "JSXElement",
                  "start": 277,
                  "end": 341,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 277,
                    "end": 341,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 298,
                        "end": 316,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 298,
                          "end": 312,
                          "name": "justRandomProp"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 313,
                          "end": 316,
                          "expression": {
                            "type": "Literal",
                            "start": 314,
                            "end": 315,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 317,
                        "end": 338,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 317,
                          "end": 328,
                          "name": "primaryText"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 329,
                          "end": 338,
                          "expression": {
                            "type": "Literal",
                            "start": 330,
                            "end": 337,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 278,
                      "end": 297,
                      "name": "VerticalNavMenuItem"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                {
                  "type": "JSXText",
                  "start": 341,
                  "end": 355,
                  "value": "  // ok\n      ",
                  "raw": "  // ok\n      "
                },
                {
                  "type": "JSXElement",
                  "start": 355,
                  "end": 423,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 355,
                    "end": 423,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "start": 376,
                        "end": 398,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 376,
                          "end": 391,
                          "name": "justRandomProp1"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 392,
                          "end": 398,
                          "expression": {
                            "type": "Literal",
                            "start": 393,
                            "end": 397,
                            "value": true,
                            "raw": "true"
                          }
                        }
                      },
                      {
                        "type": "JSXAttribute",
                        "start": 399,
                        "end": 420,
                        "name": {
                          "type": "JSXIdentifier",
                          "start": 399,
                          "end": 410,
                          "name": "primaryText"
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "start": 411,
                          "end": 420,
                          "expression": {
                            "type": "Literal",
                            "start": 412,
                            "end": 419,
                            "value": "hello",
                            "raw": "\"hello\""
                          }
                        }
                      }
                    ],
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 356,
                      "end": 375,
                      "name": "VerticalNavMenuItem"
                    },
                    "selfClosing": true,
                    "typeArguments": null
                  },
                  "closingElement": null,
                  "children": []
                },
                {
                  "type": "JSXText",
                  "start": 423,
                  "end": 438,
                  "value": "  // error\n    ",
                  "raw": "  // error\n    "
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
