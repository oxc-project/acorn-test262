__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 23,
                  "end": 27
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 32
                },
                "optional": false,
                "computed": false,
                "start": 23,
                "end": 32
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 35,
                "end": 39
              },
              "start": 23,
              "end": 39
            },
            "directive": null,
            "start": 23,
            "end": 40
          }
        ],
        "start": 19,
        "end": 42
      },
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 143
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 153
            },
            "optional": false,
            "computed": false,
            "start": 136,
            "end": 153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "optionalParam",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 167
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "required",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 187
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "notRequired",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 200
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "ThisExpression",
                  "start": 215,
                  "end": 219
                },
                "start": 208,
                "end": 220
              }
            ],
            "start": 202,
            "end": 222
          },
          "expression": false,
          "start": 170,
          "end": 222
        },
        "start": 136,
        "end": 222
      },
      "directive": null,
      "start": 136,
      "end": 223
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
            "name": "pInst",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 233
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 247
            },
            "typeArguments": null,
            "arguments": [],
            "start": 236,
            "end": 249
          },
          "definite": false,
          "start": 228,
          "end": 249
        }
      ],
      "declare": false,
      "start": 224,
      "end": 250
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 257
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "pInst",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionalParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 279
              },
              "optional": false,
              "computed": false,
              "start": 260,
              "end": 279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 280,
                "end": 287
              }
            ],
            "optional": false,
            "start": 260,
            "end": 288
          },
          "definite": false,
          "start": 255,
          "end": 288
        }
      ],
      "declare": false,
      "start": 251,
      "end": 288
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 295
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "pInst",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 303
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionalParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 317
              },
              "optional": false,
              "computed": false,
              "start": 298,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 318,
                "end": 325
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 327,
                "end": 331
              }
            ],
            "optional": false,
            "start": 298,
            "end": 332
          },
          "definite": false,
          "start": 293,
          "end": 332
        }
      ],
      "declare": false,
      "start": 289,
      "end": 332
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 332
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 9,
    "end": 16,
    "range": [
      9,
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
    "type": "Keyword",
    "value": "this",
    "start": 23,
    "end": 27,
    "range": [
      23,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 28,
    "end": 32,
    "range": [
      28,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 136,
    "end": 143,
    "range": [
      136,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 144,
    "end": 153,
    "range": [
      144,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalParam",
    "start": 154,
    "end": 167,
    "range": [
      154,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178,
    "range": [
      170,
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
    "type": "Identifier",
    "value": "required",
    "start": 179,
    "end": 187,
    "range": [
      179,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "notRequired",
    "start": 189,
    "end": 200,
    "range": [
      189,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 208,
    "end": 214,
    "range": [
      208,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 215,
    "end": 219,
    "range": [
      215,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 224,
    "end": 227,
    "range": [
      224,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "pInst",
    "start": 228,
    "end": 233,
    "range": [
      228,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 236,
    "end": 239,
    "range": [
      236,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 240,
    "end": 247,
    "range": [
      240,
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
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 251,
    "end": 254,
    "range": [
      251,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 255,
    "end": 257,
    "range": [
      255,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "pInst",
    "start": 260,
    "end": 265,
    "range": [
      260,
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
    "type": "Identifier",
    "value": "optionalParam",
    "start": 266,
    "end": 279,
    "range": [
      266,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 280,
    "end": 287,
    "range": [
      280,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 289,
    "end": 292,
    "range": [
      289,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 293,
    "end": 295,
    "range": [
      293,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "pInst",
    "start": 298,
    "end": 303,
    "range": [
      298,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "optionalParam",
    "start": 304,
    "end": 317,
    "range": [
      304,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 318,
    "end": 325,
    "range": [
      318,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 327,
    "end": 331,
    "range": [
      327,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  }
]
```
