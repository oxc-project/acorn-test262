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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "name": "ICallback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 46,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 26,
            "end": 44,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 37,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 31,
                    "end": 37
                  }
                },
                "decorators": [],
                "optional": true
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 61,
        "name": "load",
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
          "start": 62,
          "end": 74,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 74,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "name": "ICallback",
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
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 78,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 97,
            "name": "f1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 97,
                  "name": "ICallback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 100,
            "end": 115,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 111,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 113,
              "end": 115,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 133,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 124,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 133,
                  "name": "ICallback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 136,
            "end": 151,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 147,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 149,
              "end": 151,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 160,
      "expression": {
        "type": "CallExpression",
        "start": 152,
        "end": 160,
        "callee": {
          "type": "Identifier",
          "start": 152,
          "end": 156,
          "name": "load",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 157,
            "end": 159,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 175,
      "expression": {
        "type": "CallExpression",
        "start": 167,
        "end": 175,
        "callee": {
          "type": "Identifier",
          "start": 167,
          "end": 171,
          "name": "load",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 172,
            "end": 174,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 201,
        "callee": {
          "type": "Identifier",
          "start": 182,
          "end": 186,
          "name": "load",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 187,
            "end": 200,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 198,
              "end": 200,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 253,
      "expression": {
        "type": "CallExpression",
        "start": 232,
        "end": 253,
        "callee": {
          "type": "Identifier",
          "start": 232,
          "end": 236,
          "name": "load",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 237,
            "end": 252,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 246,
                "end": 248,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 250,
              "end": 252,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
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
