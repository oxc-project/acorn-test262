__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 34
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 35,
                          "end": 36
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 35,
                        "end": 36
                      }
                    ],
                    "start": 34,
                    "end": 37
                  },
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 48,
                          "end": 49
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 50,
                                  "end": 51
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 50,
                                "end": 51
                              }
                            ],
                            "start": 49,
                            "end": 52
                          },
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 76,
                                            "end": 77
                                          },
                                          "typeArguments": null,
                                          "start": 76,
                                          "end": 77
                                        },
                                        "start": 74,
                                        "end": 77
                                      },
                                      "start": 73,
                                      "end": 77
                                    },
                                    "init": null,
                                    "definite": false,
                                    "start": 73,
                                    "end": 77
                                  }
                                ],
                                "declare": false,
                                "start": 69,
                                "end": 78
                              },
                              {
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "X",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 98,
                                            "end": 99
                                          },
                                          "typeArguments": null,
                                          "start": 98,
                                          "end": 99
                                        },
                                        "start": 96,
                                        "end": 99
                                      },
                                      "start": 95,
                                      "end": 99
                                    },
                                    "init": null,
                                    "definite": false,
                                    "start": 95,
                                    "end": 99
                                  }
                                ],
                                "declare": false,
                                "start": 91,
                                "end": 100
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "t",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 122,
                                        "end": 123
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "t",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 122,
                                        "end": 123
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 122,
                                      "end": 123
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 125,
                                        "end": 126
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 125,
                                        "end": 126
                                      },
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "optional": false,
                                      "start": 125,
                                      "end": 126
                                    }
                                  ],
                                  "start": 120,
                                  "end": 128
                                },
                                "start": 113,
                                "end": 129
                              }
                            ],
                            "start": 55,
                            "end": 139
                          },
                          "expression": false,
                          "start": 49,
                          "end": 139
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 48,
                        "end": 139
                      }
                    ],
                    "start": 38,
                    "end": 145
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 27,
                  "end": 145
                },
                "definite": false,
                "start": 23,
                "end": 145
              }
            ],
            "declare": false,
            "start": 19,
            "end": 145
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 165,
                        "end": 171
                      }
                    ],
                    "start": 164,
                    "end": 172
                  },
                  "arguments": [],
                  "start": 159,
                  "end": 174
                },
                "definite": false,
                "start": 155,
                "end": 174
              }
            ],
            "declare": false,
            "start": 151,
            "end": 175
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 188
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "optional": false,
                "computed": false,
                "start": 187,
                "end": 190
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 191,
                    "end": 197
                  }
                ],
                "start": 190,
                "end": 198
              },
              "arguments": [],
              "optional": false,
              "start": 187,
              "end": 200
            },
            "start": 180,
            "end": 201
          }
        ],
        "start": 13,
        "end": 203
      },
      "expression": false,
      "start": 0,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
