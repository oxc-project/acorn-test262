__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 261,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 48,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 22,
        "decorators": [],
        "name": "takesCallback",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 42,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 33,
              "end": 42,
              "params": [
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 261,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 260,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 69,
            "end": 258,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 245,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 237,
                          "end": 245,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 239,
                            "end": 245
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "start": 248,
                        "end": 250,
                        "raw": "10",
                        "value": 10,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 64,
          "decorators": [],
          "name": "takesCallback",
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
