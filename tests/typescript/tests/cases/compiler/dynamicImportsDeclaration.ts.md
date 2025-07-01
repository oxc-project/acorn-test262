__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 15,
        "end": 16
      },
      "exportKind": "value",
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 15,
        "end": 16
      },
      "exportKind": "value",
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": "fallback",
        "raw": "'fallback'",
        "start": 15,
        "end": 25
      },
      "exportKind": "value",
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 51,
                                  "end": 57
                                },
                                "start": 49,
                                "end": 57
                              },
                              "start": 48,
                              "end": 57
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 60,
                              "end": 61
                            },
                            "definite": false,
                            "start": 48,
                            "end": 61
                          }
                        ],
                        "declare": false,
                        "start": 42,
                        "end": 62
                      },
                      {
                        "type": "SwitchStatement",
                        "discriminant": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 74
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 87,
                              "end": 88
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./case0.js",
                                      "raw": "\"./case0.js\"",
                                      "start": 116,
                                      "end": 128
                                    },
                                    "options": null,
                                    "phase": null,
                                    "start": 109,
                                    "end": 129
                                  },
                                  "start": 103,
                                  "end": 129
                                },
                                "start": 96,
                                "end": 130
                              }
                            ],
                            "start": 82,
                            "end": 130
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 140,
                              "end": 141
                            },
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./case1.js",
                                      "raw": "\"./case1.js\"",
                                      "start": 169,
                                      "end": 181
                                    },
                                    "options": null,
                                    "phase": null,
                                    "start": 162,
                                    "end": 182
                                  },
                                  "start": 156,
                                  "end": 182
                                },
                                "start": 149,
                                "end": 183
                              }
                            ],
                            "start": 135,
                            "end": 183
                          },
                          {
                            "type": "SwitchCase",
                            "test": null,
                            "consequent": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./caseFallback.js",
                                      "raw": "\"./caseFallback.js\"",
                                      "start": 223,
                                      "end": 242
                                    },
                                    "options": null,
                                    "phase": null,
                                    "start": 216,
                                    "end": 243
                                  },
                                  "start": 210,
                                  "end": 243
                                },
                                "start": 203,
                                "end": 244
                              }
                            ],
                            "start": 188,
                            "end": 244
                          }
                        ],
                        "start": 65,
                        "end": 248
                      }
                    ],
                    "start": 38,
                    "end": 250
                  },
                  "id": null,
                  "generator": false,
                  "start": 26,
                  "end": 250
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 25,
                "end": 253
              },
              "start": 19,
              "end": 253
            },
            "definite": false,
            "start": 13,
            "end": 253
          }
        ],
        "declare": false,
        "start": 7,
        "end": 254
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 254
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 254
}
```
