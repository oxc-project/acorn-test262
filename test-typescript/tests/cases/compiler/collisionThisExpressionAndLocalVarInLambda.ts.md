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
        "name": "alert",
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
          "start": 23,
          "end": 36,
          "name": "message",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 36,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 33,
              "end": 36
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 43,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 39,
          "end": 43
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 67,
                  "name": "doStuff",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 69,
                  "end": 150,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 70,
                      "end": 78,
                      "name": "callback",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "start": 83,
                    "end": 150,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                              "id": {
                                "type": "Identifier",
                                "start": 103,
                                "end": 108,
                                "name": "_this",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                          "kind": "var",
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
                              "name": "callback",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 138,
                                "end": 142
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "alert",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 168,
                "name": "doStuff",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 169,
                "end": 182,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "CallExpression",
                  "start": 174,
                  "end": 182,
                  "callee": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 179,
                    "name": "alert",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
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
