__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 111,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 111,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 111,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 24,
              "end": 109,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 35,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 35,
                "end": 109,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 36,
                    "end": 67,
                    "name": "callback",
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
                            "name": "self",
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
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                        "name": "T1",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 69,
                  "end": 109,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 79,
                      "end": 103,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 83,
                          "end": 102,
                          "id": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 88,
                            "name": "child",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 91,
                            "end": 102,
                            "callee": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 96,
                              "name": "B",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 97,
                                "end": 101
                              }
                            ],
                            "typeArguments": null
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
            }
          ]
        },
        "decorators": [],
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
                "name": "T1",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 113,
      "end": 167,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 120,
        "end": 167,
        "id": {
          "type": "Identifier",
          "start": 126,
          "end": 127,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 132,
          "end": 167,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 138,
              "end": 165,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 138,
                "end": 149,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 149,
                "end": 165,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 150,
                    "end": 160,
                    "name": "parent",
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
                          "name": "T2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 162,
                  "end": 165,
                  "body": []
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
                "name": "T2",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
