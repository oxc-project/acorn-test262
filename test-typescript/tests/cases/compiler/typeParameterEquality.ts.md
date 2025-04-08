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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 54,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 21,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 23,
                  "end": 37,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 23,
                    "end": 26,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 24,
                        "end": 25,
                        "name": {
                          "type": "Identifier",
                          "start": 24,
                          "end": 25,
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
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 27,
                      "end": 31,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 28,
                        "end": 31,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 30,
                          "end": 31,
                          "typeName": {
                            "type": "Identifier",
                            "start": 30,
                            "end": 31,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
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
            "type": "MethodDefinition",
            "start": 59,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 86,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 82,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 68,
                      "end": 82,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 68,
                        "end": 71,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 69,
                            "end": 70,
                            "name": {
                              "type": "Identifier",
                              "start": 69,
                              "end": 70,
                              "name": "U",
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
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 72,
                          "end": 76,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 73,
                            "end": 76,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 75,
                              "end": 76,
                              "typeName": {
                                "type": "Identifier",
                                "start": 75,
                                "end": 76,
                                "name": "U",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 78,
                        "end": 82,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 81,
                          "end": 82,
                          "typeName": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 82,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
                "start": 84,
                "end": 86,
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
