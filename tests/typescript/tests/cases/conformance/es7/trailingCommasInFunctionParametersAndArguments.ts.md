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
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 16,
        "end": 18
      },
      "expression": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 22
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 23,
            "end": 24
          }
        ],
        "optional": false,
        "start": 20,
        "end": 26
      },
      "directive": null,
      "start": 20,
      "end": 27
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 48
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 41,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 51,
        "end": 53
      },
      "expression": false,
      "start": 29,
      "end": 53
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f25",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 111
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 119
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 112,
          "end": 119
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 123,
          "end": 127
        },
        "start": 121,
        "end": 127
      },
      "body": null,
      "expression": false,
      "start": 91,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 132
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 136,
              "end": 138
            },
            "start": 133,
            "end": 138
          }
        ],
        "optional": false,
        "start": 130,
        "end": 140
      },
      "directive": null,
      "start": 130,
      "end": 141
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 191
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 193
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 198,
          "end": 204
        },
        "start": 196,
        "end": 204
      },
      "body": null,
      "expression": false,
      "start": 172,
      "end": 205
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 225
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 227
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 230
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 234,
          "end": 240
        },
        "start": 232,
        "end": 240
      },
      "body": null,
      "expression": false,
      "start": 206,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 244,
          "end": 250
        },
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 253
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 254,
              "end": 255
            }
          ],
          "optional": false,
          "start": 251,
          "end": 257
        },
        "start": 243,
        "end": 257
      },
      "directive": null,
      "start": 243,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 260,
          "end": 266
        },
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 270,
              "end": 271
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 273,
              "end": 274
            }
          ],
          "optional": false,
          "start": 267,
          "end": 276
        },
        "start": 259,
        "end": 276
      },
      "directive": null,
      "start": 259,
      "end": 277
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 315,
        "end": 316
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
              "start": 323,
              "end": 334
            },
            "value": {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 336
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 339,
                "end": 342
              },
              "expression": false,
              "start": 334,
              "end": 342
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 323,
            "end": 342
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 389
            },
            "value": {
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 395
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 398,
                "end": 401
              },
              "expression": false,
              "start": 389,
              "end": 401
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 384,
            "end": 401
          }
        ],
        "start": 317,
        "end": 403
      },
      "abstract": false,
      "declare": false,
      "start": 309,
      "end": 403
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 415
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              }
            ],
            "returnType": null,
            "start": 422,
            "end": 430
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 437
              }
            ],
            "returnType": null,
            "start": 435,
            "end": 440
          }
        ],
        "start": 416,
        "end": 442
      },
      "declare": false,
      "start": 404,
      "end": 442
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 448,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 450,
            "end": 451
          }
        ],
        "start": 444,
        "end": 453
      },
      "directive": null,
      "start": 444,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
}
```
