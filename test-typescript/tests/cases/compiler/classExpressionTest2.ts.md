__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 203,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 145,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 145,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 27,
                  "end": 145,
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 38,
                    "end": 145,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 48,
                        "end": 139,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "method",
                        "value": {
                          "type": "FunctionExpression",
                          "start": 49,
                          "end": 139,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 55,
                            "end": 139,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 69,
                                "end": 78,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 73,
                                    "end": 77,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 73,
                                      "end": 77,
                                      "name": "t",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 74,
                                        "end": 77,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 76,
                                          "end": 77,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 76,
                                            "end": 77,
                                            "name": "T",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": null,
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              },
                              {
                                "type": "VariableDeclaration",
                                "start": 91,
                                "end": 100,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 95,
                                    "end": 99,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 95,
                                      "end": 99,
                                      "name": "x",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 96,
                                        "end": 99,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 98,
                                          "end": 99,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 98,
                                            "end": 99,
                                            "name": "X",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": null,
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 113,
                                "end": 129,
                                "argument": {
                                  "type": "ObjectExpression",
                                  "start": 120,
                                  "end": 128,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 122,
                                      "end": 123,
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 122,
                                        "end": 123,
                                        "name": "t",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 122,
                                        "end": 123,
                                        "name": "t",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 125,
                                      "end": 126,
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 125,
                                        "end": 126,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 125,
                                        "end": 126,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 49,
                            "end": 52,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 50,
                                "end": 51,
                                "name": {
                                  "type": "Identifier",
                                  "start": 50,
                                  "end": 51,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            ]
                          },
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
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 34,
                    "end": 37,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 35,
                        "end": 36,
                        "name": {
                          "type": "Identifier",
                          "start": 35,
                          "end": 36,
                          "name": "X",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 174,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 159,
                  "end": 174,
                  "callee": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 164,
                    "end": 172,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 165,
                        "end": 171
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 201,
            "argument": {
              "type": "CallExpression",
              "start": 187,
              "end": 200,
              "callee": {
                "type": "MemberExpression",
                "start": 187,
                "end": 190,
                "object": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 190,
                "end": 198,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 191,
                    "end": 197
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
