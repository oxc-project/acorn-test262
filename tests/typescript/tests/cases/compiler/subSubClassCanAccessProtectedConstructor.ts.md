__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "start": 27,
              "end": 38
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
                "body": [],
                "start": 41,
                "end": 44
              },
              "expression": false,
              "start": 38,
              "end": 44
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 17,
            "end": 44
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance1",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 65
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 76
              },
              "typeArguments": null,
              "arguments": [],
              "start": 68,
              "end": 78
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 49,
            "end": 79
          }
        ],
        "start": 11,
        "end": 92
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Subclass",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 108
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 121
      },
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
              "name": "instance1_1",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 146
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 157
              },
              "typeArguments": null,
              "arguments": [],
              "start": 149,
              "end": 159
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 128,
            "end": 160
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance1_2",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 194
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Subclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 201,
                "end": 209
              },
              "typeArguments": null,
              "arguments": [],
              "start": 197,
              "end": 211
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 176,
            "end": 212
          }
        ],
        "start": 122,
        "end": 225
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 225
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubclassOfSubclass",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 251
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Subclass",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 268
      },
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
              "name": "instance2_1",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 293
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 304
              },
              "typeArguments": null,
              "arguments": [],
              "start": 296,
              "end": 306
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 275,
            "end": 307
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance2_2",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 341
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Subclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 356
              },
              "typeArguments": null,
              "arguments": [],
              "start": 344,
              "end": 358
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 323,
            "end": 359
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance2_3",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 393
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "SubclassOfSubclass",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 418
              },
              "typeArguments": null,
              "arguments": [],
              "start": 396,
              "end": 420
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 375,
            "end": 421
          }
        ],
        "start": 269,
        "end": 434
      },
      "abstract": false,
      "declare": false,
      "start": 227,
      "end": 434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 434
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10,
    "range": [
      6,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 17,
    "end": 26,
    "range": [
      17,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 27,
    "end": 38,
    "range": [
      27,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "instance1",
    "start": 56,
    "end": 65,
    "range": [
      56,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 68,
    "end": 71,
    "range": [
      68,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 72,
    "end": 76,
    "range": [
      72,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78,
    "range": [
      77,
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
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "Subclass",
    "start": 100,
    "end": 108,
    "range": [
      100,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 109,
    "end": 116,
    "range": [
      109,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 117,
    "end": 121,
    "range": [
      117,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 128,
    "end": 134,
    "range": [
      128,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "instance1_1",
    "start": 135,
    "end": 146,
    "range": [
      135,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 153,
    "end": 157,
    "range": [
      153,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "instance1_2",
    "start": 183,
    "end": 194,
    "range": [
      183,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "Subclass",
    "start": 201,
    "end": 209,
    "range": [
      201,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 227,
    "end": 232,
    "range": [
      227,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "SubclassOfSubclass",
    "start": 233,
    "end": 251,
    "range": [
      233,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 252,
    "end": 259,
    "range": [
      252,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "Subclass",
    "start": 260,
    "end": 268,
    "range": [
      260,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 275,
    "end": 281,
    "range": [
      275,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "instance2_1",
    "start": 282,
    "end": 293,
    "range": [
      282,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 296,
    "end": 299,
    "range": [
      296,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 300,
    "end": 304,
    "range": [
      300,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 323,
    "end": 329,
    "range": [
      323,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "instance2_2",
    "start": 330,
    "end": 341,
    "range": [
      330,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 344,
    "end": 347,
    "range": [
      344,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "Subclass",
    "start": 348,
    "end": 356,
    "range": [
      348,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 375,
    "end": 381,
    "range": [
      375,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "instance2_3",
    "start": 382,
    "end": 393,
    "range": [
      382,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "SubclassOfSubclass",
    "start": 400,
    "end": 418,
    "range": [
      400,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  }
]
```
