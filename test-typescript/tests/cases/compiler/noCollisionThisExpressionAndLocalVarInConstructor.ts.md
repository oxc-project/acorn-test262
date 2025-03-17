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
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 197,
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
              "end": 197,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 197,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 43,
                    "end": 191,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 47,
                        "end": 191,
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
                          "end": 191,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 66,
                              "end": 181,
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
                                "end": 181,
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
                                  "end": 181,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 95,
                                    "end": 181,
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
                                        "end": 167,
                                        "argument": {
                                          "type": "CallExpression",
                                          "start": 151,
                                          "end": 166,
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
                                              "type": "Identifier",
                                              "start": 160,
                                              "end": 165,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
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
      "start": 201,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 213,
        "name": "class2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 392,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 390,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 231,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 231,
              "end": 390,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 234,
                "end": 390,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 244,
                    "end": 258,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 248,
                        "end": 257,
                        "id": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 253,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 267,
                    "end": 384,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 271,
                        "end": 384,
                        "id": {
                          "type": "Identifier",
                          "start": 271,
                          "end": 273,
                          "name": "x2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 290,
                                "end": 297,
                                "name": "doStuff",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "start": 299,
                                "end": 374,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 300,
                                    "end": 308,
                                    "name": "callback",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "body": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 313,
                                  "end": 374,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
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
                                            "name": "callback",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 353,
                                              "end": 358,
                                              "name": "_this",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
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
