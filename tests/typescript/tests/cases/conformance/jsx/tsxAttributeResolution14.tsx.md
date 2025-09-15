__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 89
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 91,
                      "end": 94
                    },
                    "start": 89,
                    "end": 94
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 86,
                  "end": 95
                }
              ],
              "start": 76,
              "end": 98
            },
            "declare": false,
            "start": 48,
            "end": 98
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementAttributesProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 138
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 145
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 147,
                      "end": 150
                    },
                    "start": 145,
                    "end": 150
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 141,
                  "end": 150
                }
              ],
              "start": 139,
              "end": 152
            },
            "declare": false,
            "start": 103,
            "end": 152
          }
        ],
        "start": 22,
        "end": 154
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "primaryText",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 41
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  "start": 53,
                  "end": 61
                },
                "start": 45,
                "end": 61
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 64,
                "end": 79
              },
              "start": 62,
              "end": 79
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 44,
            "end": 79
          }
        ],
        "start": 17,
        "end": 81
      },
      "declare": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VerticalNavMenuItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 111
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 124
              },
              "typeArguments": null,
              "start": 118,
              "end": 124
            },
            "start": 116,
            "end": 124
          },
          "start": 112,
          "end": 124
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 138,
                  "end": 141
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 137,
                "end": 142
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "props.primaryText",
                  "raw": "props.primaryText",
                  "start": 142,
                  "end": 159
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 161,
                  "end": 164
                },
                "start": 159,
                "end": 165
              },
              "start": 137,
              "end": 165
            },
            "start": 130,
            "end": 165
          }
        ],
        "start": 126,
        "end": 167
      },
      "expression": false,
      "start": 83,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VerticalNav",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 189
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 210,
                  "end": 213
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 209,
                "end": 214
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n      ",
                  "raw": "\n      ",
                  "start": 214,
                  "end": 221
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "VerticalNavMenuItem",
                      "start": 222,
                      "end": 241
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "primaryText",
                          "start": 242,
                          "end": 253
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 255,
                            "end": 256
                          },
                          "start": 254,
                          "end": 257
                        },
                        "start": 242,
                        "end": 257
                      }
                    ],
                    "selfClosing": true,
                    "start": 221,
                    "end": 260
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 221,
                  "end": 260
                },
                {
                  "type": "JSXText",
                  "value": "  // error\n      ",
                  "raw": "  // error\n      ",
                  "start": 260,
                  "end": 277
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "VerticalNavMenuItem",
                      "start": 278,
                      "end": 297
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "justRandomProp",
                          "start": 298,
                          "end": 312
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 314,
                            "end": 315
                          },
                          "start": 313,
                          "end": 316
                        },
                        "start": 298,
                        "end": 316
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "primaryText",
                          "start": 317,
                          "end": 328
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 330,
                            "end": 337
                          },
                          "start": 329,
                          "end": 338
                        },
                        "start": 317,
                        "end": 338
                      }
                    ],
                    "selfClosing": true,
                    "start": 277,
                    "end": 341
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 277,
                  "end": 341
                },
                {
                  "type": "JSXText",
                  "value": "  // ok\n      ",
                  "raw": "  // ok\n      ",
                  "start": 341,
                  "end": 355
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "VerticalNavMenuItem",
                      "start": 356,
                      "end": 375
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "justRandomProp1",
                          "start": 376,
                          "end": 391
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 393,
                            "end": 397
                          },
                          "start": 392,
                          "end": 398
                        },
                        "start": 376,
                        "end": 398
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "primaryText",
                          "start": 399,
                          "end": 410
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "\"hello\"",
                            "start": 412,
                            "end": 419
                          },
                          "start": 411,
                          "end": 420
                        },
                        "start": 399,
                        "end": 420
                      }
                    ],
                    "selfClosing": true,
                    "start": 355,
                    "end": 423
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 355,
                  "end": 423
                },
                {
                  "type": "JSXText",
                  "value": "  // error\n    ",
                  "raw": "  // error\n    ",
                  "start": 423,
                  "end": 438
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 440,
                  "end": 443
                },
                "start": 438,
                "end": 444
              },
              "start": 209,
              "end": 444
            },
            "start": 196,
            "end": 448
          }
        ],
        "start": 192,
        "end": 450
      },
      "expression": false,
      "start": 169,
      "end": 450
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 451
}
```
