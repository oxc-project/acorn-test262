__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 323,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 237,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 27,
              "value": "hello",
              "raw": "\"hello\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 235,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 235,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 235,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 49,
                    "end": 229,
                    "id": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 63,
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 66,
                      "end": 229,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 80,
                          "end": 94,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 80,
                            "end": 93,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 80,
                              "end": 86,
                              "object": {
                                "type": "ThisExpression",
                                "start": 80,
                                "end": 84
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 85,
                                "end": 86,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 89,
                              "end": 93,
                              "value": "hi",
                              "raw": "\"hi\""
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "VariableDeclaration",
                          "start": 152,
                          "end": 173,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 156,
                              "end": 172,
                              "id": {
                                "type": "Identifier",
                                "start": 156,
                                "end": 157,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 160,
                                "end": 172,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "MemberExpression",
                                  "start": 166,
                                  "end": 172,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 166,
                                    "end": 170
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 171,
                                    "end": 172,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "id": null,
                                "generator": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    },
                    "expression": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 252,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 255,
        "end": 323,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 261,
            "end": 321,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 265,
                "end": 320,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 269,
                  "end": 320,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 275,
                    "end": 320,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 285,
                        "end": 300,
                        "expression": {
                          "type": "CallExpression",
                          "start": 285,
                          "end": 299,
                          "callee": {
                            "type": "ArrowFunctionExpression",
                            "start": 286,
                            "end": 296,
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
                            "generator": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 309,
                        "end": 314,
                        "expression": {
                          "type": "ThisExpression",
                          "start": 309,
                          "end": 313
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
