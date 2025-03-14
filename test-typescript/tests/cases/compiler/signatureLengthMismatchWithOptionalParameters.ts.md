__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 53,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "callee",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 37,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 37,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 19,
              "end": 37,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 19,
                  "end": 25
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 28,
                  "end": 37
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 39,
          "end": 48,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 101,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 70,
        "decorators": [],
        "name": "caller",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 71,
          "end": 96,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 96,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 76,
              "end": 96,
              "params": [
                {
                  "type": "Identifier",
                  "start": 77,
                  "end": 87,
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 81,
                      "end": 87
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 89,
                "end": 96,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 92,
                  "end": 96
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 118,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 117,
        "arguments": [
          {
            "type": "Identifier",
            "start": 110,
            "end": 116,
            "decorators": [],
            "name": "callee",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 103,
          "end": 109,
          "decorators": [],
          "name": "caller",
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
