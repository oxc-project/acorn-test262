__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 15,
  "end": 136,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 15,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "decorators": [],
        "name": "simple",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 72,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 72,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 42,
              "end": 72,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 63,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 57,
                      "end": 63
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 65,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 68,
                  "end": 72
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 75,
          "end": 77,
          "members": []
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 79,
        "end": 107,
        "callee": {
          "type": "Identifier",
          "start": 79,
          "end": 85,
          "decorators": [],
          "name": "simple",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 86,
            "end": 106,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 96,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 96,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 90,
                    "end": 96
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 104,
              "end": 106,
              "body": []
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 136,
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 114,
          "decorators": [],
          "name": "simple",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 115,
            "end": 135,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 119,
                "end": 128,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 120,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 122,
                    "end": 128
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 133,
              "end": 135,
              "body": []
            },
            "id": null,
            "generator": false
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
