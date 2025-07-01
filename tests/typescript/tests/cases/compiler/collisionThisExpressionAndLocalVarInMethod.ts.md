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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 14,
              "end": 21
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
                            "start": 55,
                            "end": 62
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
                                "start": 65,
                                "end": 73
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
                                          "start": 106,
                                          "end": 111
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2",
                                          "start": 114,
                                          "end": 115
                                        },
                                        "definite": false,
                                        "start": 106,
                                        "end": 115
                                      }
                                    ],
                                    "declare": false,
                                    "start": 102,
                                    "end": 116
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
                                        "start": 140,
                                        "end": 148
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 149,
                                          "end": 153
                                        }
                                      ],
                                      "optional": false,
                                      "start": 140,
                                      "end": 154
                                    },
                                    "start": 133,
                                    "end": 155
                                  }
                                ],
                                "start": 84,
                                "end": 169
                              },
                              "id": null,
                              "generator": false,
                              "start": 78,
                              "end": 169
                            },
                            "id": null,
                            "generator": false,
                            "start": 64,
                            "end": 169
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 55,
                          "end": 169
                        }
                      ],
                      "start": 41,
                      "end": 179
                    },
                    "start": 34,
                    "end": 179
                  }
                ],
                "start": 24,
                "end": 185
              },
              "expression": false,
              "start": 21,
              "end": 185
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 185
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
              "start": 190,
              "end": 197
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
                          "start": 214,
                          "end": 219
                        },
                        "init": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 222,
                          "end": 223
                        },
                        "definite": false,
                        "start": 214,
                        "end": 223
                      }
                    ],
                    "declare": false,
                    "start": 210,
                    "end": 224
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
                            "start": 254,
                            "end": 261
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
                                "start": 264,
                                "end": 272
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
                                        "start": 308,
                                        "end": 316
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 317,
                                          "end": 321
                                        }
                                      ],
                                      "optional": false,
                                      "start": 308,
                                      "end": 322
                                    },
                                    "start": 301,
                                    "end": 323
                                  }
                                ],
                                "start": 283,
                                "end": 337
                              },
                              "id": null,
                              "generator": false,
                              "start": 277,
                              "end": 337
                            },
                            "id": null,
                            "generator": false,
                            "start": 263,
                            "end": 337
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 254,
                          "end": 337
                        }
                      ],
                      "start": 240,
                      "end": 347
                    },
                    "start": 233,
                    "end": 347
                  }
                ],
                "start": 200,
                "end": 353
              },
              "expression": false,
              "start": 197,
              "end": 353
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 190,
            "end": 353
          }
        ],
        "start": 8,
        "end": 355
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 355
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 355
}
```
