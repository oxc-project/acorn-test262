generatorTypeCheck27.ts
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
      "async": false,
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
              "argument": {
                "type": "CallExpression",
                "start": 69,
                "end": 121,
                "arguments": [],
                "callee": {
                  "type": "FunctionExpression",
                  "start": 69,
                  "end": 118,
                  "async": false,
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
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 98,
                            "end": 111,
                            "async": false,
                            "body": {
                              "type": "MemberExpression",
                              "start": 103,
                              "end": 111,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 104,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 105,
                                "end": 111,
                                "decorators": [],
                                "name": "length",
                                "optional": false
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 98,
                                "end": 99,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            ]
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                },
                "optional": false
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 54,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 15,
          "end": 54,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 31,
            "end": 54,
            "params": [
              {
                "type": "TSFunctionType",
                "start": 32,
                "end": 53,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 33,
                    "end": 42,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 42,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 36,
                        "end": 42
                      }
                    }
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 15,
            "end": 31,
            "decorators": [],
            "name": "IterableIterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
