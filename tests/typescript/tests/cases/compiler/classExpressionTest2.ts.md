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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 203,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 145,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 145,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 27,
                  "end": 145,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 38,
                    "end": 145,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 48,
                        "end": 139,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 49,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 49,
                          "end": 139,
                          "id": null,
                          "generator": false,
                          "async": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            ]
                          },
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 55,
                            "end": 139,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 69,
                                "end": 78,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 73,
                                    "end": 77,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 73,
                                      "end": 77,
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
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
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    },
                                    "init": null,
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              },
                              {
                                "type": "VariableDeclaration",
                                "start": 91,
                                "end": 100,
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 95,
                                    "end": 99,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 95,
                                      "end": 99,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
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
                                            "decorators": [],
                                            "name": "X",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      }
                                    },
                                    "init": null,
                                    "definite": false
                                  }
                                ],
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
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 122,
                                        "end": 123,
                                        "decorators": [],
                                        "name": "t",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 122,
                                        "end": 123,
                                        "decorators": [],
                                        "name": "t",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 125,
                                      "end": 126,
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "start": 125,
                                        "end": 126,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 125,
                                        "end": 126,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "method": false,
                                      "shorthand": true,
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
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 151,
            "end": 175,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 155,
                "end": 174,
                "id": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 159,
                  "end": 174,
                  "callee": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  },
                  "arguments": []
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
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
              },
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
