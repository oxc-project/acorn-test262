__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 44,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "alert",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 36,
          "decorators": [],
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 36,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 33,
              "end": 36
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 43,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 39,
          "end": 43
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 54,
            "end": 152,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 150,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 67,
                  "decorators": [],
                  "name": "doStuff",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 69,
                  "end": 150,
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 83,
                    "end": 150,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 89,
                      "end": 150,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 99,
                          "end": 113,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 103,
                              "end": 112,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 108,
                                "decorators": [],
                                "name": "_this",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "Literal",
                                "start": 111,
                                "end": 112,
                                "raw": "2",
                                "value": 2
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 122,
                          "end": 144,
                          "argument": {
                            "type": "CallExpression",
                            "start": 129,
                            "end": 143,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 138,
                                "end": 142
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 137,
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
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
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 70,
                      "end": 78,
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 185,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 184,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 159,
            "end": 183,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 169,
                "end": 182,
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "start": 174,
                  "end": 182,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 179,
                    "decorators": [],
                    "name": "alert",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 159,
              "end": 168,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 168,
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 153,
          "end": 158,
          "decorators": [],
          "name": "alert",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
