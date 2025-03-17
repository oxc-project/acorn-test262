__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 284,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 46,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 26,
            "end": 44,
            "params": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 37,
                "decorators": [],
                "name": "x",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 31,
                    "end": 37
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 43,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 39,
                "end": 43
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "ICallback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 78,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 78,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 61,
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 62,
          "end": 74,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 74,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 74,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "decorators": [],
                "name": "ICallback",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 97,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 97,
                  "decorators": [],
                  "name": "ICallback",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 100,
            "end": 115,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 113,
              "end": 115,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 111,
                "decorators": [],
                "name": "z",
                "optional": true,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 133,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 133,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 133,
                  "decorators": [],
                  "name": "ICallback",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 136,
            "end": 151,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 149,
              "end": 151,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 147,
                "decorators": [],
                "name": "z",
                "optional": true,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 160,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 160,
        "arguments": [
          {
            "type": "Identifier",
            "start": 157,
            "end": 159,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 152,
          "end": 156,
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 175,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 167,
        "end": 175,
        "arguments": [
          {
            "type": "Identifier",
            "start": 172,
            "end": 174,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 167,
          "end": 171,
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 201,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 201,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 187,
            "end": 200,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 198,
              "end": 200,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 182,
          "end": 186,
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 253,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 232,
        "end": 253,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 237,
            "end": 252,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 250,
              "end": 252,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 246,
                "end": 248,
                "decorators": [],
                "name": "z",
                "optional": true,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 232,
          "end": 236,
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
