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
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
            "decorators": [],
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null
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
          }
        }
      },
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
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 96,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 87,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 96,
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 97,
                      "end": 144,
                      "id": null,
                      "generator": true,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 120,
                                    "end": 121,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "MemberExpression",
                                  "start": 125,
                                  "end": 133,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 125,
                                    "end": 126,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 127,
                                    "end": 133,
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "id": null,
                                "generator": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
