__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 20,
              "end": 27
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 28
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 36
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 63
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 80,
                                "end": 84
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 85,
                                "end": 86
                              },
                              "optional": false,
                              "computed": false,
                              "start": 80,
                              "end": 86
                            },
                            "right": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "\"hi\"",
                              "start": 89,
                              "end": 93
                            },
                            "start": 80,
                            "end": 93
                          },
                          "directive": null,
                          "start": 80,
                          "end": 94
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
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 156,
                                "end": 157
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 166,
                                    "end": 170
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 171,
                                    "end": 172
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 166,
                                  "end": 172
                                },
                                "id": null,
                                "generator": false,
                                "start": 160,
                                "end": 172
                              },
                              "definite": false,
                              "start": 156,
                              "end": 172
                            }
                          ],
                          "declare": false,
                          "start": 152,
                          "end": 173
                        }
                      ],
                      "start": 66,
                      "end": 229
                    },
                    "expression": false,
                    "start": 49,
                    "end": 229
                  }
                ],
                "start": 39,
                "end": 235
              },
              "expression": false,
              "start": 36,
              "end": 235
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 33,
            "end": 235
          }
        ],
        "start": 10,
        "end": 237
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 252
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
                  "start": 265,
                  "end": 266
                },
                "init": {
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "ThisExpression",
                              "start": 292,
                              "end": 296
                            },
                            "id": null,
                            "generator": false,
                            "start": 286,
                            "end": 296
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 285,
                          "end": 299
                        },
                        "directive": null,
                        "start": 285,
                        "end": 300
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "ThisExpression",
                          "start": 309,
                          "end": 313
                        },
                        "directive": null,
                        "start": 309,
                        "end": 314
                      }
                    ],
                    "start": 275,
                    "end": 320
                  },
                  "id": null,
                  "generator": false,
                  "start": 269,
                  "end": 320
                },
                "definite": false,
                "start": 265,
                "end": 320
              }
            ],
            "declare": false,
            "start": 261,
            "end": 321
          }
        ],
        "start": 255,
        "end": 323
      },
      "expression": false,
      "start": 239,
      "end": 323
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 323
}
```
