__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 281,
  "end": 332,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 281,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 296,
        "decorators": [],
        "name": "callIt",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 297,
          "end": 301,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 303,
          "end": 306,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 308,
        "end": 331,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 312,
            "end": 329,
            "argument": {
              "type": "CallExpression",
              "start": 319,
              "end": 328,
              "callee": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 324,
                  "end": 327,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 230,
  "end": 292,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 230,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 244,
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 245,
          "end": 248,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 250,
        "end": 291,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 254,
            "end": 289,
            "argument": {
              "type": "ConditionalExpression",
              "start": 261,
              "end": 288,
              "test": {
                "type": "MemberExpression",
                "start": 261,
                "end": 268,
                "object": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 264,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 268,
                  "decorators": [],
                  "name": "boo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 271,
                "end": 278,
                "object": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 274,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 278,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "alternate": {
                "type": "MemberExpression",
                "start": 281,
                "end": 288,
                "object": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 284,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 288,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 404,
  "end": 474,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 404,
      "end": 473,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 417,
        "decorators": [],
        "name": "use1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 418,
          "end": 422,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 424,
          "end": 428,
          "decorators": [],
          "name": "bool",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 430,
          "end": 433,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 435,
          "end": 438,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 440,
        "end": 473,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 444,
            "end": 471,
            "argument": {
              "type": "CallExpression",
              "start": 451,
              "end": 471,
              "callee": {
                "type": "Identifier",
                "start": 451,
                "end": 455,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 456,
                  "end": 460,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 462,
                  "end": 465,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 467,
                  "end": 470,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 409,
  "end": 479,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 409,
      "end": 478,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 422,
        "decorators": [],
        "name": "use2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 423,
          "end": 427,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 429,
          "end": 433,
          "decorators": [],
          "name": "bool",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 435,
          "end": 438,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 440,
          "end": 443,
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 445,
        "end": 478,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 449,
            "end": 476,
            "argument": {
              "type": "CallExpression",
              "start": 456,
              "end": 476,
              "callee": {
                "type": "Identifier",
                "start": 456,
                "end": 460,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 461,
                  "end": 465,
                  "decorators": [],
                  "name": "bool",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 467,
                  "end": 470,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 472,
                  "end": 475,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 245,
  "end": 308,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 245,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 260,
        "decorators": [],
        "name": "check5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 261,
          "end": 264,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 266,
        "end": 307,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 270,
            "end": 305,
            "argument": {
              "type": "ConditionalExpression",
              "start": 277,
              "end": 304,
              "test": {
                "type": "MemberExpression",
                "start": 277,
                "end": 284,
                "object": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 280,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 284,
                  "decorators": [],
                  "name": "boo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "consequent": {
                "type": "MemberExpression",
                "start": 287,
                "end": 294,
                "object": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 290,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 294,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "alternate": {
                "type": "MemberExpression",
                "start": 297,
                "end": 304,
                "object": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 300,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 304,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 199,
  "end": 243,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 199,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 214,
        "decorators": [],
        "name": "check6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 215,
          "end": 218,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 220,
        "end": 241,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 224,
            "end": 239,
            "argument": {
              "type": "MemberExpression",
              "start": 231,
              "end": 238,
              "object": {
                "type": "Identifier",
                "start": 231,
                "end": 234,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 235,
                "end": 238,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 149,
  "end": 149,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
