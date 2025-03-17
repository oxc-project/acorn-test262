__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 331,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 155,
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
        "end": 155,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 153,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 34,
              "end": 153,
              "properties": [
                {
                  "type": "Property",
                  "start": 44,
                  "end": 147,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 51,
                    "name": "doStuff",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 53,
                    "end": 147,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 54,
                        "end": 62,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 67,
                      "end": 147,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 73,
                        "end": 147,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 87,
                            "end": 101,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 91,
                                "end": 100,
                                "id": {
                                  "type": "Identifier",
                                  "start": 91,
                                  "end": 96,
                                  "name": "_this",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 99,
                                  "end": 100,
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
                            "start": 114,
                            "end": 137,
                            "argument": {
                              "type": "CallExpression",
                              "start": 121,
                              "end": 136,
                              "callee": {
                                "type": "Identifier",
                                "start": 121,
                                "end": 129,
                                "name": "callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 130,
                                  "end": 135,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
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
      "start": 157,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 169,
        "name": "class2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 331,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 176,
            "end": 220,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 187,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 220,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 220,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 200,
                    "end": 214,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 204,
                        "end": 213,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 209,
                          "name": "_this",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 212,
                          "end": 213,
                          "value": 2,
                          "raw": "2"
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
          },
          {
            "type": "PropertyDefinition",
            "start": 225,
            "end": 329,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 237,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 240,
              "end": 329,
              "properties": [
                {
                  "type": "Property",
                  "start": 250,
                  "end": 323,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 257,
                    "name": "doStuff",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 259,
                    "end": 323,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 260,
                        "end": 268,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 273,
                      "end": 323,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 279,
                        "end": 323,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 293,
                            "end": 313,
                            "argument": {
                              "type": "CallExpression",
                              "start": 300,
                              "end": 312,
                              "callee": {
                                "type": "Identifier",
                                "start": 300,
                                "end": 308,
                                "name": "callback",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 309,
                                  "end": 311,
                                  "value": 10,
                                  "raw": "10"
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
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
