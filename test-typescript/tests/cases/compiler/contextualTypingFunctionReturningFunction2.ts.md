__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "f",
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
          "start": 19,
          "end": 28,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 28,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 29,
        "end": 35,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 31,
          "end": 35
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 37,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "f",
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
          "start": 56,
          "end": 87,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 87,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 60,
              "end": 87,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 87,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 66,
                  "end": 87,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 67,
                      "end": 76,
                      "name": "n",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 68,
                        "end": 76,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 70,
                          "end": 76
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    }
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 94,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 90,
          "end": 94
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 97,
        "end": 112,
        "callee": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 99,
            "end": 111,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 105,
              "end": 111,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
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
