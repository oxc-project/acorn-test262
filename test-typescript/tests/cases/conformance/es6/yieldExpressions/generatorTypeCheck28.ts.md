__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 153,
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
        "end": 153,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 61,
            "end": 151,
            "expression": {
              "type": "YieldExpression",
              "start": 61,
              "end": 150,
              "delegate": true,
              "argument": {
                "type": "ObjectExpression",
                "start": 69,
                "end": 150,
                "properties": [
                  {
                    "type": "Property",
                    "start": 79,
                    "end": 144,
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 96,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 87,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 96,
                        "name": "iterator",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 97,
                      "end": 144,
                      "id": null,
                      "expression": false,
                      "generator": true,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 100,
                        "end": 144,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 114,
                            "end": 134,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 114,
                              "end": 133,
                              "delegate": false,
                              "argument": {
                                "type": "ArrowFunctionExpression",
                                "start": 120,
                                "end": 133,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 120,
                                    "end": 121,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "MemberExpression",
                                  "start": 125,
                                  "end": 133,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 125,
                                    "end": 126,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 127,
                                    "end": 133,
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
                    "kind": "init",
                    "optional": false
                  }
                ]
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
