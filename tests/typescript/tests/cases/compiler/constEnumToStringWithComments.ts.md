__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 14
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "initializer": {
              "type": "Literal",
              "value": 100,
              "raw": "100",
              "start": 25,
              "end": 28
            },
            "computed": false,
            "start": 21,
            "end": 28
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "initializer": {
              "type": "Literal",
              "value": 0.5,
              "raw": "0.5",
              "start": 38,
              "end": 41
            },
            "computed": false,
            "start": 34,
            "end": 41
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2.",
              "start": 51,
              "end": 53
            },
            "computed": false,
            "start": 47,
            "end": 53
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 64,
                "end": 65
              },
              "prefix": true,
              "start": 63,
              "end": 65
            },
            "computed": false,
            "start": 59,
            "end": 65
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1.5,
                "raw": "1.5",
                "start": 76,
                "end": 79
              },
              "prefix": true,
              "start": 75,
              "end": 79
            },
            "computed": false,
            "start": 71,
            "end": 79
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1.",
                "start": 90,
                "end": 92
              },
              "prefix": true,
              "start": 89,
              "end": 92
            },
            "computed": false,
            "start": 85,
            "end": 92
          }
        ],
        "start": 15,
        "end": 94
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 94
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
            "name": "x0",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 102
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 108
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "optional": false,
                "computed": false,
                "start": 105,
                "end": 110
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 119
              },
              "optional": false,
              "computed": false,
              "start": 105,
              "end": 119
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 105,
            "end": 121
          },
          "definite": false,
          "start": 100,
          "end": 121
        }
      ],
      "declare": false,
      "start": 96,
      "end": 122
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 129
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 135
                },
                "property": {
                  "type": "Literal",
                  "value": "X",
                  "raw": "\"X\"",
                  "start": 136,
                  "end": 139
                },
                "optional": false,
                "computed": true,
                "start": 132,
                "end": 140
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 149
              },
              "optional": false,
              "computed": false,
              "start": 132,
              "end": 149
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 132,
            "end": 151
          },
          "definite": false,
          "start": 127,
          "end": 151
        }
      ],
      "declare": false,
      "start": 123,
      "end": 152
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
            "name": "y0",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 159
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 165
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "optional": false,
                "computed": false,
                "start": 162,
                "end": 167
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 176
              },
              "optional": false,
              "computed": false,
              "start": 162,
              "end": 176
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 162,
            "end": 178
          },
          "definite": false,
          "start": 157,
          "end": 178
        }
      ],
      "declare": false,
      "start": 153,
      "end": 179
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 186
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 192
                },
                "property": {
                  "type": "Literal",
                  "value": "Y",
                  "raw": "\"Y\"",
                  "start": 193,
                  "end": 196
                },
                "optional": false,
                "computed": true,
                "start": 189,
                "end": 197
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 206
              },
              "optional": false,
              "computed": false,
              "start": 189,
              "end": 206
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 189,
            "end": 208
          },
          "definite": false,
          "start": 184,
          "end": 208
        }
      ],
      "declare": false,
      "start": 180,
      "end": 209
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
            "name": "z0",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 216
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 222
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "optional": false,
                "computed": false,
                "start": 219,
                "end": 224
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 233
              },
              "optional": false,
              "computed": false,
              "start": 219,
              "end": 233
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 219,
            "end": 235
          },
          "definite": false,
          "start": 214,
          "end": 235
        }
      ],
      "declare": false,
      "start": 210,
      "end": 236
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
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 243
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 249
                },
                "property": {
                  "type": "Literal",
                  "value": "Z",
                  "raw": "\"Z\"",
                  "start": 250,
                  "end": 253
                },
                "optional": false,
                "computed": true,
                "start": 246,
                "end": 254
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 263
              },
              "optional": false,
              "computed": false,
              "start": 246,
              "end": 263
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 246,
            "end": 265
          },
          "definite": false,
          "start": 241,
          "end": 265
        }
      ],
      "declare": false,
      "start": 237,
      "end": 266
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
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 273
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 279
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "optional": false,
                "computed": false,
                "start": 276,
                "end": 281
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 290
              },
              "optional": false,
              "computed": false,
              "start": 276,
              "end": 290
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 276,
            "end": 292
          },
          "definite": false,
          "start": 271,
          "end": 292
        }
      ],
      "declare": false,
      "start": 267,
      "end": 293
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 300
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 306
                },
                "property": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 307,
                  "end": 310
                },
                "optional": false,
                "computed": true,
                "start": 303,
                "end": 311
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 320
              },
              "optional": false,
              "computed": false,
              "start": 303,
              "end": 320
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 303,
            "end": 322
          },
          "definite": false,
          "start": 298,
          "end": 322
        }
      ],
      "declare": false,
      "start": 294,
      "end": 323
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
            "name": "b0",
            "optional": false,
            "typeAnnotation": null,
            "start": 328,
            "end": 330
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 336
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "optional": false,
                "computed": false,
                "start": 333,
                "end": 338
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 347
              },
              "optional": false,
              "computed": false,
              "start": 333,
              "end": 347
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 333,
            "end": 349
          },
          "definite": false,
          "start": 328,
          "end": 349
        }
      ],
      "declare": false,
      "start": 324,
      "end": 350
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 357
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 363
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 364,
                  "end": 367
                },
                "optional": false,
                "computed": true,
                "start": 360,
                "end": 368
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 377
              },
              "optional": false,
              "computed": false,
              "start": 360,
              "end": 377
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 360,
            "end": 379
          },
          "definite": false,
          "start": 355,
          "end": 379
        }
      ],
      "declare": false,
      "start": 351,
      "end": 380
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
            "name": "c0",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 387
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 393
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                },
                "optional": false,
                "computed": false,
                "start": 390,
                "end": 395
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 404
              },
              "optional": false,
              "computed": false,
              "start": 390,
              "end": 404
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 390,
            "end": 406
          },
          "definite": false,
          "start": 385,
          "end": 406
        }
      ],
      "declare": false,
      "start": 381,
      "end": 407
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
            "start": 412,
            "end": 414
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 420
                },
                "property": {
                  "type": "Literal",
                  "value": "C",
                  "raw": "\"C\"",
                  "start": 421,
                  "end": 424
                },
                "optional": false,
                "computed": true,
                "start": 417,
                "end": 425
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 434
              },
              "optional": false,
              "computed": false,
              "start": 417,
              "end": 434
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 417,
            "end": 436
          },
          "definite": false,
          "start": 412,
          "end": 436
        }
      ],
      "declare": false,
      "start": 408,
      "end": 437
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 437
}
```
