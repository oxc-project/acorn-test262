__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 74
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 81
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 83,
                    "end": 86
                  },
                  "start": 83,
                  "end": 86
                },
                "start": 81,
                "end": 86
              },
              "accessibility": null,
              "static": false,
              "start": 77,
              "end": 86
            }
          ],
          "start": 75,
          "end": 88
        },
        "declare": false,
        "start": 63,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 56,
      "end": 88
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 107
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
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 114
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 116,
                    "end": 119
                  },
                  "start": 116,
                  "end": 119
                },
                "start": 114,
                "end": 119
              },
              "accessibility": null,
              "static": false,
              "start": 110,
              "end": 119
            }
          ],
          "start": 108,
          "end": 121
        },
        "declare": false,
        "start": 96,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 89,
      "end": 121
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AB",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 136
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "typeArguments": null,
              "start": 139,
              "end": 140
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "typeArguments": null,
              "start": 143,
              "end": 144
            }
          ],
          "start": 139,
          "end": 144
        },
        "declare": false,
        "start": 129,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 122,
      "end": 144
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "itemId",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 158
          },
          "init": {
            "type": "Literal",
            "value": "some-id",
            "raw": "'some-id'",
            "start": 161,
            "end": 170
          },
          "definite": false,
          "start": 152,
          "end": 170
        }
      ],
      "declare": false,
      "start": 146,
      "end": 170
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 223,
                            "end": 229
                          },
                          "start": 221,
                          "end": 229
                        },
                        "start": 219,
                        "end": 229
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 234
                        },
                        "typeArguments": null,
                        "start": 232,
                        "end": 234
                      },
                      "start": 230,
                      "end": 234
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 218,
                    "end": 234
                  }
                ],
                "start": 216,
                "end": 236
              },
              "start": 214,
              "end": 236
            },
            "start": 209,
            "end": 236
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 239,
            "end": 241
          },
          "definite": false,
          "start": 209,
          "end": 241
        }
      ],
      "declare": false,
      "start": 203,
      "end": 241
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itemId",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 257
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itemOk1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 267
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 250,
                "end": 267
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 269
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 277
          },
          "definite": false,
          "start": 248,
          "end": 277
        }
      ],
      "declare": false,
      "start": 242,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "itemOk1",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 292
        },
        "prefix": true,
        "start": 278,
        "end": 292
      },
      "directive": null,
      "start": 278,
      "end": 292
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjWithItems",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 356
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
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 375,
                            "end": 381
                          },
                          "start": 373,
                          "end": 381
                        },
                        "start": 372,
                        "end": 381
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 386
                        },
                        "typeArguments": null,
                        "start": 384,
                        "end": 386
                      },
                      "start": 382,
                      "end": 386
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 371,
                    "end": 386
                  }
                ],
                "start": 370,
                "end": 387
              },
              "start": 368,
              "end": 387
            },
            "accessibility": null,
            "static": false,
            "start": 363,
            "end": 387
          }
        ],
        "start": 357,
        "end": 389
      },
      "declare": false,
      "start": 334,
      "end": 389
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithItems",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjWithItems",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 422
                },
                "typeArguments": null,
                "start": 410,
                "end": 422
              },
              "start": 408,
              "end": 422
            },
            "start": 396,
            "end": 422
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 432
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 434,
                  "end": 436
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 427,
                "end": 436
              }
            ],
            "start": 425,
            "end": 437
          },
          "definite": false,
          "start": 396,
          "end": 437
        }
      ],
      "declare": false,
      "start": 390,
      "end": 437
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "itemOk2",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 452
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objWithItems",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 467
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 473
              },
              "optional": false,
              "computed": false,
              "start": 455,
              "end": 473
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "itemId",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 480
            },
            "optional": false,
            "computed": true,
            "start": 455,
            "end": 481
          },
          "definite": false,
          "start": 445,
          "end": 481
        }
      ],
      "declare": false,
      "start": 439,
      "end": 481
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "itemOk2",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 496
        },
        "prefix": true,
        "start": 482,
        "end": 496
      },
      "directive": null,
      "start": 482,
      "end": 496
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 523
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "itemId",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 528,
                          "end": 534
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "itemWithTSError",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 552
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 527,
                        "end": 552
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 554
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 557,
                    "end": 559
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 559
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 518,
                "end": 559
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 604
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "objWithItems",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 619
          },
          "definite": false,
          "start": 512,
          "end": 619
        }
      ],
      "declare": false,
      "start": 506,
      "end": 619
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "itemWithTSError",
          "optional": false,
          "typeAnnotation": null,
          "start": 686,
          "end": 701
        },
        "prefix": true,
        "start": 679,
        "end": 701
      },
      "directive": null,
      "start": 679,
      "end": 701
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 871
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62,
    "range": [
      56,
      62
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 63,
    "end": 72,
    "range": [
      63,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81,
    "range": [
      77,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 89,
    "end": 95,
    "range": [
      89,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 96,
    "end": 105,
    "range": [
      96,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 129,
    "end": 133,
    "range": [
      129,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 134,
    "end": 136,
    "range": [
      134,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "itemId",
    "start": 152,
    "end": 158,
    "range": [
      152,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "String",
    "value": "'some-id'",
    "start": 161,
    "end": 170,
    "range": [
      161,
      170
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 203,
    "end": 208,
    "range": [
      203,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 209,
    "end": 214,
    "range": [
      209,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 219,
    "end": 221,
    "range": [
      219,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 223,
    "end": 229,
    "range": [
      223,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 232,
    "end": 234,
    "range": [
      232,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 242,
    "end": 247,
    "range": [
      242,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "itemId",
    "start": 251,
    "end": 257,
    "range": [
      251,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "itemOk1",
    "start": 260,
    "end": 267,
    "range": [
      260,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 272,
    "end": 277,
    "range": [
      272,
      277
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 278,
    "end": 284,
    "range": [
      278,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "itemOk1",
    "start": 285,
    "end": 292,
    "range": [
      285,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 334,
    "end": 343,
    "range": [
      334,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjWithItems",
    "start": 344,
    "end": 356,
    "range": [
      344,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 363,
    "end": 368,
    "range": [
      363,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 375,
    "end": 381,
    "range": [
      375,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 384,
    "end": 386,
    "range": [
      384,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 390,
    "end": 395,
    "range": [
      390,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "objWithItems",
    "start": 396,
    "end": 408,
    "range": [
      396,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "ObjWithItems",
    "start": 410,
    "end": 422,
    "range": [
      410,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 427,
    "end": 432,
    "range": [
      427,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 439,
    "end": 444,
    "range": [
      439,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "itemOk2",
    "start": 445,
    "end": 452,
    "range": [
      445,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "objWithItems",
    "start": 455,
    "end": 467,
    "range": [
      455,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 468,
    "end": 473,
    "range": [
      468,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "itemId",
    "start": 474,
    "end": 480,
    "range": [
      474,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 482,
    "end": 488,
    "range": [
      482,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "itemOk2",
    "start": 489,
    "end": 496,
    "range": [
      489,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 506,
    "end": 511,
    "range": [
      506,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 518,
    "end": 523,
    "range": [
      518,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "itemId",
    "start": 528,
    "end": 534,
    "range": [
      528,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "itemWithTSError",
    "start": 537,
    "end": 552,
    "range": [
      537,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "objWithItems",
    "start": 607,
    "end": 619,
    "range": [
      607,
      619
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "itemWithTSError",
    "start": 686,
    "end": 701,
    "range": [
      686,
      701
    ]
  }
]
```
