__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 422,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 158,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 61,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "name": "bar1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 61,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 61,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 156,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 156,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 85,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 156,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 160,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 172,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 197,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 198,
          "end": 206,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 206,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 200,
              "end": 206
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 208,
        "end": 219,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 209,
            "end": 218,
            "argument": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 229,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 240,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 246,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 246,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 243,
              "end": 246
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 248,
        "end": 260,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 250,
            "end": 259,
            "argument": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 271,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 283,
        "name": "Goo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 284,
          "end": 292,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 285,
            "end": 292,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 286,
              "end": 292
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 325,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 345,
        "name": "Gar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 346,
          "end": 354,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 347,
            "end": 354,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 348,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 348,
                "end": 354,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 377,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 386,
            "end": 400,
            "callee": {
              "type": "Identifier",
              "start": 390,
              "end": 393,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 394,
                "end": 399,
                "value": "hey",
                "raw": "\"hey\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 414,
      "expression": {
        "type": "CallExpression",
        "start": 404,
        "end": 413,
        "callee": {
          "type": "MemberExpression",
          "start": 404,
          "end": 411,
          "object": {
            "type": "Identifier",
            "start": 404,
            "end": 406,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 407,
            "end": 411,
            "name": "bar1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 421,
      "expression": {
        "type": "CallExpression",
        "start": 415,
        "end": 420,
        "callee": {
          "type": "Identifier",
          "start": 415,
          "end": 418,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
