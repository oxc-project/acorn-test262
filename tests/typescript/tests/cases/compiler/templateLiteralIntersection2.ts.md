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
        "name": "Path",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
          },
          {
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
                  "name": "_pathBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 33
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 35,
                    "end": 38
                  },
                  "start": 33,
                  "end": 38
                },
                "accessibility": null,
                "static": false,
                "start": 23,
                "end": 38
              }
            ],
            "start": 21,
            "end": 40
          }
        ],
        "start": 12,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JoinedPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 58
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 61,
            "end": 64
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "/",
              "cooked": "/"
            },
            "tail": false,
            "start": 68,
            "end": 72
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 76,
            "end": 78
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 68
            },
            "typeArguments": null,
            "start": 64,
            "end": 68
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Path",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 76
            },
            "typeArguments": null,
            "start": 72,
            "end": 76
          }
        ],
        "start": 61,
        "end": 78
      },
      "declare": false,
      "start": 43,
      "end": 79
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "joinedPath",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JoinedPath",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 122
              },
              "typeArguments": null,
              "start": 112,
              "end": 122
            },
            "start": 110,
            "end": 122
          },
          "start": 109,
          "end": 122
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 125,
          "end": 129
        },
        "start": 123,
        "end": 129
      },
      "body": null,
      "expression": false,
      "start": 81,
      "end": 130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "joinedPath",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 142
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo/bar",
            "raw": "\"foo/bar\"",
            "start": 143,
            "end": 152
          }
        ],
        "optional": false,
        "start": 132,
        "end": 153
      },
      "directive": null,
      "start": 132,
      "end": 154
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
            "name": "somePath",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 184
                },
                "typeArguments": null,
                "start": 180,
                "end": 184
              },
              "start": 178,
              "end": 184
            },
            "start": 170,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 170,
          "end": 184
        }
      ],
      "declare": true,
      "start": 156,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "joinedPath",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 198,
                "end": 201
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "/",
                  "cooked": "/"
                },
                "tail": false,
                "start": 209,
                "end": 213
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 221,
                "end": 223
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "somePath",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 209
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "somePath",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 221
              }
            ],
            "start": 198,
            "end": 223
          }
        ],
        "optional": false,
        "start": 187,
        "end": 224
      },
      "directive": null,
      "start": 187,
      "end": 225
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StartsWithA",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 244
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": false,
            "start": 247,
            "end": 251
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 257,
            "end": 259
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 251,
            "end": 257
          }
        ],
        "start": 247,
        "end": 259
      },
      "declare": false,
      "start": 228,
      "end": 260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EndsWithA",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 275
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 278,
            "end": 281
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": true,
            "start": 287,
            "end": 290
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 281,
            "end": 287
          }
        ],
        "start": 278,
        "end": 290
      },
      "declare": false,
      "start": 261,
      "end": 291
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withinAs",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 319
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StartsWithA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 323,
                    "end": 334
                  },
                  "typeArguments": null,
                  "start": 323,
                  "end": 334
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EndsWithA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 346
                  },
                  "typeArguments": null,
                  "start": 337,
                  "end": 346
                }
              ],
              "start": 323,
              "end": 346
            },
            "start": 321,
            "end": 346
          },
          "start": 320,
          "end": 346
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 349,
          "end": 353
        },
        "start": 347,
        "end": 353
      },
      "body": null,
      "expression": false,
      "start": 294,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 364
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 365,
            "end": 367
          }
        ],
        "optional": false,
        "start": 356,
        "end": 368
      },
      "directive": null,
      "start": 356,
      "end": 369
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 370,
          "end": 378
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 379,
            "end": 382
          }
        ],
        "optional": false,
        "start": 370,
        "end": 383
      },
      "directive": null,
      "start": 370,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 393
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "ab",
            "raw": "\"ab\"",
            "start": 394,
            "end": 398
          }
        ],
        "optional": false,
        "start": 385,
        "end": 399
      },
      "directive": null,
      "start": 385,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 409
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "aba",
            "raw": "\"aba\"",
            "start": 410,
            "end": 415
          }
        ],
        "optional": false,
        "start": 401,
        "end": 416
      },
      "directive": null,
      "start": 401,
      "end": 417
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withinAs",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 426
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abavvvva",
            "raw": "\"abavvvva\"",
            "start": 427,
            "end": 437
          }
        ],
        "optional": false,
        "start": 418,
        "end": 438
      },
      "directive": null,
      "start": 418,
      "end": 439
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 439
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 5,
    "end": 9,
    "range": [
      5,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12,
    "end": 18,
    "range": [
      12,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "_pathBrand",
    "start": 23,
    "end": 33,
    "range": [
      23,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 43,
    "end": 47,
    "range": [
      43,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "JoinedPath",
    "start": 48,
    "end": 58,
    "range": [
      48,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 64,
    "end": 68,
    "range": [
      64,
      68
    ]
  },
  {
    "type": "Template",
    "value": "}/${",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 72,
    "end": 76,
    "range": [
      72,
      76
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 81,
    "end": 88,
    "range": [
      81,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 89,
    "end": 97,
    "range": [
      89,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "joinedPath",
    "start": 98,
    "end": 108,
    "range": [
      98,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "JoinedPath",
    "start": 112,
    "end": 122,
    "range": [
      112,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 125,
    "end": 129,
    "range": [
      125,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "joinedPath",
    "start": 132,
    "end": 142,
    "range": [
      132,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "String",
    "value": "\"foo/bar\"",
    "start": 143,
    "end": 152,
    "range": [
      143,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 156,
    "end": 163,
    "range": [
      156,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 164,
    "end": 169,
    "range": [
      164,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "somePath",
    "start": 170,
    "end": 178,
    "range": [
      170,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 180,
    "end": 184,
    "range": [
      180,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "joinedPath",
    "start": 187,
    "end": 197,
    "range": [
      187,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "somePath",
    "start": 201,
    "end": 209,
    "range": [
      201,
      209
    ]
  },
  {
    "type": "Template",
    "value": "}/${",
    "start": 209,
    "end": 213,
    "range": [
      209,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "somePath",
    "start": 213,
    "end": 221,
    "range": [
      213,
      221
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 221,
    "end": 223,
    "range": [
      221,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 228,
    "end": 232,
    "range": [
      228,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "StartsWithA",
    "start": 233,
    "end": 244,
    "range": [
      233,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 247,
    "end": 251,
    "range": [
      247,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 251,
    "end": 257,
    "range": [
      251,
      257
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 257,
    "end": 259,
    "range": [
      257,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 261,
    "end": 265,
    "range": [
      261,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "EndsWithA",
    "start": 266,
    "end": 275,
    "range": [
      266,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 278,
    "end": 281,
    "range": [
      278,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 281,
    "end": 287,
    "range": [
      281,
      287
    ]
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 287,
    "end": 290,
    "range": [
      287,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 294,
    "end": 301,
    "range": [
      294,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 302,
    "end": 310,
    "range": [
      302,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "withinAs",
    "start": 311,
    "end": 319,
    "range": [
      311,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "StartsWithA",
    "start": 323,
    "end": 334,
    "range": [
      323,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "EndsWithA",
    "start": 337,
    "end": 346,
    "range": [
      337,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 349,
    "end": 353,
    "range": [
      349,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "withinAs",
    "start": 356,
    "end": 364,
    "range": [
      356,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 365,
    "end": 367,
    "range": [
      365,
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
    "value": ";",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "withinAs",
    "start": 370,
    "end": 378,
    "range": [
      370,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 379,
    "end": 382,
    "range": [
      379,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "withinAs",
    "start": 385,
    "end": 393,
    "range": [
      385,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "String",
    "value": "\"ab\"",
    "start": 394,
    "end": 398,
    "range": [
      394,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "withinAs",
    "start": 401,
    "end": 409,
    "range": [
      401,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "String",
    "value": "\"aba\"",
    "start": 410,
    "end": 415,
    "range": [
      410,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "withinAs",
    "start": 418,
    "end": 426,
    "range": [
      418,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "String",
    "value": "\"abavvvva\"",
    "start": 427,
    "end": 437,
    "range": [
      427,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  }
]
```
