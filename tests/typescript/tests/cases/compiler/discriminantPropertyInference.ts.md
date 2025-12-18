__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorTrue",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 44
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 57
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 59,
                  "end": 63
                },
                "start": 59,
                "end": 63
              },
              "start": 57,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 53,
            "end": 64
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "start": 74,
                    "end": 83
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 88,
                    "end": 92
                  },
                  "start": 85,
                  "end": 92
                },
                "start": 73,
                "end": 92
              },
              "start": 71,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 93
          }
        ],
        "start": 47,
        "end": 95
      },
      "declare": false,
      "start": 22,
      "end": 95
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DiscriminatorFalse",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 120
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "disc",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 133
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 136,
                  "end": 141
                },
                "start": 136,
                "end": 141
              },
              "start": 134,
              "end": 141
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 142
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cb",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 149
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 155,
                        "end": 161
                      },
                      "start": 153,
                      "end": 161
                    },
                    "start": 152,
                    "end": 161
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 166,
                    "end": 170
                  },
                  "start": 163,
                  "end": 170
                },
                "start": 151,
                "end": 170
              },
              "start": 149,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 147,
            "end": 171
          }
        ],
        "start": 123,
        "end": 173
      },
      "declare": false,
      "start": 97,
      "end": 173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 185
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
              "name": "DiscriminatorTrue",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 205
            },
            "typeArguments": null,
            "start": 188,
            "end": 205
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DiscriminatorFalse",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 226
            },
            "typeArguments": null,
            "start": 208,
            "end": 226
          }
        ],
        "start": 188,
        "end": 226
      },
      "declare": false,
      "start": 175,
      "end": 227
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 247
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorTrue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 274
                  },
                  "typeArguments": null,
                  "start": 257,
                  "end": 274
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DiscriminatorFalse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 295
                  },
                  "typeArguments": null,
                  "start": 277,
                  "end": 295
                }
              ],
              "start": 257,
              "end": 295
            },
            "start": 255,
            "end": 295
          },
          "start": 248,
          "end": 295
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 298,
          "end": 301
        },
        "start": 296,
        "end": 301
      },
      "body": null,
      "expression": false,
      "start": 229,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 325
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 336
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 338,
                  "end": 342
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 332,
                "end": 342
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 350
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 353
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parseInt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 365
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 367
                      }
                    ],
                    "optional": false,
                    "start": 357,
                    "end": 368
                  },
                  "id": null,
                  "generator": false,
                  "start": 352,
                  "end": 368
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 348,
                "end": 368
              }
            ],
            "start": 326,
            "end": 370
          }
        ],
        "optional": false,
        "start": 324,
        "end": 371
      },
      "directive": null,
      "start": 324,
      "end": 372
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 395
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 406
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 408,
                  "end": 413
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 402,
                "end": 413
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 421
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 423,
                      "end": 424
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 428,
                        "end": 429
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 437
                      },
                      "optional": false,
                      "computed": false,
                      "start": 428,
                      "end": 437
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 428,
                    "end": 439
                  },
                  "id": null,
                  "generator": false,
                  "start": 423,
                  "end": 439
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 419,
                "end": 439
              }
            ],
            "start": 396,
            "end": 441
          }
        ],
        "optional": false,
        "start": 394,
        "end": 442
      },
      "directive": null,
      "start": 394,
      "end": 443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 502
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "disc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 513
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 524
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 509,
                "end": 524
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 532
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 534,
                      "end": 535
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 540
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 548
                      },
                      "optional": false,
                      "computed": false,
                      "start": 539,
                      "end": 548
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 539,
                    "end": 550
                  },
                  "id": null,
                  "generator": false,
                  "start": 534,
                  "end": 550
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 530,
                "end": 550
              }
            ],
            "start": 503,
            "end": 552
          }
        ],
        "optional": false,
        "start": 501,
        "end": 553
      },
      "directive": null,
      "start": 501,
      "end": 554
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 638
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 647
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 650
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 654,
                        "end": 655
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 663
                      },
                      "optional": false,
                      "computed": false,
                      "start": 654,
                      "end": 663
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 654,
                    "end": 665
                  },
                  "id": null,
                  "generator": false,
                  "start": 649,
                  "end": 665
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 645,
                "end": 665
              }
            ],
            "start": 639,
            "end": 667
          }
        ],
        "optional": false,
        "start": 637,
        "end": 668
      },
      "directive": null,
      "start": 637,
      "end": 669
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 669
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorTrue",
    "start": 27,
    "end": 44,
    "range": [
      27,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "disc",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 59,
    "end": 63,
    "range": [
      59,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 69,
    "end": 71,
    "range": [
      69,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83,
    "range": [
      77,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 85,
    "end": 87,
    "range": [
      85,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 88,
    "end": 92,
    "range": [
      88,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorFalse",
    "start": 102,
    "end": 120,
    "range": [
      102,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "disc",
    "start": 129,
    "end": 133,
    "range": [
      129,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 136,
    "end": 141,
    "range": [
      136,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 147,
    "end": 149,
    "range": [
      147,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 155,
    "end": 161,
    "range": [
      155,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 163,
    "end": 165,
    "range": [
      163,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 166,
    "end": 170,
    "range": [
      166,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 175,
    "end": 179,
    "range": [
      175,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 180,
    "end": 185,
    "range": [
      180,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorTrue",
    "start": 188,
    "end": 205,
    "range": [
      188,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorFalse",
    "start": 208,
    "end": 226,
    "range": [
      208,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 229,
    "end": 236,
    "range": [
      229,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 237,
    "end": 245,
    "range": [
      237,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 248,
    "end": 255,
    "range": [
      248,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorTrue",
    "start": 257,
    "end": 274,
    "range": [
      257,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "DiscriminatorFalse",
    "start": 277,
    "end": 295,
    "range": [
      277,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 298,
    "end": 301,
    "range": [
      298,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "disc",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 338,
    "end": 342,
    "range": [
      338,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 348,
    "end": 350,
    "range": [
      348,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 354,
    "end": 356,
    "range": [
      354,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "parseInt",
    "start": 357,
    "end": 365,
    "range": [
      357,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "disc",
    "start": 402,
    "end": 406,
    "range": [
      402,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 408,
    "end": 413,
    "range": [
      408,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 419,
    "end": 421,
    "range": [
      419,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 425,
    "end": 427,
    "range": [
      425,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 430,
    "end": 437,
    "range": [
      430,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "disc",
    "start": 509,
    "end": 513,
    "range": [
      509,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 515,
    "end": 524,
    "range": [
      515,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 530,
    "end": 532,
    "range": [
      530,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 536,
    "end": 538,
    "range": [
      536,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 541,
    "end": 548,
    "range": [
      541,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 645,
    "end": 647,
    "range": [
      645,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 651,
    "end": 653,
    "range": [
      651,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 656,
    "end": 663,
    "range": [
      656,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  }
]
```
