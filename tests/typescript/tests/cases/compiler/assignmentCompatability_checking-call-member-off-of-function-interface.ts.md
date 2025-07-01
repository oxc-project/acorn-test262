__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callable",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 54
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 65
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 72,
                    "end": 75
                  },
                  "start": 70,
                  "end": 75
                },
                "start": 66,
                "end": 75
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 61,
            "end": 77
          }
        ],
        "start": 55,
        "end": 105
      },
      "declare": false,
      "start": 36,
      "end": 105
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Callable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 122
                },
                "typeArguments": null,
                "start": 114,
                "end": 122
              },
              "start": 112,
              "end": 122
            },
            "start": 111,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 122
        }
      ],
      "declare": false,
      "start": 107,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 141
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 144,
          "end": 146
        },
        "start": 140,
        "end": 146
      },
      "directive": null,
      "start": 140,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 149
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 153,
              "end": 155
            }
          ],
          "start": 152,
          "end": 156
        },
        "start": 148,
        "end": 156
      },
      "directive": null,
      "start": 148,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 159
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 162,
          "end": 163
        },
        "start": 158,
        "end": 163
      },
      "directive": null,
      "start": 158,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 166
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 169,
          "end": 171
        },
        "start": 165,
        "end": 171
      },
      "directive": null,
      "start": 165,
      "end": 172
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 199
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 202,
        "end": 205
      },
      "expression": false,
      "start": 189,
      "end": 205
    },
    {
      "type": "EmptyStatement",
      "start": 205,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 208
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "start": 207,
        "end": 212
      },
      "directive": null,
      "start": 207,
      "end": 213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 226
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Callable",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 238
              },
              "typeArguments": null,
              "start": 230,
              "end": 238
            },
            "start": 228,
            "end": 238
          },
          "start": 227,
          "end": 238
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 240,
        "end": 243
      },
      "expression": false,
      "start": 215,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 262
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 263,
            "end": 265
          }
        ],
        "optional": false,
        "start": 260,
        "end": 266
      },
      "directive": null,
      "start": 260,
      "end": 267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 270
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 272,
                "end": 274
              }
            ],
            "start": 271,
            "end": 275
          }
        ],
        "optional": false,
        "start": 268,
        "end": 276
      },
      "directive": null,
      "start": 268,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 280
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 281,
            "end": 282
          }
        ],
        "optional": false,
        "start": 278,
        "end": 283
      },
      "directive": null,
      "start": 278,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 287
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 288,
            "end": 290
          }
        ],
        "optional": false,
        "start": 285,
        "end": 291
      },
      "directive": null,
      "start": 285,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 312
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 314
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 318,
              "end": 321
            },
            "id": null,
            "generator": false,
            "start": 313,
            "end": 321
          }
        ],
        "optional": false,
        "start": 310,
        "end": 322
      },
      "directive": null,
      "start": 310,
      "end": 323
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 323
}
```
