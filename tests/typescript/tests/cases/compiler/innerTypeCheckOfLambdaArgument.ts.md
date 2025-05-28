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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 22,
        "decorators": [],
        "name": "takesCallback",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "typeParameters": null,
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
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 44,
        "end": 48,
        "body": []
      },
      "expression": false
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
          "decorators": [],
          "name": "takesCallback",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 69,
            "end": 258,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 87,
              "end": 258,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 232,
                  "end": 251,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 236,
                      "end": 250,
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
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
