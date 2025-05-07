__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 381,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 29,
        "decorators": [],
        "name": "getSpecifier",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 40,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 33,
          "end": 40
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 73,
            "decorators": [],
            "name": "whatToLoad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 73,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 66,
                "end": 73
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "ImportExpression",
        "start": 123,
        "end": 145,
        "options": null,
        "source": {
          "type": "CallExpression",
          "start": 130,
          "end": 144,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 130,
            "end": 142,
            "decorators": [],
            "name": "getSpecifier",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 156,
            "end": 178,
            "options": null,
            "source": {
              "type": "CallExpression",
              "start": 163,
              "end": 177,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 163,
                "end": 175,
                "decorators": [],
                "name": "getSpecifier",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 191,
            "end": 241,
            "options": null,
            "source": {
              "type": "ConditionalExpression",
              "start": 198,
              "end": 240,
              "alternate": {
                "type": "Literal",
                "start": 228,
                "end": 240,
                "raw": "\"defaulPath\"",
                "value": "defaulPath",
                "regex": null,
                "bigint": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 211,
                "end": 225,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 223,
                  "decorators": [],
                  "name": "getSpecifier",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "test": {
                "type": "Identifier",
                "start": 198,
                "end": 208,
                "decorators": [],
                "name": "whatToLoad",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 306,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 305,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 250,
            "end": 304,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 258,
              "end": 304,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 264,
                  "end": 282,
                  "argument": {
                    "type": "CallExpression",
                    "start": 271,
                    "end": 281,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 271,
                      "end": 279,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 275,
                        "decorators": [],
                        "name": "zero",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 279,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 250,
                "end": 254,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 242,
          "end": 249,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 242,
            "end": 244,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 343,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 314,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 317,
            "end": 343,
            "options": null,
            "source": {
              "type": "ArrayExpression",
              "start": 324,
              "end": 342,
              "elements": [
                {
                  "type": "Literal",
                  "start": 325,
                  "end": 332,
                  "raw": "\"path1\"",
                  "value": "path1",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 334,
                  "end": 341,
                  "raw": "\"path2\"",
                  "value": "path2",
                  "regex": null,
                  "bigint": null
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ImportExpression",
            "start": 354,
            "end": 380,
            "options": null,
            "source": {
              "type": "ArrowFunctionExpression",
              "start": 361,
              "end": 379,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 365,
                "end": 379,
                "raw": "\"PathToModule\"",
                "value": "PathToModule",
                "regex": null,
                "bigint": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
