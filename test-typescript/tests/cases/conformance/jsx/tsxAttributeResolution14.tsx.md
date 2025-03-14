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
      "body": {
        "type": "TSModuleBlock",
        "start": 38,
        "end": 170,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 41,
            "end": 62,
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 62,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 58,
              "decorators": [],
              "name": "Element",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 64,
            "end": 114,
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
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 105,
                    "decorators": [],
                    "name": "div",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 107,
                      "end": 110
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 91,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 119,
            "end": 168,
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
                  "key": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 161,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 161,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 163,
                      "end": 166
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 154,
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "JSX",
        "optional": false
      },
      "kind": "module"
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
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "decorators": [],
              "name": "primaryText",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
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
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "IProps",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 167,
      "async": false,
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 142,
                  "end": 159,
                  "raw": "props.primaryText",
                  "value": "props.primaryText"
                }
              ],
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
        "start": 92,
        "end": 111,
        "decorators": [],
        "name": "VerticalNavMenuItem",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 112,
          "end": 124,
          "decorators": [],
          "name": "prop",
          "optional": false,
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
                "decorators": [],
                "name": "IProps",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 450,
      "async": false,
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
              "children": [
                {
                  "type": "JSXText",
                  "start": 214,
                  "end": 221,
                  "raw": "\n      ",
                  "value": "\n      "
                },
                {
                  "type": "JSXElement",
                  "start": 221,
                  "end": 260,
                  "children": [],
                  "closingElement": null,
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
                            "raw": "2",
                            "value": 2
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
                    "selfClosing": true
                  }
                },
                {
                  "type": "JSXText",
                  "start": 260,
                  "end": 277,
                  "raw": "  // error\n      ",
                  "value": "  // error\n      "
                },
                {
                  "type": "JSXElement",
                  "start": 277,
                  "end": 341,
                  "children": [],
                  "closingElement": null,
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
                            "raw": "2",
                            "value": 2
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
                            "raw": "\"hello\"",
                            "value": "hello"
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
                    "selfClosing": true
                  }
                },
                {
                  "type": "JSXText",
                  "start": 341,
                  "end": 355,
                  "raw": "  // ok\n      ",
                  "value": "  // ok\n      "
                },
                {
                  "type": "JSXElement",
                  "start": 355,
                  "end": 423,
                  "children": [],
                  "closingElement": null,
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
                            "raw": "true",
                            "value": true
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
                            "raw": "\"hello\"",
                            "value": "hello"
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
                    "selfClosing": true
                  }
                },
                {
                  "type": "JSXText",
                  "start": 423,
                  "end": 438,
                  "raw": "  // error\n    ",
                  "value": "  // error\n    "
                }
              ],
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
        "start": 178,
        "end": 189,
        "decorators": [],
        "name": "VerticalNav",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
