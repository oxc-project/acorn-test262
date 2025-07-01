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
        "name": "takesCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 39,
                  "end": 42
                },
                "start": 37,
                "end": 42
              },
              "start": 33,
              "end": 42
            },
            "start": 31,
            "end": 42
          },
          "start": 23,
          "end": 42
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 44,
        "end": 48
      },
      "expression": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takesCallback",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 64
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 83
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 239,
                            "end": 245
                          },
                          "start": 237,
                          "end": 245
                        },
                        "start": 236,
                        "end": 245
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 248,
                        "end": 250
                      },
                      "definite": false,
                      "start": 236,
                      "end": 250
                    }
                  ],
                  "declare": false,
                  "start": 232,
                  "end": 251
                }
              ],
              "start": 87,
              "end": 258
            },
            "expression": false,
            "start": 69,
            "end": 258
          }
        ],
        "optional": false,
        "start": 51,
        "end": 260
      },
      "directive": null,
      "start": 51,
      "end": 261
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 261
}
```
