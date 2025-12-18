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
        "name": "Intersection1",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 47
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
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
                "start": 52,
                "end": 70
              }
            ],
            "start": 50,
            "end": 72
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  },
                  "start": 78,
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
          }
        ],
        "start": 50,
        "end": 88
      },
      "declare": false,
      "start": 29,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intersection1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 119
                },
                "typeArguments": null,
                "start": 106,
                "end": 119
              },
              "start": 104,
              "end": 119
            },
            "start": 102,
            "end": 119
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 119
        }
      ],
      "declare": true,
      "start": 90,
      "end": 120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 126
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 129,
          "end": 130
        },
        "start": 122,
        "end": 130
      },
      "directive": null,
      "start": 122,
      "end": 131
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Intersection2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 172
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  },
                  "start": 184,
                  "end": 192
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 177,
                "end": 192
              }
            ],
            "start": 175,
            "end": 194
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 204
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 208,
                        "end": 214
                      },
                      "start": 206,
                      "end": 214
                    },
                    "start": 205,
                    "end": 214
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 199,
                "end": 215
              }
            ],
            "start": 197,
            "end": 217
          }
        ],
        "start": 175,
        "end": 217
      },
      "declare": false,
      "start": 154,
      "end": 218
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intersection2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 248
                },
                "typeArguments": null,
                "start": 235,
                "end": 248
              },
              "start": 233,
              "end": 248
            },
            "start": 231,
            "end": 248
          },
          "init": null,
          "definite": false,
          "start": 231,
          "end": 248
        }
      ],
      "declare": true,
      "start": 219,
      "end": 249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 253
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 255
          },
          "optional": false,
          "computed": false,
          "start": 251,
          "end": 255
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 258,
          "end": 259
        },
        "start": 251,
        "end": 259
      },
      "directive": null,
      "start": 251,
      "end": 260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntersectionAllReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 360
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 375
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 377,
                    "end": 383
                  },
                  "start": 375,
                  "end": 383
                },
                "accessibility": null,
                "static": false,
                "start": 365,
                "end": 383
              }
            ],
            "start": 363,
            "end": 385
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 399,
                    "end": 405
                  },
                  "start": 397,
                  "end": 405
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 390,
                "end": 405
              }
            ],
            "start": 388,
            "end": 407
          }
        ],
        "start": 363,
        "end": 407
      },
      "declare": false,
      "start": 332,
      "end": 408
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ia",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IntersectionAllReadonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 448
                },
                "typeArguments": null,
                "start": 425,
                "end": 448
              },
              "start": 423,
              "end": 448
            },
            "start": 421,
            "end": 448
          },
          "init": null,
          "definite": false,
          "start": 421,
          "end": 448
        }
      ],
      "declare": true,
      "start": 409,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ia",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 453
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 455
          },
          "optional": false,
          "computed": false,
          "start": 451,
          "end": 455
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 458,
          "end": 459
        },
        "start": 451,
        "end": 459
      },
      "directive": null,
      "start": 451,
      "end": 460
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 469
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 29,
    "end": 33,
    "range": [
      29,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "Intersection1",
    "start": 34,
    "end": 47,
    "range": [
      34,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 52,
    "end": 60,
    "range": [
      52,
      60
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
    "value": "}",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "value": "a",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86,
    "range": [
      80,
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
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 90,
    "end": 97,
    "range": [
      90,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 102,
    "end": 104,
    "range": [
      102,
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
    "value": "Intersection1",
    "start": 106,
    "end": 119,
    "range": [
      106,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 122,
    "end": 124,
    "range": [
      122,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 154,
    "end": 158,
    "range": [
      154,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "Intersection2",
    "start": 159,
    "end": 172,
    "range": [
      159,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 177,
    "end": 180,
    "range": [
      177,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 199,
    "end": 202,
    "range": [
      199,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 208,
    "end": 214,
    "range": [
      208,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 219,
    "end": 226,
    "range": [
      219,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 231,
    "end": 233,
    "range": [
      231,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "Intersection2",
    "start": 235,
    "end": 248,
    "range": [
      235,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 251,
    "end": 253,
    "range": [
      251,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 258,
    "end": 259,
    "range": [
      258,
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
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "IntersectionAllReadonly",
    "start": 337,
    "end": 360,
    "range": [
      337,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 365,
    "end": 373,
    "range": [
      365,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 377,
    "end": 383,
    "range": [
      377,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 390,
    "end": 393,
    "range": [
      390,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ")",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 399,
    "end": 405,
    "range": [
      399,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 409,
    "end": 416,
    "range": [
      409,
      416
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 417,
    "end": 420,
    "range": [
      417,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "ia",
    "start": 421,
    "end": 423,
    "range": [
      421,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "IntersectionAllReadonly",
    "start": 425,
    "end": 448,
    "range": [
      425,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "ia",
    "start": 451,
    "end": 453,
    "range": [
      451,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  }
]
```
