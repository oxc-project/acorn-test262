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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "class1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 196,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 196,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 196,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 43,
                    "end": 190,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 47,
                        "end": 190,
                        "id": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 49,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 66,
                                "end": 73,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 75,
                                "end": 180,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 76,
                                    "end": 84,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 89,
                                  "end": 180,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 95,
                                    "end": 180,
                                    "body": [
                                      {
                                        "type": "VariableDeclaration",
                                        "start": 113,
                                        "end": 127,
                                        "declarations": [
                                          {
                                            "type": "VariableDeclarator",
                                            "start": 117,
                                            "end": 126,
                                            "id": {
                                              "type": "Identifier",
                                              "start": 117,
                                              "end": 122,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
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
                                        "kind": "var",
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
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 160,
                                              "end": 164
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
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
      "type": "ClassDeclaration",
      "start": 200,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 212,
        "name": "class2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 213,
        "end": 390,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 219,
            "end": 388,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 230,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 388,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 388,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 243,
                    "end": 257,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 247,
                        "end": 256,
                        "id": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 252,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 266,
                    "end": 382,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 270,
                        "end": 382,
                        "id": {
                          "type": "Identifier",
                          "start": 270,
                          "end": 272,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 289,
                                "end": 296,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 298,
                                "end": 372,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 299,
                                    "end": 307,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 312,
                                  "end": 372,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
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
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 352,
                                              "end": 356
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
