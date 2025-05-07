__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 16,
        "raw": "0",
        "value": 0,
        "regex": null,
        "bigint": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 16,
        "raw": "1",
        "value": 1,
        "regex": null,
        "bigint": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 25,
        "raw": "'fallback'",
        "value": "fallback",
        "regex": null,
        "bigint": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 254,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 254,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 254,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 253,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "AwaitExpression",
              "start": 19,
              "end": 253,
              "argument": {
                "type": "CallExpression",
                "start": 25,
                "end": 253,
                "arguments": [],
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 26,
                  "end": 250,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 38,
                    "end": 250,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 42,
                        "end": 62,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 48,
                            "end": 61,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 48,
                              "end": 57,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 49,
                                "end": 57,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 51,
                                  "end": 57
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "start": 60,
                              "end": 61,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      {
                        "type": "SwitchStatement",
                        "start": 65,
                        "end": 248,
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "start": 82,
                            "end": 130,
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "start": 96,
                                "end": 130,
                                "argument": {
                                  "type": "AwaitExpression",
                                  "start": 103,
                                  "end": 129,
                                  "argument": {
                                    "type": "ImportExpression",
                                    "start": 109,
                                    "end": 129,
                                    "options": null,
                                    "source": {
                                      "type": "Literal",
                                      "start": 116,
                                      "end": 128,
                                      "raw": "\"./case0.js\"",
                                      "value": "./case0.js",
                                      "regex": null,
                                      "bigint": null
                                    }
                                  }
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "start": 87,
                              "end": 88,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "start": 135,
                            "end": 183,
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "start": 149,
                                "end": 183,
                                "argument": {
                                  "type": "AwaitExpression",
                                  "start": 156,
                                  "end": 182,
                                  "argument": {
                                    "type": "ImportExpression",
                                    "start": 162,
                                    "end": 182,
                                    "options": null,
                                    "source": {
                                      "type": "Literal",
                                      "start": 169,
                                      "end": 181,
                                      "raw": "\"./case1.js\"",
                                      "value": "./case1.js",
                                      "regex": null,
                                      "bigint": null
                                    }
                                  }
                                }
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "start": 140,
                              "end": 141,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "start": 188,
                            "end": 244,
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "start": 203,
                                "end": 244,
                                "argument": {
                                  "type": "AwaitExpression",
                                  "start": 210,
                                  "end": 243,
                                  "argument": {
                                    "type": "ImportExpression",
                                    "start": 216,
                                    "end": 243,
                                    "options": null,
                                    "source": {
                                      "type": "Literal",
                                      "start": 223,
                                      "end": 242,
                                      "raw": "\"./caseFallback.js\"",
                                      "value": "./caseFallback.js",
                                      "regex": null,
                                      "bigint": null
                                    }
                                  }
                                }
                              }
                            ],
                            "test": null
                          }
                        ],
                        "discriminant": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                },
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
