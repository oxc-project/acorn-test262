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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 355,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 185,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "name": "method1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 185,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 62,
                            "name": "doStuff",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 64,
                            "end": 169,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 65,
                                "end": 73,
                                "name": "callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 78,
                              "end": 169,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                        "id": {
                                          "type": "Identifier",
                                          "start": 106,
                                          "end": 111,
                                          "name": "_this",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "start": 114,
                                          "end": 115,
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
                                    "start": 133,
                                    "end": 155,
                                    "argument": {
                                      "type": "CallExpression",
                                      "start": 140,
                                      "end": 154,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 140,
                                        "end": 148,
                                        "name": "callback",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 149,
                                          "end": 153
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
                    }
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
            "start": 190,
            "end": 353,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 197,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 353,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 219,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 222,
                          "end": 223,
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 261,
                            "name": "doStuff",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 263,
                            "end": 337,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 264,
                                "end": 272,
                                "name": "callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 277,
                              "end": 337,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 308,
                                        "end": 316,
                                        "name": "callback",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 317,
                                          "end": 321
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
                    }
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
