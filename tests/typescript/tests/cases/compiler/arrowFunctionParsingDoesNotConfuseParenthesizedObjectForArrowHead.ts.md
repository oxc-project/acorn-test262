__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 76,
  "end": 563,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 103,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 102,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 123,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 122,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 562,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 561,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 145,
              "end": 560,
              "properties": [
                {
                  "type": "Property",
                  "start": 255,
                  "end": 267,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 259,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "start": 261,
                    "end": 267,
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 267,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 317,
                  "end": 558,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 320,
                    "decorators": [],
                    "name": "run",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 322,
                    "end": 558,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 328,
                      "end": 558,
                      "body": [
                        {
                          "type": "IfStatement",
                          "start": 493,
                          "end": 525,
                          "test": {
                            "type": "UnaryExpression",
                            "start": 496,
                            "end": 502,
                            "operator": "!",
                            "argument": {
                              "type": "CallExpression",
                              "start": 497,
                              "end": 502,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 497,
                                "end": 500,
                                "object": {
                                  "type": "Identifier",
                                  "start": 497,
                                  "end": 498,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 500,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "prefix": true
                          },
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
                                  "value": "special",
                                  "raw": "'special'"
                                }
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 535,
                          "end": 552,
                          "argument": {
                            "type": "Literal",
                            "start": 542,
                            "end": 551,
                            "value": "default",
                            "raw": "'default'"
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
