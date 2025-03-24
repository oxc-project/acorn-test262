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
        "end": 195,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 19,
            "end": 137,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 30,
              "end": 137,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 40,
                  "end": 131,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 41,
                    "end": 131,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 47,
                      "end": 131,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 61,
                          "end": 70,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 65,
                              "end": 69,
                              "id": {
                                "type": "Identifier",
                                "start": 65,
                                "end": 69,
                                "name": "t",
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
                          "start": 83,
                          "end": 92,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 87,
                              "end": 91,
                              "id": {
                                "type": "Identifier",
                                "start": 87,
                                "end": 91,
                                "name": "x",
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
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 114,
                                  "end": 115,
                                  "name": "t",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 114,
                                  "end": 115,
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
                                "start": 117,
                                "end": 118,
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 118,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 117,
                                  "end": 118,
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
          {
            "type": "VariableDeclaration",
            "start": 143,
            "end": 167,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 147,
                "end": 166,
                "id": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 151,
                  "end": 166,
                  "callee": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
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
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
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
                "start": 182,
                "end": 190,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 183,
                    "end": 189
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
