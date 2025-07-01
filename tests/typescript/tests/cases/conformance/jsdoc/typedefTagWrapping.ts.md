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
        "name": "callIt",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 296
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 297,
          "end": 301
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 306
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 323
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 327
                }
              ],
              "optional": false,
              "start": 319,
              "end": 328
            },
            "start": 312,
            "end": 329
          }
        ],
        "start": 308,
        "end": 331
      },
      "expression": false,
      "start": 281,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 281,
  "end": 332
}
```
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
        "name": "check",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 245,
          "end": 248
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 264
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 268
                },
                "optional": false,
                "computed": false,
                "start": 261,
                "end": 268
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 274
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 278
                },
                "optional": false,
                "computed": false,
                "start": 271,
                "end": 278
              },
              "alternate": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 284
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 288
                },
                "optional": false,
                "computed": false,
                "start": 281,
                "end": 288
              },
              "start": 261,
              "end": 288
            },
            "start": 254,
            "end": 289
          }
        ],
        "start": 250,
        "end": 291
      },
      "expression": false,
      "start": 230,
      "end": 291
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 230,
  "end": 292
}
```
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
        "name": "use1",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 417
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 422
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bool",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 428
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 433
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 438
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 455
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 460
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 462,
                  "end": 465
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 470
                }
              ],
              "optional": false,
              "start": 451,
              "end": 471
            },
            "start": 444,
            "end": 471
          }
        ],
        "start": 440,
        "end": 473
      },
      "expression": false,
      "start": 404,
      "end": 473
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 404,
  "end": 474
}
```
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
        "name": "use2",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 422
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 427
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bool",
          "optional": false,
          "typeAnnotation": null,
          "start": 429,
          "end": 433
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 438
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 443
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 460
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 465
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 470
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 475
                }
              ],
              "optional": false,
              "start": 456,
              "end": 476
            },
            "start": 449,
            "end": 476
          }
        ],
        "start": 445,
        "end": 478
      },
      "expression": false,
      "start": 409,
      "end": 478
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 409,
  "end": 479
}
```
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
        "name": "check5",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 260
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 264
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 280
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 284
                },
                "optional": false,
                "computed": false,
                "start": 277,
                "end": 284
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 290
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 294
                },
                "optional": false,
                "computed": false,
                "start": 287,
                "end": 294
              },
              "alternate": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 300
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 304
                },
                "optional": false,
                "computed": false,
                "start": 297,
                "end": 304
              },
              "start": 277,
              "end": 304
            },
            "start": 270,
            "end": 305
          }
        ],
        "start": 266,
        "end": 307
      },
      "expression": false,
      "start": 245,
      "end": 307
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 245,
  "end": 308
}
```
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
        "name": "check6",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 214
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 218
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 234
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 238
              },
              "optional": false,
              "computed": false,
              "start": 231,
              "end": 238
            },
            "start": 224,
            "end": 239
          }
        ],
        "start": 220,
        "end": 241
      },
      "expression": false,
      "start": 199,
      "end": 241
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 199,
  "end": 243
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 149,
  "end": 149
}
```
