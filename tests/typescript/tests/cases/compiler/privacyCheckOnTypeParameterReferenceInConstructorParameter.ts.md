__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 111,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 111,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 14,
          "end": 18,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 15,
              "end": 17,
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 17,
                "decorators": [],
                "name": "T1",
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
          "start": 18,
          "end": 111,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 24,
              "end": 109,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 35,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 35,
                "end": 109,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 36,
                    "end": 67,
                    "decorators": [],
                    "name": "callback",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 67,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 46,
                        "end": 67,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 47,
                            "end": 58,
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 51,
                              "end": 58,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 53,
                                "end": 58,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 53,
                                  "end": 54,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 54,
                                  "end": 58,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 55,
                                      "end": 57,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 55,
                                        "end": 57,
                                        "decorators": [],
                                        "name": "T1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 60,
                          "end": 67,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 63,
                            "end": 67
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 69,
                  "end": 109,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 79,
                      "end": 103,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 83,
                          "end": 102,
                          "id": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 88,
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 91,
                            "end": 102,
                            "callee": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 96,
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 97,
                                "end": 101
                              }
                            ]
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    }
                  ]
                },
                "expression": false
              },
              "kind": "constructor",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 113,
      "end": 167,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 120,
        "end": 167,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 126,
          "end": 127,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 127,
          "end": 131,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 128,
              "end": 130,
              "name": {
                "type": "Identifier",
                "start": 128,
                "end": 130,
                "decorators": [],
                "name": "T2",
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
          "start": 132,
          "end": 167,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 138,
              "end": 165,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 138,
                "end": 149,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 149,
                "end": 165,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 150,
                    "end": 160,
                    "decorators": [],
                    "name": "parent",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 160,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 158,
                        "end": 160,
                        "typeName": {
                          "type": "Identifier",
                          "start": 158,
                          "end": 160,
                          "decorators": [],
                          "name": "T2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 162,
                  "end": 165,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
