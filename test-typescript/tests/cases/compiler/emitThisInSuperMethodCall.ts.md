__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 403,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "User",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 35,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 25,
              "name": "sayHello",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 35,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 35,
                "body": []
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
      "type": "ClassDeclaration",
      "start": 39,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 59,
        "name": "RegisteredUser",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 68,
        "end": 72,
        "name": "User",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 402,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 196,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 196,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 196,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 190,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 93,
                      "end": 189,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 99,
                        "end": 189,
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "start": 113,
                            "end": 179,
                            "id": {
                              "type": "Identifier",
                              "start": 122,
                              "end": 127,
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
                              "start": 130,
                              "end": 179,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 148,
                                  "end": 165,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 148,
                                    "end": 164,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 148,
                                      "end": 162,
                                      "object": {
                                        "type": "Super",
                                        "start": 148,
                                        "end": 153
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 154,
                                        "end": 162,
                                        "name": "sayHello",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
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
                      "typeParameters": null,
                      "returnType": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 201,
            "end": 317,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 317,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 317,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 215,
                    "end": 311,
                    "id": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 229,
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
                      "start": 232,
                      "end": 311,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 246,
                          "end": 301,
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "start": 246,
                            "end": 301,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 252,
                              "end": 301,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 270,
                                  "end": 287,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 270,
                                    "end": 286,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 270,
                                      "end": 284,
                                      "object": {
                                        "type": "Super",
                                        "start": 270,
                                        "end": 275
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 276,
                                        "end": 284,
                                        "name": "sayHello",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "typeParameters": null,
                            "returnType": null
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 322,
            "end": 400,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 323,
              "end": 400,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 400,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 336,
                    "end": 394,
                    "id": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 350,
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
                      "start": 353,
                      "end": 394,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 367,
                          "end": 384,
                          "expression": {
                            "type": "CallExpression",
                            "start": 367,
                            "end": 383,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 367,
                              "end": 381,
                              "object": {
                                "type": "Super",
                                "start": 367,
                                "end": 372
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 373,
                                "end": 381,
                                "name": "sayHello",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
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
