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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "decorators": [],
        "name": "simple",
        "optional": false,
        "typeAnnotation": null
      },
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
              },
              "typeParameters": null
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 107,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 79,
        "end": 107,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 86,
            "end": 106,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 104,
              "end": 106,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 79,
          "end": 85,
          "decorators": [],
          "name": "simple",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 136,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 136,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 115,
            "end": 135,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 133,
              "end": 135,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 114,
          "decorators": [],
          "name": "simple",
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
