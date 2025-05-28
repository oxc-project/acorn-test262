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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 355,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 185,
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
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 185,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 55,
                            "end": 62,
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 64,
                            "end": 169,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
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
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 78,
                              "end": 169,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 84,
                                "end": 169,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 102,
                                    "end": 116,
                                    "kind": "var",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 106,
                                        "end": 115,
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
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 149,
                                          "end": 153
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
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 190,
            "end": 353,
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
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 353,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 353,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 210,
                    "end": 224,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 214,
                        "end": 223,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 261,
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 263,
                            "end": 337,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
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
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "start": 277,
                              "end": 337,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
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
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "start": 317,
                                          "end": 321
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
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
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
