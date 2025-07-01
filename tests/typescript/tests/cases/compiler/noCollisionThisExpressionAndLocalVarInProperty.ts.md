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
        "name": "class1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 31
            },
            "typeAnnotation": null,
            "value": {
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
                    "start": 44,
                    "end": 51
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
                        "start": 54,
                        "end": 62
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
                                  "start": 91,
                                  "end": 96
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 99,
                                  "end": 100
                                },
                                "definite": false,
                                "start": 91,
                                "end": 100
                              }
                            ],
                            "declare": false,
                            "start": 87,
                            "end": 101
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
                                "start": 121,
                                "end": 129
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_this",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 130,
                                  "end": 135
                                }
                              ],
                              "optional": false,
                              "start": 121,
                              "end": 136
                            },
                            "start": 114,
                            "end": 137
                          }
                        ],
                        "start": 73,
                        "end": 147
                      },
                      "id": null,
                      "generator": false,
                      "start": 67,
                      "end": 147
                    },
                    "id": null,
                    "generator": false,
                    "start": 53,
                    "end": 147
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 44,
                  "end": 147
                }
              ],
              "start": 34,
              "end": 153
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 19,
            "end": 153
          }
        ],
        "start": 13,
        "end": 155
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class2",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 169
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 187
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
                          "start": 204,
                          "end": 209
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 212,
                          "end": 213
                        },
                        "definite": false,
                        "start": 204,
                        "end": 213
                      }
                    ],
                    "declare": false,
                    "start": 200,
                    "end": 214
                  }
                ],
                "start": 190,
                "end": 220
              },
              "expression": false,
              "start": 187,
              "end": 220
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 176,
            "end": 220
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 237
            },
            "typeAnnotation": null,
            "value": {
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
                    "start": 250,
                    "end": 257
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
                        "start": 260,
                        "end": 268
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
                                "start": 300,
                                "end": 308
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 10,
                                  "raw": "10",
                                  "start": 309,
                                  "end": 311
                                }
                              ],
                              "optional": false,
                              "start": 300,
                              "end": 312
                            },
                            "start": 293,
                            "end": 313
                          }
                        ],
                        "start": 279,
                        "end": 323
                      },
                      "id": null,
                      "generator": false,
                      "start": 273,
                      "end": 323
                    },
                    "id": null,
                    "generator": false,
                    "start": 259,
                    "end": 323
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 250,
                  "end": 323
                }
              ],
              "start": 240,
              "end": 329
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 225,
            "end": 329
          }
        ],
        "start": 170,
        "end": 331
      },
      "abstract": false,
      "declare": false,
      "start": 157,
      "end": 331
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 331
}
```
