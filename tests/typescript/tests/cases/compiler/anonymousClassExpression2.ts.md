__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 135,
        "end": 136
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
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
                    "name": "methodA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 169
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ThisExpression",
                            "start": 186,
                            "end": 190
                          },
                          "directive": null,
                          "start": 186,
                          "end": 191
                        }
                      ],
                      "start": 172,
                      "end": 270
                    },
                    "expression": false,
                    "start": 169,
                    "end": 270
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 162,
                  "end": 270
                }
              ],
              "start": 152,
              "end": 276
            },
            "abstract": false,
            "declare": false,
            "start": 144,
            "end": 276
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
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
                    "name": "methodB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 307
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 324,
                              "end": 328
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "methodA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 329,
                              "end": 336
                            },
                            "optional": false,
                            "computed": false,
                            "start": 324,
                            "end": 336
                          },
                          "directive": null,
                          "start": 324,
                          "end": 337
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 359,
                              "end": 363
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "methodB",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 364,
                              "end": 371
                            },
                            "optional": false,
                            "computed": false,
                            "start": 359,
                            "end": 371
                          },
                          "directive": null,
                          "start": 359,
                          "end": 372
                        }
                      ],
                      "start": 310,
                      "end": 388
                    },
                    "expression": false,
                    "start": 307,
                    "end": 388
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 300,
                  "end": 388
                }
              ],
              "start": 290,
              "end": 394
            },
            "abstract": false,
            "declare": false,
            "start": 282,
            "end": 394
          }
        ],
        "start": 138,
        "end": 396
      },
      "start": 128,
      "end": 396
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 128,
  "end": 396
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "while",
    "start": 128,
    "end": 133,
    "range": [
      128,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 144,
    "end": 149,
    "range": [
      144,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "methodA",
    "start": 162,
    "end": 169,
    "range": [
      162,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 186,
    "end": 190,
    "range": [
      186,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 282,
    "end": 287,
    "range": [
      282,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "methodB",
    "start": 300,
    "end": 307,
    "range": [
      300,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 324,
    "end": 328,
    "range": [
      324,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "methodA",
    "start": 329,
    "end": 336,
    "range": [
      329,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 359,
    "end": 363,
    "range": [
      359,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "methodB",
    "start": 364,
    "end": 371,
    "range": [
      364,
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
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  }
]
```
