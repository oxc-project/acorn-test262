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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "alert",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 152,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 152,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 67,
                  "decorators": [],
                  "name": "doStuff",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 69,
                  "end": 150,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 83,
                    "end": 150,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 89,
                      "end": 150,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 99,
                          "end": 113,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 103,
                              "end": 112,
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
                                "value": 2,
                                "raw": "2"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 122,
                          "end": 144,
                          "argument": {
                            "type": "CallExpression",
                            "start": 129,
                            "end": 143,
                            "callee": {
                              "type": "Identifier",
                              "start": 129,
                              "end": 137,
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 138,
                                "end": 142
                              }
                            ],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 153,
        "end": 184,
        "callee": {
          "type": "Identifier",
          "start": 153,
          "end": 158,
          "decorators": [],
          "name": "alert",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 159,
            "end": 183,
            "callee": {
              "type": "MemberExpression",
              "start": 159,
              "end": 168,
              "object": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 168,
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 169,
                "end": 182,
                "expression": true,
                "async": false,
                "typeParameters": null,
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
                "body": {
                  "type": "CallExpression",
                  "start": 174,
                  "end": 182,
                  "callee": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 179,
                    "decorators": [],
                    "name": "alert",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
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
                  "optional": false
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
