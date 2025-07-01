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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 68
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 79,
              "end": 83
            },
            "consequent": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              },
              "declare": false,
              "start": 85,
              "end": 101
            },
            "alternate": null,
            "start": 75,
            "end": 101
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 111
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 115
                },
                "optional": false,
                "computed": false,
                "start": 104,
                "end": 115
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 116,
                    "end": 118
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 123
                  },
                  "start": 116,
                  "end": 123
                }
              ],
              "optional": false,
              "start": 104,
              "end": 124
            },
            "directive": null,
            "start": 104,
            "end": 125
          }
        ],
        "start": 71,
        "end": 127
      },
      "expression": false,
      "start": 57,
      "end": 127
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 140
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 151,
              "end": 155
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 172,
                    "end": 178
                  },
                  "declare": false,
                  "start": 163,
                  "end": 179
                }
              ],
              "start": 157,
              "end": 183
            },
            "alternate": null,
            "start": 147,
            "end": 183
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 193
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 197
                },
                "optional": false,
                "computed": false,
                "start": 186,
                "end": 197
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 198,
                    "end": 200
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "typeArguments": null,
                    "start": 204,
                    "end": 205
                  },
                  "start": 198,
                  "end": 205
                }
              ],
              "optional": false,
              "start": 186,
              "end": 206
            },
            "directive": null,
            "start": 186,
            "end": 207
          }
        ],
        "start": 143,
        "end": 209
      },
      "expression": false,
      "start": 129,
      "end": 209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 222
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 233,
              "end": 237
            },
            "consequent": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 254
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 269
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 271,
                        "end": 277
                      },
                      "start": 269,
                      "end": 277
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 263,
                    "end": 278
                  }
                ],
                "start": 255,
                "end": 284
              },
              "declare": false,
              "start": 243,
              "end": 284
            },
            "alternate": null,
            "start": 229,
            "end": 284
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 294
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 298
                },
                "optional": false,
                "computed": false,
                "start": 287,
                "end": 298
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 299,
                    "end": 301
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    },
                    "typeArguments": null,
                    "start": 305,
                    "end": 306
                  },
                  "start": 299,
                  "end": 306
                }
              ],
              "optional": false,
              "start": 287,
              "end": 307
            },
            "directive": null,
            "start": 287,
            "end": 308
          }
        ],
        "start": 225,
        "end": 310
      },
      "expression": false,
      "start": 211,
      "end": 310
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 323
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 334,
              "end": 338
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 357
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 366,
                          "end": 372
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 374,
                            "end": 380
                          },
                          "start": 372,
                          "end": 380
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 366,
                        "end": 381
                      }
                    ],
                    "start": 358,
                    "end": 387
                  },
                  "declare": false,
                  "start": 346,
                  "end": 387
                }
              ],
              "start": 340,
              "end": 391
            },
            "alternate": null,
            "start": 330,
            "end": 391
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 401
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 405
                },
                "optional": false,
                "computed": false,
                "start": 394,
                "end": 405
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 406,
                    "end": 408
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 413
                    },
                    "typeArguments": null,
                    "start": 412,
                    "end": 413
                  },
                  "start": 406,
                  "end": 413
                }
              ],
              "optional": false,
              "start": 394,
              "end": 414
            },
            "directive": null,
            "start": 394,
            "end": 415
          }
        ],
        "start": 326,
        "end": 417
      },
      "expression": false,
      "start": 312,
      "end": 417
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 417
}
```
