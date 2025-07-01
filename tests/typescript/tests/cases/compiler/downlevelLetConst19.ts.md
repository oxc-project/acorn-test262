__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 37,
              "end": 40
            },
            "start": 35,
            "end": 40
          },
          "start": 34,
          "end": 40
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 13,
      "end": 42
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 48
        }
      ],
      "declare": false,
      "start": 43,
      "end": 49
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 60
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 77,
                      "end": 78
                    },
                    "init": null,
                    "definite": false,
                    "start": 77,
                    "end": 78
                  }
                ],
                "declare": false,
                "start": 73,
                "end": 79
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 87
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 89
                    }
                  ],
                  "optional": false,
                  "start": 84,
                  "end": 90
                },
                "directive": null,
                "start": 84,
                "end": 91
              },
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 138,
                                "end": 139
                              },
                              "init": null,
                              "definite": false,
                              "start": 138,
                              "end": 139
                            }
                          ],
                          "declare": false,
                          "start": 134,
                          "end": 140
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "use",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 153,
                              "end": 156
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 158
                              }
                            ],
                            "optional": false,
                            "start": 153,
                            "end": 159
                          },
                          "directive": null,
                          "start": 153,
                          "end": 160
                        }
                      ],
                      "start": 120,
                      "end": 170
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 182
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 183,
                            "end": 184
                          }
                        ],
                        "optional": false,
                        "start": 179,
                        "end": 185
                      },
                      "directive": null,
                      "start": 179,
                      "end": 186
                    }
                  ],
                  "start": 110,
                  "end": 192
                },
                "expression": false,
                "start": 97,
                "end": 192
              }
            ],
            "start": 67,
            "end": 196
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 202
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 204
                }
              ],
              "optional": false,
              "start": 199,
              "end": 205
            },
            "directive": null,
            "start": 199,
            "end": 205
          }
        ],
        "start": 63,
        "end": 207
      },
      "expression": false,
      "start": 50,
      "end": 207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 211
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 213
          }
        ],
        "optional": false,
        "start": 208,
        "end": 214
      },
      "directive": null,
      "start": 208,
      "end": 214
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 214
}
```
