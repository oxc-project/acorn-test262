__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 392,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 199,
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
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 197,
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
              "end": 197,
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
                "end": 197,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 43,
                    "end": 191,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 47,
                        "end": 191,
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
                          "end": 191,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 66,
                              "end": 181,
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
                                "end": 181,
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
                                  "end": 181,
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 95,
                                    "end": 181,
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
                                        "end": 167,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 151,
                                          "end": 166,
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
                                              "type": "Identifier",
                                              "start": 160,
                                              "end": 165,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
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
      "start": 201,
      "end": 392,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 213,
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
        "start": 214,
        "end": 392,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 390,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 231,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 390,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 390,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 244,
                    "end": 258,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 248,
                        "end": 257,
                        "id": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 253,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 256,
                          "end": 257,
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
                    "start": 267,
                    "end": 384,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 271,
                        "end": 384,
                        "id": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 273,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 276,
                          "end": 384,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 290,
                              "end": 374,
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 290,
                                "end": 297,
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 299,
                                "end": 374,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 300,
                                    "end": 308,
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 313,
                                  "end": 374,
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 319,
                                    "end": 374,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 337,
                                        "end": 360,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 344,
                                          "end": 359,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 344,
                                            "end": 352,
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 353,
                                              "end": 358,
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "typeAnnotation": null
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
