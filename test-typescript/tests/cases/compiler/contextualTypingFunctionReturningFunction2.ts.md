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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 28,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 28,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 87,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 87,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 60,
              "end": 87,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 87,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 66,
                  "end": 87,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 67,
                      "end": 76,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 68,
                        "end": 76,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 70,
                          "end": 76
                        }
                      }
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
          }
        }
      ],
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
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 99,
            "end": 111,
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 105,
              "end": 111,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "decorators": [],
                "name": "n",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
