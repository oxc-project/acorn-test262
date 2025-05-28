__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 390,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 198,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "class1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 196,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 196,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 196,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 43,
                    "end": 190,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 47,
                        "end": 190,
                        "id": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 49,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 52,
                          "end": 190,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 66,
                              "end": 180,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 66,
                                "end": 73,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 75,
                                "end": 180,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 76,
                                    "end": 84,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 89,
                                  "end": 180,
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 95,
                                    "end": 180,
                                    "body": [
                                      {
                                        "type": "VariableDeclaration",
                                        "start": 113,
                                        "end": 127,
                                        "kind": "var",
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 117,
                                            "end": 126,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 117,
                                              "end": 122,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "start": 125,
                                              "end": 126,
                                              "value": 2,
                                              "raw": "2"
                                            },
                                            "definite": false
                                          }
                                        ],
                                        "declare": false
                                      },
                                      {
                                        "type": "ReturnStatement",
                                        "start": 144,
                                        "end": 166,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 151,
                                          "end": 165,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 151,
                                            "end": 159,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 160,
                                              "end": 164
                                            }
                                          ],
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "id": null,
                                  "generator": false
                                },
                                "id": null,
                                "generator": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 200,
      "end": 390,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 212,
        "decorators": [],
        "name": "class2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 213,
        "end": 390,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 219,
            "end": 388,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 230,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 388,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 388,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 243,
                    "end": 257,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 247,
                        "end": 256,
                        "id": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 252,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 255,
                          "end": 256,
                          "value": 2,
                          "raw": "2"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 266,
                    "end": 382,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 270,
                        "end": 382,
                        "id": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 272,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 275,
                          "end": 382,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 289,
                              "end": 372,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 289,
                                "end": 296,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 298,
                                "end": 372,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 299,
                                    "end": 307,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 312,
                                  "end": 372,
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 318,
                                    "end": 372,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 336,
                                        "end": 358,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 343,
                                          "end": 357,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 343,
                                            "end": 351,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 352,
                                              "end": 356
                                            }
                                          ],
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "id": null,
                                  "generator": false
                                },
                                "id": null,
                                "generator": false
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
