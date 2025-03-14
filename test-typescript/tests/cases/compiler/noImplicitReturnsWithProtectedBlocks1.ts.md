noImplicitReturnsWithProtectedBlocks1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "log",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 37,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 39,
      "end": 70,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "get",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 69,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 63,
          "end": 69
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 186,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 186,
        "body": [
          {
            "type": "TryStatement",
            "start": 104,
            "end": 184,
            "block": {
              "type": "BlockStatement",
              "start": 108,
              "end": 137,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 118,
                  "end": 131,
                  "argument": {
                    "type": "CallExpression",
                    "start": 125,
                    "end": 130,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 128,
                      "decorators": [],
                      "name": "get",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 150,
              "end": 184,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 160,
                  "end": 178,
                  "expression": {
                    "type": "CallExpression",
                    "start": 160,
                    "end": 177,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 164,
                        "end": 176,
                        "raw": "\"in finally\"",
                        "value": "in finally"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 163,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "handler": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 86,
        "decorators": [],
        "name": "main1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 89,
        "end": 97,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 91,
          "end": 97
        }
      }
    }
  ],
  "sourceType": "script"
}
```
