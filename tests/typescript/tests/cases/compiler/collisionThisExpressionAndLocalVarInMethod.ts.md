__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 355,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 355,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 355,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 185,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 185,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 24,
                "end": 185,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 34,
                    "end": 179,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 41,
                      "end": 179,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 55,
                          "end": 169,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 62,
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 64,
                            "end": 169,
                            "async": false,
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 78,
                              "end": 169,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 84,
                                "end": 169,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 102,
                                    "end": 116,
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 106,
                                        "end": 115,
                                        "definite": false,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 106,
                                          "end": 111,
                                          "decorators": [],
                                          "name": "_this",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "start": 114,
                                          "end": 115,
                                          "raw": "2",
                                          "value": 2
                                        }
                                      }
                                    ],
                                    "declare": false,
                                    "kind": "var"
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 133,
                                    "end": 155,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 140,
                                      "end": 154,
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 149,
                                          "end": 153
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 140,
                                        "end": 148,
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 65,
                                "end": 73,
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 190,
            "end": 353,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 197,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 353,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 353,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 210,
                    "end": 224,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 214,
                        "end": 223,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 219,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 222,
                          "end": 223,
                          "raw": "2",
                          "value": 2
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 233,
                    "end": 347,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 240,
                      "end": 347,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 254,
                          "end": 337,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 261,
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 263,
                            "end": 337,
                            "async": false,
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 277,
                              "end": 337,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 283,
                                "end": 337,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 301,
                                    "end": 323,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 308,
                                      "end": 322,
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 317,
                                          "end": 321
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 308,
                                        "end": 316,
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 264,
                                "end": 272,
                                "decorators": [],
                                "name": "callback",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "typeParameters": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
