__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 22
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 65,
          "end": 68
        }
      ],
      "declare": true,
      "start": 53,
      "end": 69
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 115
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 141
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 122,
            "end": 142
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 196
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 175,
            "end": 197
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 256
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 258
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 256,
              "end": 260
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 235,
            "end": 260
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 316
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateParam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 329
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 316,
              "end": 331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 293,
            "end": 331
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 387
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateParam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 400
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 387,
              "end": 402
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 368,
            "end": 402
          }
        ],
        "start": 116,
        "end": 436
      },
      "abstract": false,
      "declare": true,
      "start": 100,
      "end": 436
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 453
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 478
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicConsParam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 494
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "int",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 501,
                      "end": 507
                    },
                    "start": 499,
                    "end": 507
                  },
                  "start": 496,
                  "end": 507
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 478,
              "end": 509
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 460,
            "end": 509
          }
        ],
        "start": 454,
        "end": 539
      },
      "abstract": false,
      "declare": true,
      "start": 438,
      "end": 539
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 539
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
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60,
    "range": [
      53,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 65,
    "end": 68,
    "range": [
      65,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 100,
    "end": 107,
    "range": [
      100,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 108,
    "end": 113,
    "range": [
      108,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "publicMember",
    "start": 129,
    "end": 141,
    "range": [
      129,
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
    "type": "Keyword",
    "value": "private",
    "start": 175,
    "end": 182,
    "range": [
      175,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "privateMember",
    "start": 183,
    "end": 196,
    "range": [
      183,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 235,
    "end": 241,
    "range": [
      235,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "publicFunction",
    "start": 242,
    "end": 256,
    "range": [
      242,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "private",
    "start": 293,
    "end": 300,
    "range": [
      293,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "privateFunction",
    "start": 301,
    "end": 316,
    "range": [
      301,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "privateParam",
    "start": 317,
    "end": 329,
    "range": [
      317,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 368,
    "end": 375,
    "range": [
      368,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 376,
    "end": 387,
    "range": [
      376,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "privateParam",
    "start": 388,
    "end": 400,
    "range": [
      388,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
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
    "type": "Identifier",
    "value": "declare",
    "start": 438,
    "end": 445,
    "range": [
      438,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 446,
    "end": 451,
    "range": [
      446,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 460,
    "end": 466,
    "range": [
      460,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 467,
    "end": 478,
    "range": [
      467,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "publicConsParam",
    "start": 479,
    "end": 494,
    "range": [
      479,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "int",
    "start": 496,
    "end": 499,
    "range": [
      496,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 501,
    "end": 507,
    "range": [
      501,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  }
]
```
