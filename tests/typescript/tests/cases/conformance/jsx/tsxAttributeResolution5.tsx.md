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
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attribs1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 95
                    },
                    "start": 85,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 96
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 104
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attribs2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 114
                      },
                      "typeArguments": null,
                      "start": 106,
                      "end": 114
                    },
                    "start": 104,
                    "end": 114
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 99,
                  "end": 115
                }
              ],
              "start": 76,
              "end": 118
            },
            "declare": false,
            "start": 48,
            "end": 118
          }
        ],
        "start": 22,
        "end": 120
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 120
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 139
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 144
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "accessibility": null,
            "static": false,
            "start": 143,
            "end": 153
          }
        ],
        "start": 140,
        "end": 155
      },
      "declare": false,
      "start": 121,
      "end": 155
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs2",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 175
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 187
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 191,
                "end": 197
              },
              "start": 189,
              "end": 197
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 179,
            "end": 198
          }
        ],
        "start": 176,
        "end": 200
      },
      "declare": false,
      "start": 157,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make1",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 216
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 231,
                      "end": 237
                    },
                    "start": 229,
                    "end": 237
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 228,
                  "end": 237
                }
              ],
              "start": 227,
              "end": 238
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 217,
            "end": 238
          }
        ],
        "start": 216,
        "end": 239
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 247
              },
              "typeArguments": null,
              "start": 246,
              "end": 247
            },
            "start": 244,
            "end": 247
          },
          "start": 241,
          "end": 247
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
                  "name": "test1",
                  "start": 260,
                  "end": 265
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 273
                    },
                    "start": 266,
                    "end": 274
                  }
                ],
                "selfClosing": true,
                "start": 259,
                "end": 277
              },
              "children": [],
              "closingElement": null,
              "start": 259,
              "end": 277
            },
            "start": 252,
            "end": 278
          }
        ],
        "start": 249,
        "end": 286
      },
      "expression": false,
      "start": 202,
      "end": 286
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make2",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 302
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 315
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 317,
                      "end": 323
                    },
                    "start": 315,
                    "end": 323
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 314,
                  "end": 323
                }
              ],
              "start": 313,
              "end": 324
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 303,
            "end": 324
          }
        ],
        "start": 302,
        "end": 325
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 333
              },
              "typeArguments": null,
              "start": 332,
              "end": 333
            },
            "start": 330,
            "end": 333
          },
          "start": 327,
          "end": 333
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
                  "name": "test1",
                  "start": 346,
                  "end": 351
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 359
                    },
                    "start": 352,
                    "end": 360
                  }
                ],
                "selfClosing": true,
                "start": 345,
                "end": 363
              },
              "children": [],
              "closingElement": null,
              "start": 345,
              "end": 363
            },
            "start": 338,
            "end": 364
          }
        ],
        "start": 335,
        "end": 401
      },
      "expression": false,
      "start": 288,
      "end": 401
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make3",
        "optional": false,
        "typeAnnotation": null,
        "start": 412,
        "end": 417
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 419
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 430
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 432,
                      "end": 438
                    },
                    "start": 430,
                    "end": 438
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 429,
                  "end": 438
                }
              ],
              "start": 428,
              "end": 439
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 418,
            "end": 439
          }
        ],
        "start": 417,
        "end": 440
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 448
              },
              "typeArguments": null,
              "start": 447,
              "end": 448
            },
            "start": 445,
            "end": 448
          },
          "start": 442,
          "end": 448
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
                  "name": "test1",
                  "start": 461,
                  "end": 466
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 474
                    },
                    "start": 467,
                    "end": 475
                  }
                ],
                "selfClosing": true,
                "start": 460,
                "end": 478
              },
              "children": [],
              "closingElement": null,
              "start": 460,
              "end": 478
            },
            "start": 453,
            "end": 479
          }
        ],
        "start": 450,
        "end": 501
      },
      "expression": false,
      "start": 403,
      "end": 501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 505,
            "end": 510
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 515,
                "end": 517
              },
              "start": 511,
              "end": 518
            }
          ],
          "selfClosing": true,
          "start": 504,
          "end": 521
        },
        "children": [],
        "closingElement": null,
        "start": 504,
        "end": 521
      },
      "directive": null,
      "start": 504,
      "end": 522
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 544,
            "end": 549
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 554,
                "end": 556
              },
              "start": 550,
              "end": 557
            }
          ],
          "selfClosing": true,
          "start": 543,
          "end": 560
        },
        "children": [],
        "closingElement": null,
        "start": 543,
        "end": 560
      },
      "directive": null,
      "start": 543,
      "end": 561
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 588
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
    "value": "test1",
    "start": 80,
    "end": 85,
    "range": [
      80,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "Attribs1",
    "start": 87,
    "end": 95,
    "range": [
      87,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 99,
    "end": 104,
    "range": [
      99,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "Attribs2",
    "start": 106,
    "end": 114,
    "range": [
      106,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 121,
    "end": 130,
    "range": [
      121,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "Attribs1",
    "start": 131,
    "end": 139,
    "range": [
      131,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 146,
    "end": 152,
    "range": [
      146,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 157,
    "end": 166,
    "range": [
      157,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "Attribs2",
    "start": 167,
    "end": 175,
    "range": [
      167,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 179,
    "end": 187,
    "range": [
      179,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 191,
    "end": 197,
    "range": [
      191,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 202,
    "end": 210,
    "range": [
      202,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "make1",
    "start": 211,
    "end": 216,
    "range": [
      211,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 219,
    "end": 226,
    "range": [
      219,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 241,
    "end": 244,
    "range": [
      241,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 252,
    "end": 258,
    "range": [
      252,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 260,
    "end": 265,
    "range": [
      260,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 267,
    "end": 270,
    "range": [
      267,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 270,
    "end": 273,
    "range": [
      270,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 288,
    "end": 296,
    "range": [
      288,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "make2",
    "start": 297,
    "end": 302,
    "range": [
      297,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 305,
    "end": 312,
    "range": [
      305,
      312
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
    "type": "Identifier",
    "value": "x",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 317,
    "end": 323,
    "range": [
      317,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 338,
    "end": 344,
    "range": [
      338,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 346,
    "end": 351,
    "range": [
      346,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 356,
    "end": 359,
    "range": [
      356,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 403,
    "end": 411,
    "range": [
      403,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "make3",
    "start": 412,
    "end": 417,
    "range": [
      412,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 420,
    "end": 427,
    "range": [
      420,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 432,
    "end": 438,
    "range": [
      432,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 442,
    "end": 445,
    "range": [
      442,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 453,
    "end": 459,
    "range": [
      453,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 468,
    "end": 471,
    "range": [
      468,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 471,
    "end": 474,
    "range": [
      471,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 505,
    "end": 510,
    "range": [
      505,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 512,
    "end": 515,
    "range": [
      512,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "test2",
    "start": 544,
    "end": 549,
    "range": [
      544,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 551,
    "end": 554,
    "range": [
      551,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  }
]
```
