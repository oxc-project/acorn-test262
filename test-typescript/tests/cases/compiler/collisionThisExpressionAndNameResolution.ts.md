collisionThisExpressionAndNameResolution.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 377,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 40,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 14,
                "end": 40,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 20,
                    "end": 38,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 23,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 24,
                        "end": 36,
                        "decorators": [],
                        "name": "message",
                        "optional": false,
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
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 377,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 375,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 375,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 375,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 71,
                    "end": 86,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 75,
                        "end": 85,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 75,
                          "end": 80,
                          "decorators": [],
                          "name": "_this",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 83,
                          "end": 85,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 149,
                    "end": 369,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 166,
                      "end": 369,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 180,
                          "end": 199,
                          "expression": {
                            "type": "CallExpression",
                            "start": 180,
                            "end": 198,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 192,
                                "end": 197,
                                "decorators": [],
                                "name": "_this",
                                "optional": false
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 180,
                              "end": 191,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 180,
                                "end": 187,
                                "decorators": [],
                                "name": "console",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 188,
                                "end": 191,
                                "decorators": [],
                                "name": "log",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 270,
                          "end": 287,
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "start": 277,
                            "end": 286,
                            "async": false,
                            "body": {
                              "type": "ThisExpression",
                              "start": 282,
                              "end": 286
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 277,
                                "end": 278,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 163,
                      "decorators": [],
                      "name": "inner",
                      "optional": false
                    },
                    "params": []
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
