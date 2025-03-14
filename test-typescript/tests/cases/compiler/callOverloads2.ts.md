callOverloads2.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 158,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 61,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "bar1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 61,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 61,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 156,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 156,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 85,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 82,
                      "end": 85
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 160,
      "end": 175,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 172,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 186,
      "end": 219,
      "async": false,
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
              "decorators": [],
              "name": "s",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 197,
        "decorators": [],
        "name": "F1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 198,
          "end": 206,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 206,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 200,
              "end": 206
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 229,
      "end": 260,
      "async": false,
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
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 240,
        "decorators": [],
        "name": "F1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 241,
          "end": 246,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 246,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 243,
              "end": 246
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 271,
      "end": 294,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 283,
        "decorators": [],
        "name": "Goo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 284,
          "end": 292,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 285,
            "end": 292,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 286,
              "end": 292
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 325,
      "end": 356,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 345,
        "decorators": [],
        "name": "Gar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 346,
          "end": 354,
          "decorators": [],
          "name": "s",
          "optional": false,
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
                "decorators": [],
                "name": "String",
                "optional": false
              }
            }
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 383,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 386,
            "end": 400,
            "arguments": [
              {
                "type": "Literal",
                "start": 394,
                "end": 399,
                "raw": "\"hey\"",
                "value": "hey"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 390,
              "end": 393,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 414,
      "expression": {
        "type": "CallExpression",
        "start": 404,
        "end": 413,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 404,
          "end": 411,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 404,
            "end": 406,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 407,
            "end": 411,
            "decorators": [],
            "name": "bar1",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 421,
      "expression": {
        "type": "CallExpression",
        "start": 415,
        "end": 420,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 415,
          "end": 418,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
