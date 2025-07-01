__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 121
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 134
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 134
                },
                "right": {
                  "type": "Literal",
                  "value": "z",
                  "raw": "'z'",
                  "start": 137,
                  "end": 140
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 140
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 128,
              "end": 140
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 152
              },
              "value": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 157
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 156,
                        "end": 157
                      },
                      "right": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "'c'",
                        "start": 160,
                        "end": 163
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 163
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 156,
                    "end": 163
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 165
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 146,
              "end": 165
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 181
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "'x'",
                            "start": 184,
                            "end": 187
                          },
                          "start": 184,
                          "end": 187
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "'y'",
                            "start": 190,
                            "end": 193
                          },
                          "start": 190,
                          "end": 193
                        }
                      ],
                      "start": 184,
                      "end": 193
                    },
                    "start": 182,
                    "end": 193
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 175,
                  "end": 194
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 205
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
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
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 210,
                            "end": 211
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "'a'",
                                    "start": 213,
                                    "end": 216
                                  },
                                  "start": 213,
                                  "end": 216
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "'b'",
                                    "start": 219,
                                    "end": 222
                                  },
                                  "start": 219,
                                  "end": 222
                                }
                              ],
                              "start": 213,
                              "end": 222
                            },
                            "start": 211,
                            "end": 222
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 210,
                          "end": 222
                        }
                      ],
                      "start": 208,
                      "end": 224
                    },
                    "start": 206,
                    "end": 224
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 199,
                  "end": 224
                }
              ],
              "start": 169,
              "end": 226
            },
            "start": 167,
            "end": 226
          },
          "start": 122,
          "end": 226
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 240
            },
            "directive": null,
            "start": 234,
            "end": 240
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 246
            },
            "directive": null,
            "start": 245,
            "end": 246
          }
        ],
        "start": 228,
        "end": 248
      },
      "expression": false,
      "start": 108,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 254
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 255,
            "end": 257
          }
        ],
        "optional": false,
        "start": 250,
        "end": 258
      },
      "directive": null,
      "start": 250,
      "end": 259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 264
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 273
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 275,
                  "end": 278
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 267,
                "end": 278
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 286
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 290,
                        "end": 291
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 293,
                        "end": 296
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 290,
                      "end": 296
                    }
                  ],
                  "start": 288,
                  "end": 298
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 280,
                "end": 298
              }
            ],
            "start": 265,
            "end": 300
          }
        ],
        "optional": false,
        "start": 260,
        "end": 301
      },
      "directive": null,
      "start": 260,
      "end": 301
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 302,
          "end": 306
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 315
                },
                "value": {
                  "type": "Literal",
                  "value": "z",
                  "raw": "'z'",
                  "start": 317,
                  "end": 320
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 309,
                "end": 320
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 328
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 333
                      },
                      "value": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 335,
                        "end": 338
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 332,
                      "end": 338
                    }
                  ],
                  "start": 330,
                  "end": 340
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 322,
                "end": 340
              }
            ],
            "start": 307,
            "end": 342
          }
        ],
        "optional": false,
        "start": 302,
        "end": 343
      },
      "directive": null,
      "start": 302,
      "end": 343
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 348
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 357
                },
                "value": {
                  "type": "Literal",
                  "value": "one",
                  "raw": "'one'",
                  "start": 359,
                  "end": 364
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 351,
                "end": 364
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 372
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 377
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 379,
                        "end": 382
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 376,
                      "end": 382
                    }
                  ],
                  "start": 374,
                  "end": 384
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 366,
                "end": 384
              }
            ],
            "start": 349,
            "end": 386
          }
        ],
        "optional": false,
        "start": 344,
        "end": 387
      },
      "directive": null,
      "start": 344,
      "end": 387
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 108,
  "end": 387
}
```
