__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 95,
                "end": 102
              },
              "start": 93,
              "end": 102
            },
            "start": 88,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 102
        }
      ],
      "declare": true,
      "start": 76,
      "end": 103
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              },
              "start": 117,
              "end": 122
            },
            "start": 116,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 122
        }
      ],
      "declare": true,
      "start": 104,
      "end": 123
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 135
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 259
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 267
                    },
                    "prefix": true,
                    "start": 261,
                    "end": 267
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 255,
                  "end": 267
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "run",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 320
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 497,
                                  "end": 498
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 499,
                                  "end": 500
                                },
                                "optional": false,
                                "computed": false,
                                "start": 497,
                                "end": 500
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 497,
                              "end": 502
                            },
                            "prefix": true,
                            "start": 496,
                            "end": 502
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "special",
                                  "raw": "'special'",
                                  "start": 513,
                                  "end": 522
                                },
                                "start": 506,
                                "end": 523
                              }
                            ],
                            "start": 504,
                            "end": 525
                          },
                          "alternate": null,
                          "start": 493,
                          "end": 525
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "default",
                            "raw": "'default'",
                            "start": 542,
                            "end": 551
                          },
                          "start": 535,
                          "end": 552
                        }
                      ],
                      "start": 328,
                      "end": 558
                    },
                    "id": null,
                    "generator": false,
                    "start": 322,
                    "end": 558
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 317,
                  "end": 558
                }
              ],
              "start": 145,
              "end": 560
            },
            "id": null,
            "generator": false,
            "start": 138,
            "end": 561
          },
          "definite": false,
          "start": 131,
          "end": 561
        }
      ],
      "declare": false,
      "start": 125,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 76,
  "end": 563
}
```
