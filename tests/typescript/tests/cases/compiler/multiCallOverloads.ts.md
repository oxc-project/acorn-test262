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
        "name": "ICallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 31,
                    "end": 37
                  },
                  "start": 29,
                  "end": 37
                },
                "start": 27,
                "end": 37
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 39,
                "end": 43
              },
              "start": 38,
              "end": 43
            },
            "start": 26,
            "end": 44
          }
        ],
        "start": 20,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 61
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ICallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 74
              },
              "typeArguments": null,
              "start": 65,
              "end": 74
            },
            "start": 63,
            "end": 74
          },
          "start": 62,
          "end": 74
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 76,
        "end": 78
      },
      "expression": false,
      "start": 48,
      "end": 78
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ICallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 97
                },
                "typeArguments": null,
                "start": 88,
                "end": 97
              },
              "start": 86,
              "end": 97
            },
            "start": 84,
            "end": 97
          },
          "init": {
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
                "name": "z",
                "optional": true,
                "typeAnnotation": null,
                "start": 109,
                "end": 111
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 113,
              "end": 115
            },
            "expression": false,
            "start": 100,
            "end": 115
          },
          "definite": false,
          "start": 84,
          "end": 115
        }
      ],
      "declare": false,
      "start": 80,
      "end": 115
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ICallback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 133
                },
                "typeArguments": null,
                "start": 124,
                "end": 133
              },
              "start": 122,
              "end": 133
            },
            "start": 120,
            "end": 133
          },
          "init": {
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
                "name": "z",
                "optional": true,
                "typeAnnotation": null,
                "start": 145,
                "end": 147
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 149,
              "end": 151
            },
            "expression": false,
            "start": 136,
            "end": 151
          },
          "definite": false,
          "start": 120,
          "end": 151
        }
      ],
      "declare": false,
      "start": 116,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 156
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 159
          }
        ],
        "optional": false,
        "start": 152,
        "end": 160
      },
      "directive": null,
      "start": 152,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 171
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 174
          }
        ],
        "optional": false,
        "start": 167,
        "end": 175
      },
      "directive": null,
      "start": 167,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 198,
              "end": 200
            },
            "expression": false,
            "start": 187,
            "end": 200
          }
        ],
        "optional": false,
        "start": 182,
        "end": 201
      },
      "directive": null,
      "start": 182,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "load",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 236
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "name": "z",
                "optional": true,
                "typeAnnotation": null,
                "start": 246,
                "end": 248
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 250,
              "end": 252
            },
            "expression": false,
            "start": 237,
            "end": 252
          }
        ],
        "optional": false,
        "start": 232,
        "end": 253
      },
      "directive": null,
      "start": 232,
      "end": 253
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 283
}
```
