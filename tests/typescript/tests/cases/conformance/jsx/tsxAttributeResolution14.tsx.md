__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 18,
    "end": 21,
    "range": [
      18,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34,
    "range": [
      25,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 35,
    "end": 42,
    "range": [
      35,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57,
    "range": [
      48,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 58,
    "end": 75,
    "range": [
      58,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 86,
    "end": 89,
    "range": [
      86,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 103,
    "end": 112,
    "range": [
      103,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 113,
    "end": 138,
    "range": [
      113,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 141,
    "end": 145,
    "range": [
      141,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 147,
    "end": 150,
    "range": [
      147,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  }
]
```
__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "IProps",
    "start": 10,
    "end": 16,
    "range": [
      10,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "primaryText",
    "start": 21,
    "end": 32,
    "range": [
      21,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "propName",
    "start": 45,
    "end": 53,
    "range": [
      45,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 55,
    "end": 61,
    "range": [
      55,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79,
    "range": [
      73,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 83,
    "end": 91,
    "range": [
      83,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "VerticalNavMenuItem",
    "start": 92,
    "end": 111,
    "range": [
      92,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 112,
    "end": 116,
    "range": [
      112,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "IProps",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 130,
    "end": 136,
    "range": [
      130,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 138,
    "end": 141,
    "range": [
      138,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "JSXText",
    "value": "props.primaryText",
    "start": 142,
    "end": 159,
    "range": [
      142,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 169,
    "end": 177,
    "range": [
      169,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "VerticalNav",
    "start": 178,
    "end": 189,
    "range": [
      178,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 210,
    "end": 213,
    "range": [
      210,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "JSXText",
    "value": "\n      ",
    "start": 214,
    "end": 221,
    "range": [
      214,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "VerticalNavMenuItem",
    "start": 222,
    "end": 241,
    "range": [
      222,
      241
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "primaryText",
    "start": 242,
    "end": 253,
    "range": [
      242,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "JSXText",
    "value": "  // error\n      ",
    "start": 260,
    "end": 277,
    "range": [
      260,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "VerticalNavMenuItem",
    "start": 278,
    "end": 297,
    "range": [
      278,
      297
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "justRandomProp",
    "start": 298,
    "end": 312,
    "range": [
      298,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "primaryText",
    "start": 317,
    "end": 328,
    "range": [
      317,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 330,
    "end": 337,
    "range": [
      330,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "JSXText",
    "value": "  // ok\n      ",
    "start": 341,
    "end": 355,
    "range": [
      341,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "VerticalNavMenuItem",
    "start": 356,
    "end": 375,
    "range": [
      356,
      375
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "justRandomProp1",
    "start": 376,
    "end": 391,
    "range": [
      376,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 393,
    "end": 397,
    "range": [
      393,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "primaryText",
    "start": 399,
    "end": 410,
    "range": [
      399,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 412,
    "end": 419,
    "range": [
      412,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "JSXText",
    "value": "  // error\n    ",
    "start": 423,
    "end": 438,
    "range": [
      423,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 440,
    "end": 443,
    "range": [
      440,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  }
]
```
