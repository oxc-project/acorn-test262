__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 12,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 22
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
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
                    "type": "ReturnStatement",
                    "argument": {
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
                            "start": 70,
                            "end": 77
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
                                "start": 80,
                                "end": 88
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
                                          "start": 121,
                                          "end": 126
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2",
                                          "start": 129,
                                          "end": 130
                                        },
                                        "definite": false,
                                        "start": 121,
                                        "end": 130
                                      }
                                    ],
                                    "declare": false,
                                    "start": 117,
                                    "end": 131
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
                                        "start": 155,
                                        "end": 163
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 164,
                                          "end": 169
                                        }
                                      ],
                                      "optional": false,
                                      "start": 155,
                                      "end": 170
                                    },
                                    "start": 148,
                                    "end": 171
                                  }
                                ],
                                "start": 99,
                                "end": 185
                              },
                              "id": null,
                              "generator": false,
                              "start": 93,
                              "end": 185
                            },
                            "id": null,
                            "generator": false,
                            "start": 79,
                            "end": 185
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 70,
                          "end": 185
                        }
                      ],
                      "start": 56,
                      "end": 195
                    },
                    "start": 49,
                    "end": 195
                  }
                ],
                "start": 39,
                "end": 201
              },
              "expression": false,
              "start": 36,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 201
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 213
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
                          "start": 230,
                          "end": 235
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 238,
                          "end": 239
                        },
                        "definite": false,
                        "start": 230,
                        "end": 239
                      }
                    ],
                    "declare": false,
                    "start": 226,
                    "end": 240
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                            "start": 270,
                            "end": 277
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
                                "start": 280,
                                "end": 288
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
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 324,
                                        "end": 332
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 333,
                                          "end": 338
                                        }
                                      ],
                                      "optional": false,
                                      "start": 324,
                                      "end": 339
                                    },
                                    "start": 317,
                                    "end": 340
                                  }
                                ],
                                "start": 299,
                                "end": 354
                              },
                              "id": null,
                              "generator": false,
                              "start": 293,
                              "end": 354
                            },
                            "id": null,
                            "generator": false,
                            "start": 279,
                            "end": 354
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 270,
                          "end": 354
                        }
                      ],
                      "start": 256,
                      "end": 364
                    },
                    "start": 249,
                    "end": 364
                  }
                ],
                "start": 216,
                "end": 370
              },
              "expression": false,
              "start": 213,
              "end": 370
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 206,
            "end": 370
          }
        ],
        "start": 23,
        "end": 372
      },
      "abstract": false,
      "declare": false,
      "start": 15,
      "end": 372
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 372
}
```
