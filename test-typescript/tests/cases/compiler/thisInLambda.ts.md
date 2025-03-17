__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 330,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 157,
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
        "end": 157,
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
            "end": 155,
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
              "end": 155,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 155,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 49,
                    "end": 56,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 49,
                      "end": 55,
                      "object": {
                        "type": "ThisExpression",
                        "start": 49,
                        "end": 53
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 89,
                    "end": 110,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 93,
                        "end": 109,
                        "id": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 94,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 97,
                          "end": 109,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "MemberExpression",
                            "start": 103,
                            "end": 109,
                            "object": {
                              "type": "ThisExpression",
                              "start": 103,
                              "end": 107
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 108,
                              "end": 109,
                              "name": "x",
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
      "start": 159,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 172,
        "name": "myFn",
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
          "start": 173,
          "end": 178,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 178,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 175,
              "end": 178
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 183,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 195,
        "name": "myCls",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 330,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 202,
            "end": 328,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 213,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 214,
              "end": 328,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 217,
                "end": 328,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 227,
                    "end": 322,
                    "expression": {
                      "type": "CallExpression",
                      "start": 227,
                      "end": 321,
                      "callee": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 231,
                        "name": "myFn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 232,
                          "end": 320,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 238,
                            "end": 320,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 252,
                                "end": 310,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 252,
                                  "end": 309,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 252,
                                    "end": 256,
                                    "name": "myFn",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 257,
                                      "end": 308,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 263,
                                        "end": 308,
                                        "body": [
                                          {
                                            "type": "VariableDeclaration",
                                            "start": 281,
                                            "end": 294,
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "start": 285,
                                                "end": 293,
                                                "id": {
                                                  "type": "Identifier",
                                                  "start": 285,
                                                  "end": 286,
                                                  "name": "x",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "init": {
                                                  "type": "ThisExpression",
                                                  "start": 289,
                                                  "end": 293
                                                },
                                                "definite": false
                                              }
                                            ],
                                            "kind": "var",
                                            "declare": false
                                          }
                                        ]
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "directive": null
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
