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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
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
                "start": 19,
                "end": 22
              },
              "expression": false,
              "start": 16,
              "end": 22
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 13,
            "end": 22
          }
        ],
        "start": 11,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 39
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 52
      },
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 58
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
                "start": 61,
                "end": 64
              },
              "expression": false,
              "start": 58,
              "end": 64
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 55,
            "end": 64
          }
        ],
        "start": 53,
        "end": 66
      },
      "abstract": false,
      "declare": false,
      "start": 25,
      "end": 66
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 81
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 94
      },
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 100
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
                "start": 103,
                "end": 106
              },
              "expression": false,
              "start": 100,
              "end": 106
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 97,
            "end": 106
          }
        ],
        "start": 95,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 67,
      "end": 108
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 136
      },
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
              "name": "biz",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 142
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
                "start": 145,
                "end": 148
              },
              "expression": false,
              "start": 142,
              "end": 148
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 139,
            "end": 148
          }
        ],
        "start": 137,
        "end": 150
      },
      "abstract": false,
      "declare": false,
      "start": 109,
      "end": 150
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 164
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "canvas",
                "raw": "'canvas'",
                "start": 174,
                "end": 182
              },
              "start": 174,
              "end": 182
            },
            "start": 172,
            "end": 182
          },
          "start": 165,
          "end": 182
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived1",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 193
          },
          "typeArguments": null,
          "start": 185,
          "end": 193
        },
        "start": 183,
        "end": 193
      },
      "body": null,
      "expression": false,
      "start": 152,
      "end": 194
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 207
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "div",
                "raw": "'div'",
                "start": 218,
                "end": 223
              },
              "start": 218,
              "end": 223
            },
            "start": 215,
            "end": 223
          },
          "start": 208,
          "end": 223
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived2",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 234
          },
          "typeArguments": null,
          "start": 226,
          "end": 234
        },
        "start": 224,
        "end": 234
      },
      "body": null,
      "expression": false,
      "start": 195,
      "end": 235
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 248
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "span",
                "raw": "'span'",
                "start": 258,
                "end": 264
              },
              "start": 258,
              "end": 264
            },
            "start": 256,
            "end": 264
          },
          "start": 249,
          "end": 264
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Derived3",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 275
          },
          "typeArguments": null,
          "start": 267,
          "end": 275
        },
        "start": 265,
        "end": 275
      },
      "body": null,
      "expression": false,
      "start": 236,
      "end": 276
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 289
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 299,
              "end": 305
            },
            "start": 297,
            "end": 305
          },
          "start": 290,
          "end": 305
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 312
          },
          "typeArguments": null,
          "start": 308,
          "end": 312
        },
        "start": 306,
        "end": 312
      },
      "body": null,
      "expression": false,
      "start": 277,
      "end": 313
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 326
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 336,
              "end": 339
            },
            "start": 334,
            "end": 339
          },
          "start": 327,
          "end": 339
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 346
          },
          "typeArguments": null,
          "start": 342,
          "end": 346
        },
        "start": 340,
        "end": 346
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 360,
              "end": 364
            },
            "start": 353,
            "end": 365
          }
        ],
        "start": 347,
        "end": 367
      },
      "expression": false,
      "start": 314,
      "end": 367
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 367
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
    "type": "Identifier",
    "value": "foo",
    "start": 13,
    "end": 16,
    "range": [
      13,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30,
    "range": [
      25,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 31,
    "end": 39,
    "range": [
      31,
      39
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 40,
    "end": 47,
    "range": [
      40,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 48,
    "end": 52,
    "range": [
      48,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 55,
    "end": 58,
    "range": [
      55,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 67,
    "end": 72,
    "range": [
      67,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 73,
    "end": 81,
    "range": [
      73,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 82,
    "end": 89,
    "range": [
      82,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 90,
    "end": 94,
    "range": [
      90,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 97,
    "end": 100,
    "range": [
      97,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 115,
    "end": 123,
    "range": [
      115,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 124,
    "end": 131,
    "range": [
      124,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 132,
    "end": 136,
    "range": [
      132,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "biz",
    "start": 139,
    "end": 142,
    "range": [
      139,
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
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 152,
    "end": 160,
    "range": [
      152,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 165,
    "end": 172,
    "range": [
      165,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "String",
    "value": "'canvas'",
    "start": 174,
    "end": 182,
    "range": [
      174,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 185,
    "end": 193,
    "range": [
      185,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 195,
    "end": 203,
    "range": [
      195,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 208,
    "end": 215,
    "range": [
      208,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "String",
    "value": "'div'",
    "start": 218,
    "end": 223,
    "range": [
      218,
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
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 226,
    "end": 234,
    "range": [
      226,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 236,
    "end": 244,
    "range": [
      236,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 249,
    "end": 256,
    "range": [
      249,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "String",
    "value": "'span'",
    "start": 258,
    "end": 264,
    "range": [
      258,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 267,
    "end": 275,
    "range": [
      267,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 277,
    "end": 285,
    "range": [
      277,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 286,
    "end": 289,
    "range": [
      286,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "tagName",
    "start": 290,
    "end": 297,
    "range": [
      290,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 299,
    "end": 305,
    "range": [
      299,
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
    "value": ":",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 308,
    "end": 312,
    "range": [
      308,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 314,
    "end": 322,
    "range": [
      314,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 323,
    "end": 326,
    "range": [
      323,
      326
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
    "value": "tagName",
    "start": 327,
    "end": 334,
    "range": [
      327,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 336,
    "end": 339,
    "range": [
      336,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 342,
    "end": 346,
    "range": [
      342,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 353,
    "end": 359,
    "range": [
      353,
      359
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 360,
    "end": 364,
    "range": [
      360,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  }
]
```
