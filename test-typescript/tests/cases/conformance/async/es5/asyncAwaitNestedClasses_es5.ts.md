__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 348,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 333,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 331,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ClassExpression",
              "start": 81,
              "end": 331,
              "id": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 89,
                "end": 331,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 99,
                    "end": 205,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 111,
                      "name": "func2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 111,
                      "end": 205,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 129,
                        "end": 205,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 143,
                            "end": 195,
                            "argument": {
                              "type": "NewExpression",
                              "start": 150,
                              "end": 194,
                              "callee": {
                                "type": "Identifier",
                                "start": 154,
                                "end": 161,
                                "name": "Promise",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 162,
                                  "end": 193,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 163,
                                      "end": 170,
                                      "name": "resolve",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 175,
                                    "end": 193,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 177,
                                        "end": 191,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 177,
                                          "end": 190,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 177,
                                            "end": 184,
                                            "name": "resolve",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "start": 185,
                                              "end": 189,
                                              "value": null,
                                              "raw": "null"
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        },
                                        "directive": null
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              ],
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 113,
                        "end": 128,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 115,
                          "end": 128,
                          "typeName": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 122,
                            "name": "Promise",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 122,
                            "end": 128,
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 123,
                                "end": 127
                              }
                            ]
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 214,
                    "end": 325,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ClassExpression",
                      "start": 225,
                      "end": 325,
                      "id": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 232,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 233,
                        "end": 325,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 247,
                            "end": 315,
                            "static": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 264,
                              "name": "func",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 264,
                              "end": 315,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": true,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 267,
                                "end": 315,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 285,
                                    "end": 301,
                                    "expression": {
                                      "type": "AwaitExpression",
                                      "start": 285,
                                      "end": 300,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 291,
                                        "end": 300,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 291,
                                          "end": 298,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 291,
                                            "end": 292,
                                            "name": "B",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 293,
                                            "end": 298,
                                            "name": "func2",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    },
                                    "directive": null
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
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ExpressionStatement",
      "start": 335,
      "end": 348,
      "expression": {
        "type": "CallExpression",
        "start": 335,
        "end": 347,
        "callee": {
          "type": "MemberExpression",
          "start": 335,
          "end": 345,
          "object": {
            "type": "MemberExpression",
            "start": 335,
            "end": 340,
            "object": {
              "type": "MemberExpression",
              "start": 335,
              "end": 338,
              "object": {
                "type": "Identifier",
                "start": 335,
                "end": 336,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 345,
            "name": "func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
