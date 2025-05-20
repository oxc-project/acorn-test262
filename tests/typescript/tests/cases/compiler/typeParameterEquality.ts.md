__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 54,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 54,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 40,
                    "end": 52,
                    "argument": {
                      "type": "Literal",
                      "start": 47,
                      "end": 51,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 21,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 23,
                  "end": 37,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 27,
                      "end": 31,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 28,
                        "end": 31,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 30,
                          "end": 31,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 30,
                            "end": 31,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 36,
                      "end": 37,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 23,
                    "end": 26,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 24,
                        "end": 25,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 24,
                          "end": 25,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 59,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 86,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 86,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 82,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 68,
                      "end": 82,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 72,
                          "end": 76,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 73,
                            "end": 76,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 75,
                              "end": 76,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 75,
                                "end": 76,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 81,
                          "end": 82,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 82,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 68,
                        "end": 71,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 69,
                            "end": 70,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 69,
                              "end": 70,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                }
              ],
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
        "name": "C",
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
