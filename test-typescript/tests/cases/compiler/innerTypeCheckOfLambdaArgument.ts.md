__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 262,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 22,
        "name": "takesCallback",
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
          "start": 23,
          "end": 42,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 42,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 39,
                  "end": 42
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 48,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 261,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 260,
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 64,
          "name": "takesCallback",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 69,
            "end": 258,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "name": "inner",
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
                "start": 84,
                "end": 85,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 87,
              "end": 258,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 232,
                  "end": 251,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 236,
                      "end": 250,
                      "id": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 245,
                        "name": "k",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 237,
                          "end": 245,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 239,
                            "end": 245
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 248,
                        "end": 250,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
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
