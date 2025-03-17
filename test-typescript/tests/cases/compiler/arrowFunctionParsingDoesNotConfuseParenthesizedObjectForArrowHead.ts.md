__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 76,
  "end": 564,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 102,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 102,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 95,
                "end": 102
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 122,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 561,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 135,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 138,
            "end": 561,
            "async": false,
            "body": {
              "type": "ObjectExpression",
              "start": 145,
              "end": 560,
              "properties": [
                {
                  "type": "Property",
                  "start": 255,
                  "end": 267,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 259,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "UnaryExpression",
                    "start": 261,
                    "end": 267,
                    "argument": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 267,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "Property",
                  "start": 317,
                  "end": 558,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 320,
                    "decorators": [],
                    "name": "run",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 322,
                    "end": 558,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 328,
                      "end": 558,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 493,
                          "end": 525,
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 504,
                            "end": 525,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 506,
                                "end": 523,
                                "argument": {
                                  "type": "Literal",
                                  "start": 513,
                                  "end": 522,
                                  "raw": "'special'",
                                  "value": "special"
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "UnaryExpression",
                            "start": 496,
                            "end": 502,
                            "argument": {
                              "type": "CallExpression",
                              "start": 497,
                              "end": 502,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 497,
                                "end": 500,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 497,
                                  "end": 498,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 500,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "operator": "!",
                            "prefix": true
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 535,
                          "end": 552,
                          "argument": {
                            "type": "Literal",
                            "start": 542,
                            "end": 551,
                            "raw": "'default'",
                            "value": "default"
                          }
                        }
                      ]
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
