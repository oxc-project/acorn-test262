__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 124,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 61,
            "end": 122,
            "expression": {
              "type": "YieldExpression",
              "start": 61,
              "end": 121,
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "start": 69,
                "end": 121,
                "callee": {
                  "type": "FunctionExpression",
                  "start": 69,
                  "end": 118,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 82,
                    "end": 118,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 92,
                        "end": 112,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 92,
                          "end": 111,
                          "delegate": false,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 98,
                            "end": 111,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 98,
                                "end": 99,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "MemberExpression",
                              "start": 103,
                              "end": 111,
                              "object": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 104,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 105,
                                "end": 111,
                                "name": "length",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 54,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 54,
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 31,
            "name": "IterableIterator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 31,
            "end": 54,
            "params": [
              {
                "type": "TSFunctionType",
                "start": 32,
                "end": 53,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 33,
                    "end": 42,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  }
                }
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
