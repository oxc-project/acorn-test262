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
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
    },
    {
      "type": "TSDeclareFunction",
      "start": 13,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "name": "use",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 40,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 40,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 37,
              "end": 40
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                    "id": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 84,
                "end": 91,
                "expression": {
                  "type": "CallExpression",
                  "start": 84,
                  "end": 90,
                  "callee": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 87,
                    "name": "use",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "directive": null
              },
              {
                "type": "FunctionDeclaration",
                "start": 97,
                "end": 192,
                "id": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                              "id": {
                                "type": "Identifier",
                                "start": 138,
                                "end": 139,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 153,
                          "end": 160,
                          "expression": {
                            "type": "CallExpression",
                            "start": 153,
                            "end": 159,
                            "callee": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 156,
                              "name": "use",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
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
                        "callee": {
                          "type": "Identifier",
                          "start": 179,
                          "end": 182,
                          "name": "use",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 183,
                            "end": 184,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
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
              "callee": {
                "type": "Identifier",
                "start": 199,
                "end": 202,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 214,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 214,
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 211,
          "name": "use",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
