__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 36,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 34,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 34,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 34,
                "body": []
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
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 142,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 142,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 61,
            "end": 140,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 140,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 84,
                    "end": 99,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 88,
                        "end": 98,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 93,
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 96,
                          "end": 98,
                          "raw": "10",
                          "value": 10,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 108,
                    "end": 134,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 112,
                        "end": 133,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 113,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 116,
                          "end": 133,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 122,
                            "end": 133,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 122,
                              "end": 131,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 122,
                                "end": 127
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 128,
                                "end": 131,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 283,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 162,
        "end": 283,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 281,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 178,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 281,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 281,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 191,
                    "end": 275,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 195,
                        "end": 275,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 195,
                          "end": 196,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 199,
                          "end": 275,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 205,
                            "end": 275,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 219,
                                "end": 234,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 223,
                                    "end": 233,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 223,
                                      "end": 228,
                                      "decorators": [],
                                      "name": "_this",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 231,
                                      "end": 233,
                                      "raw": "10",
                                      "value": 10,
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
                                "start": 247,
                                "end": 265,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 254,
                                  "end": 265,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 254,
                                    "end": 263,
                                    "computed": false,
                                    "object": {
                                      "type": "Super",
                                      "start": 254,
                                      "end": 259
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 260,
                                      "end": 263,
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 151,
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 160,
        "end": 161,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
