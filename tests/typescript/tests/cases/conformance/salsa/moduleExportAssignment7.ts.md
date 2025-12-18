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
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 19,
              "end": 20
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 15,
            "end": 20
          }
        ],
        "start": 13,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 41
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 48,
              "end": 49
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 44,
            "end": 49
          }
        ],
        "start": 42,
        "end": 52
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 77,
              "end": 78
            },
            "start": 70,
            "end": 78
          }
        ],
        "start": 68,
        "end": 80
      },
      "expression": false,
      "start": 53,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 93
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 105,
              "end": 106
            },
            "start": 98,
            "end": 106
          }
        ],
        "start": 96,
        "end": 108
      },
      "expression": false,
      "start": 81,
      "end": 108
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 150
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 158
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 158
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 172
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 172
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 167,
              "end": 172
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 190
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 190
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 178,
              "end": 190
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 199
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 199
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 196,
              "end": 199
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "qux",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 208
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 213
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 205,
              "end": 213
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 222
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
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 234,
                        "end": 235
                      },
                      "start": 227,
                      "end": 235
                    }
                  ],
                  "start": 225,
                  "end": 237
                },
                "expression": false,
                "start": 222,
                "end": 237
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 219,
              "end": 237
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "literal",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 250
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 252,
                "end": 254
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 243,
              "end": 254
            }
          ],
          "start": 161,
          "end": 257
        },
        "start": 144,
        "end": 257
      },
      "directive": null,
      "start": 144,
      "end": 257
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 257
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
    "value": "Thing",
    "start": 6,
    "end": 11,
    "range": [
      6,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "class",
    "start": 23,
    "end": 28,
    "range": [
      23,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "AnotherThing",
    "start": 29,
    "end": 41,
    "range": [
      29,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61,
    "range": [
      53,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 81,
    "end": 89,
    "range": [
      81,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 90,
    "end": 93,
    "range": [
      90,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 98,
    "end": 104,
    "range": [
      98,
      104
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "type": "Identifier",
    "value": "module",
    "start": 144,
    "end": 150,
    "range": [
      144,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 151,
    "end": 158,
    "range": [
      151,
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
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 167,
    "end": 172,
    "range": [
      167,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "AnotherThing",
    "start": 178,
    "end": 190,
    "range": [
      178,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 196,
    "end": 199,
    "range": [
      196,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 205,
    "end": 208,
    "range": [
      205,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 210,
    "end": 213,
    "range": [
      210,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 219,
    "end": 222,
    "range": [
      219,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223,
    "range": [
      222,
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
    "value": "{",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 227,
    "end": 233,
    "range": [
      227,
      233
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 243,
    "end": 250,
    "range": [
      243,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 252,
    "end": 254,
    "range": [
      252,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  }
]
```
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
        "name": "jstypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 277
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 279
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 282
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 285
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 288
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 294
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 297
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 312,
                            "end": 313
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 314,
                            "end": 315
                          },
                          "optional": false,
                          "computed": false,
                          "start": 312,
                          "end": 315
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 318,
                            "end": 319
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 320,
                            "end": 321
                          },
                          "optional": false,
                          "computed": false,
                          "start": 318,
                          "end": 321
                        },
                        "start": 312,
                        "end": 321
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 324,
                          "end": 325
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 324,
                        "end": 327
                      },
                      "start": 312,
                      "end": 327
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 331
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 330,
                      "end": 333
                    },
                    "start": 312,
                    "end": 333
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 337
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 336,
                    "end": 339
                  },
                  "start": 312,
                  "end": 339
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 343
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 342,
                  "end": 345
                },
                "start": 312,
                "end": 345
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 349
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 356
                },
                "optional": false,
                "computed": false,
                "start": 348,
                "end": 356
              },
              "start": 312,
              "end": 356
            },
            "start": 305,
            "end": 356
          }
        ],
        "start": 299,
        "end": 358
      },
      "expression": false,
      "start": 261,
      "end": 358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "jsvalues",
        "optional": false,
        "typeAnnotation": null,
        "start": 679,
        "end": 687
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 689
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 691,
          "end": 692
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 694,
          "end": 695
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 698
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 700,
          "end": 701
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 703,
          "end": 704
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 706,
          "end": 707
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 722,
                            "end": 723
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 724,
                            "end": 730
                          },
                          "optional": false,
                          "computed": false,
                          "start": 722,
                          "end": 730
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 734
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 735,
                            "end": 741
                          },
                          "optional": false,
                          "computed": false,
                          "start": 733,
                          "end": 741
                        },
                        "start": 722,
                        "end": 741
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 744,
                          "end": 745
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 744,
                        "end": 747
                      },
                      "start": 722,
                      "end": 747
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 750,
                        "end": 751
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 750,
                      "end": 753
                    },
                    "start": 722,
                    "end": 753
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 756,
                      "end": 757
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 756,
                    "end": 759
                  },
                  "start": 722,
                  "end": 759
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 763
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 762,
                  "end": 765
                },
                "start": 722,
                "end": 765
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 769
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 776
                },
                "optional": false,
                "computed": false,
                "start": 768,
                "end": 776
              },
              "start": 722,
              "end": 776
            },
            "start": 715,
            "end": 776
          }
        ],
        "start": 709,
        "end": 778
      },
      "expression": false,
      "start": 670,
      "end": 778
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 261,
  "end": 779
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 261,
    "end": 269,
    "range": [
      261,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "jstypes",
    "start": 270,
    "end": 277,
    "range": [
      270,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 305,
    "end": 311,
    "range": [
      305,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
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
    "value": "+",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": ")",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 350,
    "end": 356,
    "range": [
      350,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 670,
    "end": 678,
    "range": [
      670,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "jsvalues",
    "start": 679,
    "end": 687,
    "range": [
      679,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 715,
    "end": 721,
    "range": [
      715,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 724,
    "end": 730,
    "range": [
      724,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 735,
    "end": 741,
    "range": [
      735,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 770,
    "end": 776,
    "range": [
      770,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  }
]
```
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
        "name": "types",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 30,
                "end": 37
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 44
              },
              "typeArguments": null,
              "start": 23,
              "end": 44
            },
            "start": 21,
            "end": 44
          },
          "start": 20,
          "end": 44
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 60,
                "end": 67
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 81
              },
              "typeArguments": null,
              "start": 53,
              "end": 81
            },
            "start": 51,
            "end": 81
          },
          "start": 50,
          "end": 81
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 97,
                "end": 104
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 109
              },
              "typeArguments": null,
              "start": 90,
              "end": 109
            },
            "start": 88,
            "end": 109
          },
          "start": 87,
          "end": 109
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 125,
                "end": 132
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "qux",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 137
              },
              "typeArguments": null,
              "start": 118,
              "end": 137
            },
            "start": 116,
            "end": 137
          },
          "start": 115,
          "end": 137
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 153,
                "end": 160
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 165
              },
              "typeArguments": null,
              "start": 146,
              "end": 165
            },
            "start": 144,
            "end": 165
          },
          "start": 143,
          "end": 165
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 181,
                "end": 188
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "buz",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 193
              },
              "typeArguments": null,
              "start": 174,
              "end": 193
            },
            "start": 172,
            "end": 193
          },
          "start": 171,
          "end": 193
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 209,
                "end": 216
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "literal",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 225
              },
              "typeArguments": null,
              "start": 202,
              "end": 225
            },
            "start": 200,
            "end": 225
          },
          "start": 199,
          "end": 225
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 243
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 245
                          },
                          "optional": false,
                          "computed": false,
                          "start": 242,
                          "end": 245
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 248,
                            "end": 249
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 250,
                            "end": 251
                          },
                          "optional": false,
                          "computed": false,
                          "start": 248,
                          "end": 251
                        },
                        "start": 242,
                        "end": 251
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 254,
                          "end": 255
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 254,
                        "end": 257
                      },
                      "start": 242,
                      "end": 257
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 261
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 260,
                      "end": 263
                    },
                    "start": 242,
                    "end": 263
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 266,
                    "end": 269
                  },
                  "start": 242,
                  "end": 269
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 272,
                  "end": 275
                },
                "start": 242,
                "end": 275
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 279
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 286
                },
                "optional": false,
                "computed": false,
                "start": 278,
                "end": 286
              },
              "start": 242,
              "end": 286
            },
            "start": 235,
            "end": 286
          }
        ],
        "start": 229,
        "end": 288
      },
      "expression": false,
      "start": 0,
      "end": 288
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "values",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 305
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 328,
                  "end": 335
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 342
                },
                "typeArguments": null,
                "start": 321,
                "end": 342
              },
              "typeArguments": null,
              "start": 314,
              "end": 342
            },
            "start": 312,
            "end": 342
          },
          "start": 311,
          "end": 342
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 365,
                  "end": 372
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnotherThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 386
                },
                "typeArguments": null,
                "start": 358,
                "end": 386
              },
              "typeArguments": null,
              "start": 351,
              "end": 386
            },
            "start": 349,
            "end": 386
          },
          "start": 348,
          "end": 386
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 409,
                  "end": 416
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 421
                },
                "typeArguments": null,
                "start": 402,
                "end": 421
              },
              "typeArguments": null,
              "start": 395,
              "end": 421
            },
            "start": 393,
            "end": 421
          },
          "start": 392,
          "end": 421
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 444,
                  "end": 451
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 456
                },
                "typeArguments": null,
                "start": 437,
                "end": 456
              },
              "typeArguments": null,
              "start": 430,
              "end": 456
            },
            "start": 428,
            "end": 456
          },
          "start": 427,
          "end": 456
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 479,
                  "end": 486
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 491
                },
                "typeArguments": null,
                "start": 472,
                "end": 491
              },
              "typeArguments": null,
              "start": 465,
              "end": 491
            },
            "start": 463,
            "end": 491
          },
          "start": 462,
          "end": 491
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 514,
                  "end": 521
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "buz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 526
                },
                "typeArguments": null,
                "start": 507,
                "end": 526
              },
              "typeArguments": null,
              "start": 500,
              "end": 526
            },
            "start": 498,
            "end": 526
          },
          "start": 497,
          "end": 526
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 549,
                  "end": 556
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 558,
                  "end": 565
                },
                "typeArguments": null,
                "start": 542,
                "end": 565
              },
              "typeArguments": null,
              "start": 535,
              "end": 565
            },
            "start": 533,
            "end": 565
          },
          "start": 532,
          "end": 565
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 582,
                            "end": 583
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 584,
                            "end": 590
                          },
                          "optional": false,
                          "computed": false,
                          "start": 582,
                          "end": 590
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 593,
                            "end": 594
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 595,
                            "end": 601
                          },
                          "optional": false,
                          "computed": false,
                          "start": 593,
                          "end": 601
                        },
                        "start": 582,
                        "end": 601
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 604,
                          "end": 605
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 604,
                        "end": 607
                      },
                      "start": 582,
                      "end": 607
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 611
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 610,
                      "end": 613
                    },
                    "start": 582,
                    "end": 613
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 616,
                      "end": 617
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 616,
                    "end": 619
                  },
                  "start": 582,
                  "end": 619
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 623
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 622,
                  "end": 625
                },
                "start": 582,
                "end": 625
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 629
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 636
                },
                "optional": false,
                "computed": false,
                "start": 628,
                "end": 636
              },
              "start": 582,
              "end": 636
            },
            "start": 575,
            "end": 636
          }
        ],
        "start": 569,
        "end": 638
      },
      "expression": false,
      "start": 290,
      "end": 638
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 638
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
    "value": "types",
    "start": 9,
    "end": 14,
    "range": [
      9,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 23,
    "end": 29,
    "range": [
      23,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 30,
    "end": 37,
    "range": [
      30,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 39,
    "end": 44,
    "range": [
      39,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 53,
    "end": 59,
    "range": [
      53,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 60,
    "end": 67,
    "range": [
      60,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "AnotherThing",
    "start": 69,
    "end": 81,
    "range": [
      69,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 90,
    "end": 96,
    "range": [
      90,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 97,
    "end": 104,
    "range": [
      97,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 106,
    "end": 109,
    "range": [
      106,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 118,
    "end": 124,
    "range": [
      118,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 125,
    "end": 132,
    "range": [
      125,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "type": "Keyword",
    "value": "import",
    "start": 146,
    "end": 152,
    "range": [
      146,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 153,
    "end": 160,
    "range": [
      153,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 162,
    "end": 165,
    "range": [
      162,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 171,
    "end": 172,
    "range": [
      171,
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
    "type": "Keyword",
    "value": "import",
    "start": 174,
    "end": 180,
    "range": [
      174,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 181,
    "end": 188,
    "range": [
      181,
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
    "value": ".",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "buz",
    "start": 190,
    "end": 193,
    "range": [
      190,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 202,
    "end": 208,
    "range": [
      202,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 218,
    "end": 225,
    "range": [
      218,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 235,
    "end": 241,
    "range": [
      235,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 280,
    "end": 286,
    "range": [
      280,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 290,
    "end": 298,
    "range": [
      290,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 299,
    "end": 305,
    "range": [
      299,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 314,
    "end": 320,
    "range": [
      314,
      320
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 321,
    "end": 327,
    "range": [
      321,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 328,
    "end": 335,
    "range": [
      328,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 337,
    "end": 342,
    "range": [
      337,
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
    "value": "b",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 351,
    "end": 357,
    "range": [
      351,
      357
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 358,
    "end": 364,
    "range": [
      358,
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
    "value": "'./mod'",
    "start": 365,
    "end": 372,
    "range": [
      365,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "AnotherThing",
    "start": 374,
    "end": 386,
    "range": [
      374,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 402,
    "end": 408,
    "range": [
      402,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 409,
    "end": 416,
    "range": [
      409,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 418,
    "end": 421,
    "range": [
      418,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 430,
    "end": 436,
    "range": [
      430,
      436
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 437,
    "end": 443,
    "range": [
      437,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 444,
    "end": 451,
    "range": [
      444,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 472,
    "end": 478,
    "range": [
      472,
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
    "type": "String",
    "value": "'./mod'",
    "start": 479,
    "end": 486,
    "range": [
      479,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 488,
    "end": 491,
    "range": [
      488,
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
    "value": "f",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 500,
    "end": 506,
    "range": [
      500,
      506
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 507,
    "end": 513,
    "range": [
      507,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "String",
    "value": "'./mod'",
    "start": 514,
    "end": 521,
    "range": [
      514,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "buz",
    "start": 523,
    "end": 526,
    "range": [
      523,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 542,
    "end": 548,
    "range": [
      542,
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
    "type": "String",
    "value": "'./mod'",
    "start": 549,
    "end": 556,
    "range": [
      549,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Identifier",
    "value": "literal",
    "start": 558,
    "end": 565,
    "range": [
      558,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 584,
    "end": 590,
    "range": [
      584,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 595,
    "end": 601,
    "range": [
      595,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 630,
    "end": 636,
    "range": [
      630,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  }
]
```
