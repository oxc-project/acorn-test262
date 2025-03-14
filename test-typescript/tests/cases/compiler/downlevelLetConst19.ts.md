__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict"
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 13,
      "end": 42,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "use",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 40,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 40,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 37,
              "end": 40
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 207,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 207,
        "body": [
          {
            "type": "BlockStatement",
            "start": 67,
            "end": 196,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 73,
                "end": 79,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 77,
                    "end": 78,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "let"
              },
              {
                "type": "ExpressionStatement",
                "start": 84,
                "end": 91,
                "expression": {
                  "type": "CallExpression",
                  "start": 84,
                  "end": 90,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 87,
                    "decorators": [],
                    "name": "use",
                    "optional": false
                  },
                  "optional": false
                }
              },
              {
                "type": "FunctionDeclaration",
                "start": 97,
                "end": 192,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 110,
                  "end": 192,
                  "body": [
                    {
                      "type": "BlockStatement",
                      "start": 120,
                      "end": 170,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 134,
                          "end": 140,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 138,
                              "end": 139,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 138,
                                "end": 139,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "init": null
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 153,
                          "end": 160,
                          "expression": {
                            "type": "CallExpression",
                            "start": 153,
                            "end": 159,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 156,
                              "decorators": [],
                              "name": "use",
                              "optional": false
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 179,
                      "end": 186,
                      "expression": {
                        "type": "CallExpression",
                        "start": 179,
                        "end": 185,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 183,
                            "end": 184,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 182,
                          "decorators": [],
                          "name": "use",
                          "optional": false
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "params": []
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 199,
            "end": 205,
            "expression": {
              "type": "CallExpression",
              "start": 199,
              "end": 205,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 199,
                "end": 202,
                "decorators": [],
                "name": "use",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 214,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 214,
        "arguments": [
          {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 211,
          "decorators": [],
          "name": "use",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
