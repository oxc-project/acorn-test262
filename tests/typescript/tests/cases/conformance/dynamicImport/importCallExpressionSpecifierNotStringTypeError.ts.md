__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getSpecifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 29
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 33,
          "end": 40
        },
        "start": 31,
        "end": 40
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 41
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
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 66,
                "end": 73
              },
              "start": 64,
              "end": 73
            },
            "start": 54,
            "end": 73
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 73
        }
      ],
      "declare": true,
      "start": 42,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 142
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 130,
          "end": 144
        },
        "options": null,
        "phase": null,
        "start": 123,
        "end": 145
      },
      "directive": null,
      "start": 123,
      "end": 146
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 153
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 163,
              "end": 177
            },
            "options": null,
            "phase": null,
            "start": 156,
            "end": 178
          },
          "definite": false,
          "start": 151,
          "end": 178
        }
      ],
      "declare": false,
      "start": 147,
      "end": 179
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 188
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "whatToLoad",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 208
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 223
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 211,
                "end": 225
              },
              "alternate": {
                "type": "Literal",
                "value": "defaulPath",
                "raw": "\"defaulPath\"",
                "start": 228,
                "end": 240
              },
              "start": 198,
              "end": 240
            },
            "options": null,
            "phase": null,
            "start": 191,
            "end": 241
          },
          "definite": false,
          "start": 186,
          "end": 241
        }
      ],
      "declare": false,
      "start": 180,
      "end": 241
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "optional": false,
          "computed": false,
          "start": 242,
          "end": 249
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
                "name": "zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 254
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "zero",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 275
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 279
                      },
                      "optional": false,
                      "computed": false,
                      "start": 271,
                      "end": 279
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 271,
                    "end": 281
                  },
                  "start": 264,
                  "end": 282
                }
              ],
              "start": 258,
              "end": 304
            },
            "id": null,
            "generator": false,
            "start": 250,
            "end": 304
          }
        ],
        "optional": false,
        "start": 242,
        "end": 305
      },
      "directive": null,
      "start": 242,
      "end": 306
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 314
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "path1",
                  "raw": "\"path1\"",
                  "start": 325,
                  "end": 332
                },
                {
                  "type": "Literal",
                  "value": "path2",
                  "raw": "\"path2\"",
                  "start": 334,
                  "end": 341
                }
              ],
              "start": 324,
              "end": 342
            },
            "options": null,
            "phase": null,
            "start": 317,
            "end": 343
          },
          "definite": false,
          "start": 312,
          "end": 343
        }
      ],
      "declare": false,
      "start": 308,
      "end": 344
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
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "PathToModule",
                "raw": "\"PathToModule\"",
                "start": 365,
                "end": 379
              },
              "id": null,
              "generator": false,
              "start": 361,
              "end": 379
            },
            "options": null,
            "phase": null,
            "start": 354,
            "end": 380
          },
          "definite": false,
          "start": 349,
          "end": 380
        }
      ],
      "declare": false,
      "start": 345,
      "end": 381
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 381
}
```
