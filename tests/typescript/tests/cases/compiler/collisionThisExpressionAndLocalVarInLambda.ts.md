__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "alert",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 33,
              "end": 36
            },
            "start": 31,
            "end": 36
          },
          "start": 23,
          "end": 36
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 39,
          "end": 43
        },
        "start": 37,
        "end": 43
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 44
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
            "start": 50,
            "end": 51
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doStuff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 67
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 78
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_this",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 103,
                                "end": 108
                              },
                              "init": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 111,
                                "end": 112
                              },
                              "definite": false,
                              "start": 103,
                              "end": 112
                            }
                          ],
                          "declare": false,
                          "start": 99,
                          "end": 113
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 129,
                              "end": 137
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 138,
                                "end": 142
                              }
                            ],
                            "optional": false,
                            "start": 129,
                            "end": 143
                          },
                          "start": 122,
                          "end": 144
                        }
                      ],
                      "start": 89,
                      "end": 150
                    },
                    "id": null,
                    "generator": false,
                    "start": 83,
                    "end": 150
                  },
                  "id": null,
                  "generator": false,
                  "start": 69,
                  "end": 150
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 150
              }
            ],
            "start": 54,
            "end": 152
          },
          "definite": false,
          "start": 50,
          "end": 152
        }
      ],
      "declare": false,
      "start": 46,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "alert",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 158
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 160
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doStuff",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 168
              },
              "optional": false,
              "computed": false,
              "start": 159,
              "end": 168
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "alert",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 179
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 181
                    }
                  ],
                  "optional": false,
                  "start": 174,
                  "end": 182
                },
                "id": null,
                "generator": false,
                "start": 169,
                "end": 182
              }
            ],
            "optional": false,
            "start": 159,
            "end": 183
          }
        ],
        "optional": false,
        "start": 153,
        "end": 184
      },
      "directive": null,
      "start": 153,
      "end": 185
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 185
}
```
