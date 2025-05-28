__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 195,
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
        "end": 195,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 19,
            "end": 137,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 26,
              "end": 29,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 27,
                  "end": 28,
                  "name": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
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
              "start": 30,
              "end": 137,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 40,
                  "end": 131,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 41,
                    "end": 131,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 41,
                      "end": 44,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 42,
                          "end": 43,
                          "name": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 43,
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
                      "start": 47,
                      "end": 131,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 61,
                          "end": 70,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 65,
                              "end": 69,
                              "id": {
                                "type": "Identifier",
                                "start": 65,
                                "end": 69,
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 66,
                                  "end": 69,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 68,
                                    "end": 69,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 68,
                                      "end": 69,
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
                          "start": 83,
                          "end": 92,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 87,
                              "end": 91,
                              "id": {
                                "type": "Identifier",
                                "start": 87,
                                "end": 91,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 88,
                                  "end": 91,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 90,
                                    "end": 91,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 90,
                                      "end": 91,
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
                          "start": 105,
                          "end": 121,
                          "argument": {
                            "type": "ObjectExpression",
                            "start": 112,
                            "end": 120,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 114,
                                "end": 115,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 114,
                                  "end": 115,
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 114,
                                  "end": 115,
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
                                "start": 117,
                                "end": 118,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 118,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 118,
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
          {
            "type": "VariableDeclaration",
            "start": 143,
            "end": 167,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 147,
                "end": 166,
                "id": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 151,
                  "end": 166,
                  "callee": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 156,
                    "end": 164,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 157,
                        "end": 163
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
            "start": 172,
            "end": 193,
            "argument": {
              "type": "CallExpression",
              "start": 179,
              "end": 192,
              "callee": {
                "type": "MemberExpression",
                "start": 179,
                "end": 182,
                "object": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
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
                "start": 182,
                "end": 190,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 183,
                    "end": 189
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
