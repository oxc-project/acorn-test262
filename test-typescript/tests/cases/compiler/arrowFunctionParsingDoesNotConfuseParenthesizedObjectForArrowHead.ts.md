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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 102,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 102,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 95,
                "end": 102
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 122,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 135,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 138,
            "end": 561,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "ObjectExpression",
              "start": 145,
              "end": 560,
              "properties": [
                {
                  "type": "Property",
                  "start": 255,
                  "end": 267,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 259,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "start": 261,
                    "end": 267,
                    "operator": "!",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 262,
                      "end": 267,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 317,
                  "end": 558,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 320,
                    "name": "run",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 322,
                    "end": 558,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "prefix": true,
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
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 499,
                                  "end": 500,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
                              "optional": false,
                              "typeArguments": null
                            }
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
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
