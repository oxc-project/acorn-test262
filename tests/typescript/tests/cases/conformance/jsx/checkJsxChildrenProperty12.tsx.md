__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ButtonProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 54
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 61,
            "end": 71
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 86
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 107
                },
                "typeArguments": null,
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
            },
            "accessibility": null,
            "static": false,
            "start": 91,
            "end": 108
          }
        ],
        "start": 55,
        "end": 110
      },
      "declare": false,
      "start": 34,
      "end": 110
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 124
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 138
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 148
        },
        "optional": false,
        "computed": false,
        "start": 133,
        "end": 148
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ButtonProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 159
            },
            "typeArguments": null,
            "start": 149,
            "end": 159
          },
          {
            "type": "TSAnyKeyword",
            "start": 161,
            "end": 164
          }
        ],
        "start": 148,
        "end": 165
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 178
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "condition",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 200,
                              "end": 207
                            },
                            "start": 198,
                            "end": 207
                          },
                          "start": 189,
                          "end": 207
                        },
                        "init": null,
                        "definite": false,
                        "start": 189,
                        "end": 207
                      }
                    ],
                    "declare": false,
                    "start": 185,
                    "end": 208
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "condition",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 224
                    },
                    "consequent": {
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
                                "name": "InnerButton",
                                "start": 245,
                                "end": 256
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 261,
                                      "end": 265
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 266,
                                      "end": 271
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 261,
                                    "end": 271
                                  },
                                  "start": 257,
                                  "end": 272
                                }
                              ],
                              "selfClosing": true,
                              "start": 244,
                              "end": 275
                            },
                            "children": [],
                            "closingElement": null,
                            "start": 244,
                            "end": 275
                          },
                          "start": 237,
                          "end": 275
                        }
                      ],
                      "start": 226,
                      "end": 279
                    },
                    "alternate": {
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
                                "name": "InnerButton",
                                "start": 301,
                                "end": 312
                              },
                              "typeArguments": null,
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 317,
                                      "end": 321
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 322,
                                      "end": 327
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 317,
                                    "end": 327
                                  },
                                  "start": 313,
                                  "end": 328
                                }
                              ],
                              "selfClosing": false,
                              "start": 300,
                              "end": 330
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "value": "\n\t\t\t\t",
                                "raw": "\n\t\t\t\t",
                                "start": 330,
                                "end": 335
                              },
                              {
                                "type": "JSXElement",
                                "openingElement": {
                                  "type": "JSXOpeningElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 336,
                                    "end": 339
                                  },
                                  "typeArguments": null,
                                  "attributes": [],
                                  "selfClosing": false,
                                  "start": 335,
                                  "end": 340
                                },
                                "children": [
                                  {
                                    "type": "JSXText",
                                    "value": "Hello World",
                                    "raw": "Hello World",
                                    "start": 340,
                                    "end": 351
                                  }
                                ],
                                "closingElement": {
                                  "type": "JSXClosingElement",
                                  "name": {
                                    "type": "JSXIdentifier",
                                    "name": "div",
                                    "start": 353,
                                    "end": 356
                                  },
                                  "start": 351,
                                  "end": 357
                                },
                                "start": 335,
                                "end": 357
                              },
                              {
                                "type": "JSXText",
                                "value": "\n\t\t\t\t",
                                "raw": "\n\t\t\t\t",
                                "start": 357,
                                "end": 362
                              }
                            ],
                            "closingElement": {
                              "type": "JSXClosingElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "InnerButton",
                                "start": 364,
                                "end": 375
                              },
                              "start": 362,
                              "end": 376
                            },
                            "start": 300,
                            "end": 376
                          },
                          "start": 292,
                          "end": 378
                        }
                      ],
                      "start": 287,
                      "end": 382
                    },
                    "start": 211,
                    "end": 382
                  }
                ],
                "start": 181,
                "end": 388
              },
              "expression": false,
              "start": 178,
              "end": 388
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 172,
            "end": 388
          }
        ],
        "start": 166,
        "end": 390
      },
      "abstract": false,
      "declare": false,
      "start": 112,
      "end": 390
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 417
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 422
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 424,
                "end": 430
              },
              "start": 422,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 421,
            "end": 430
          }
        ],
        "start": 418,
        "end": 432
      },
      "declare": false,
      "start": 392,
      "end": 432
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButton",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 451
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 465
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 475
        },
        "optional": false,
        "computed": false,
        "start": 460,
        "end": 475
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InnerButtonProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 491
            },
            "typeArguments": null,
            "start": 476,
            "end": 491
          },
          {
            "type": "TSAnyKeyword",
            "start": 493,
            "end": 496
          }
        ],
        "start": 475,
        "end": 497
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 507
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "name": "button",
                          "start": 523,
                          "end": 529
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 522,
                        "end": 530
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Hello",
                          "raw": "Hello",
                          "start": 530,
                          "end": 535
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "start": 537,
                          "end": 543
                        },
                        "start": 535,
                        "end": 544
                      },
                      "start": 522,
                      "end": 544
                    },
                    "start": 514,
                    "end": 546
                  }
                ],
                "start": 510,
                "end": 549
              },
              "expression": false,
              "start": 507,
              "end": 549
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 501,
            "end": 549
          }
        ],
        "start": 498,
        "end": 551
      },
      "abstract": false,
      "declare": false,
      "start": 434,
      "end": 551
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 551
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43,
    "range": [
      34,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProp",
    "start": 44,
    "end": 54,
    "range": [
      44,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "number",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 91,
    "end": 99,
    "range": [
      91,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 112,
    "end": 117,
    "range": [
      112,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 125,
    "end": 132,
    "range": [
      125,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 133,
    "end": 138,
    "range": [
      133,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 139,
    "end": 148,
    "range": [
      139,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "ButtonProp",
    "start": 149,
    "end": 159,
    "range": [
      149,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
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
    "value": "{",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 172,
    "end": 178,
    "range": [
      172,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 185,
    "end": 188,
    "range": [
      185,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 189,
    "end": 198,
    "range": [
      189,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 200,
    "end": 207,
    "range": [
      200,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 215,
    "end": 224,
    "range": [
      215,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 237,
    "end": 243,
    "range": [
      237,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "InnerButton",
    "start": 245,
    "end": 256,
    "range": [
      245,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 258,
    "end": 261,
    "range": [
      258,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 261,
    "end": 265,
    "range": [
      261,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 266,
    "end": 271,
    "range": [
      266,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 282,
    "end": 286,
    "range": [
      282,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 292,
    "end": 298,
    "range": [
      292,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "InnerButton",
    "start": 301,
    "end": 312,
    "range": [
      301,
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
    "type": "Punctuator",
    "value": "...",
    "start": 314,
    "end": 317,
    "range": [
      314,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 317,
    "end": 321,
    "range": [
      317,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 322,
    "end": 327,
    "range": [
      322,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "JSXText",
    "value": "\n\t\t\t\t",
    "start": 330,
    "end": 335,
    "range": [
      330,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 336,
    "end": 339,
    "range": [
      336,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "JSXText",
    "value": "Hello World",
    "start": 340,
    "end": 351,
    "range": [
      340,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "JSXText",
    "value": "\n\t\t\t\t",
    "start": 357,
    "end": 362,
    "range": [
      357,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "InnerButton",
    "start": 364,
    "end": 375,
    "range": [
      364,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 392,
    "end": 401,
    "range": [
      392,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "InnerButtonProp",
    "start": 402,
    "end": 417,
    "range": [
      402,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 424,
    "end": 430,
    "range": [
      424,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 434,
    "end": 439,
    "range": [
      434,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "InnerButton",
    "start": 440,
    "end": 451,
    "range": [
      440,
      451
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 452,
    "end": 459,
    "range": [
      452,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 460,
    "end": 465,
    "range": [
      460,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 466,
    "end": 475,
    "range": [
      466,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "InnerButtonProp",
    "start": 476,
    "end": 491,
    "range": [
      476,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 493,
    "end": 496,
    "range": [
      493,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 501,
    "end": 507,
    "range": [
      501,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 523,
    "end": 529,
    "range": [
      523,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 530,
    "end": 535,
    "range": [
      530,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "button",
    "start": 537,
    "end": 543,
    "range": [
      537,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  }
]
```
