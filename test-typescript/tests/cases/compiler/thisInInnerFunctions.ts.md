__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 237,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 237,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 27,
              "value": "hello",
              "raw": "\"hello\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 235,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 235,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "inner",
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
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 156,
                              "end": 172,
                              "id": {
                                "type": "Identifier",
                                "start": 156,
                                "end": 157,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 160,
                                "end": 172,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [],
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
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 239,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 252,
        "name": "test",
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
        "start": 255,
        "end": 323,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 261,
            "end": 321,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 265,
                "end": 320,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 269,
                  "end": 320,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "ThisExpression",
                              "start": 292,
                              "end": 296
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
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
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
