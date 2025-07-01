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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 24,
                        "end": 30
                      },
                      "start": 23,
                      "end": 30
                    },
                    "start": 21,
                    "end": 31
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 35,
                            "end": 41
                          },
                          "start": 34,
                          "end": 41
                        },
                        "start": 33,
                        "end": 41
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      },
                      "start": 42,
                      "end": 49
                    },
                    "start": 32,
                    "end": 50
                  }
                ],
                "start": 20,
                "end": 52
              },
              "start": 20,
              "end": 54
            },
            "start": 18,
            "end": 54
          },
          "start": 13,
          "end": 54
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 56,
        "end": 59
      },
      "expression": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "EmptyStatement",
      "start": 59,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 64
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 84,
                        "end": 85
                      },
                      "start": 77,
                      "end": 86
                    }
                  ],
                  "start": 76,
                  "end": 87
                },
                "expression": false,
                "start": 66,
                "end": 87
              },
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 107,
                        "end": 108
                      },
                      "start": 100,
                      "end": 108
                    }
                  ],
                  "start": 99,
                  "end": 109
                },
                "expression": false,
                "start": 89,
                "end": 109
              }
            ],
            "start": 65,
            "end": 110
          }
        ],
        "optional": false,
        "start": 61,
        "end": 111
      },
      "directive": null,
      "start": 61,
      "end": 112
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 112
}
```
