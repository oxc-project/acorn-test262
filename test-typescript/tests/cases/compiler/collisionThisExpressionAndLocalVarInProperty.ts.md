__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 332,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 152,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 34,
              "end": 152,
              "properties": [
                {
                  "type": "Property",
                  "start": 44,
                  "end": 146,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 51,
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
                    "start": 53,
                    "end": 146,
                    "async": false,
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 67,
                      "end": 146,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 73,
                        "end": 146,
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
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 91,
                                  "end": 96,
                                  "decorators": [],
                                  "name": "_this",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 99,
                                  "end": 100,
                                  "raw": "2",
                                  "value": 2,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 114,
                            "end": 136,
                            "argument": {
                              "type": "CallExpression",
                              "start": 121,
                              "end": 135,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 130,
                                  "end": 134
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 121,
                                "end": 129,
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
                        "start": 54,
                        "end": 62,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 332,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 169,
        "end": 332,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 175,
            "end": 219,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 186,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 186,
              "end": 219,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 189,
                "end": 219,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 199,
                    "end": 213,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 203,
                        "end": 212,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 208,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 211,
                          "end": 212,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
            "type": "PropertyDefinition",
            "start": 224,
            "end": 330,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 236,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 239,
              "end": 330,
              "properties": [
                {
                  "type": "Property",
                  "start": 249,
                  "end": 324,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 256,
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
                    "start": 258,
                    "end": 324,
                    "async": false,
                    "body": {
                      "type": "ArrowFunctionExpression",
                      "start": 272,
                      "end": 324,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 278,
                        "end": 324,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 292,
                            "end": 314,
                            "argument": {
                              "type": "CallExpression",
                              "start": 299,
                              "end": 313,
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "start": 308,
                                  "end": 312
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 299,
                                "end": 307,
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
                        "start": 259,
                        "end": 267,
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 168,
        "decorators": [],
        "name": "class2",
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
