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
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 24
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 39
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 44,
                                  "end": 50
                                },
                                "start": 42,
                                "end": 50
                              },
                              "start": 41,
                              "end": 50
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 55,
                              "end": 61
                            },
                            "start": 52,
                            "end": 61
                          },
                          "start": 40,
                          "end": 61
                        }
                      ],
                      "start": 39,
                      "end": 62
                    },
                    "start": 31,
                    "end": 62
                  },
                  "start": 28,
                  "end": 62
                },
                "start": 25,
                "end": 62
              }
            ],
            "start": 24,
            "end": 63
          },
          "start": 16,
          "end": 63
        },
        "start": 14,
        "end": 63
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 105,
                                "end": 106
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 110,
                                "end": 111
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 112,
                                "end": 118
                              },
                              "optional": false,
                              "computed": false,
                              "start": 110,
                              "end": 118
                            },
                            "id": null,
                            "generator": false,
                            "start": 105,
                            "end": 118
                          },
                          "start": 99,
                          "end": 118
                        },
                        "directive": null,
                        "start": 99,
                        "end": 119
                      }
                    ],
                    "start": 89,
                    "end": 125
                  },
                  "expression": false,
                  "start": 76,
                  "end": 125
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 76,
                "end": 128
              },
              "start": 70,
              "end": 128
            },
            "directive": null,
            "start": 70,
            "end": 128
          }
        ],
        "start": 64,
        "end": 130
      },
      "expression": false,
      "start": 0,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
