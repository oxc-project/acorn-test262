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
        "value": 0,
        "raw": "0"
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
        "value": 1,
        "raw": "1"
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
        "value": "fallback",
        "raw": "'fallback'"
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 254,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 253,
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
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 26,
                  "end": 250,
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 38,
                    "end": 250,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 42,
                        "end": 62,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 48,
                            "end": 61,
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
                              "value": 0,
                              "raw": "0"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      {
                        "type": "SwitchStatement",
                        "start": 65,
                        "end": 248,
                        "discriminant": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "start": 82,
                            "end": 130,
                            "test": {
                              "type": "Literal",
                              "start": 87,
                              "end": 88,
                              "value": 0,
                              "raw": "0"
                            },
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
                                    "source": {
                                      "type": "Literal",
                                      "start": 116,
                                      "end": 128,
                                      "value": "./case0.js",
                                      "raw": "\"./case0.js\""
                                    },
                                    "options": null,
                                    "phase": null
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "type": "SwitchCase",
                            "start": 135,
                            "end": 183,
                            "test": {
                              "type": "Literal",
                              "start": 140,
                              "end": 141,
                              "value": 1,
                              "raw": "1"
                            },
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
                                    "source": {
                                      "type": "Literal",
                                      "start": 169,
                                      "end": 181,
                                      "value": "./case1.js",
                                      "raw": "\"./case1.js\""
                                    },
                                    "options": null,
                                    "phase": null
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "type": "SwitchCase",
                            "start": 188,
                            "end": 244,
                            "test": null,
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
                                    "source": {
                                      "type": "Literal",
                                      "start": 223,
                                      "end": 242,
                                      "value": "./caseFallback.js",
                                      "raw": "\"./caseFallback.js\""
                                    },
                                    "options": null,
                                    "phase": null
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
