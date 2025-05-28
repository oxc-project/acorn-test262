__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 250,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 250,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 52,
        "end": 132,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 53,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 53,
              "end": 55,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 64,
              "end": 91,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 91,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 70,
                  "end": 91,
                  "left": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 73,
                    "decorators": [],
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 91,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 131,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 104,
              "end": 131,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 131,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 110,
                  "end": 131,
                  "left": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 113,
                    "decorators": [],
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 131,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
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
        "start": 133,
        "end": 250,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 248,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 248,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 248,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 153,
                    "end": 192,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 157,
                        "end": 191,
                        "id": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 186,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 159,
                            "end": 186,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 161,
                              "end": 186,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 161,
                                "end": 182,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 161,
                                  "end": 182,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 161,
                                    "end": 164,
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 165,
                                    "end": 182,
                                    "decorators": [],
                                    "name": "IntrinsicElements",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 183,
                                "end": 185,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 183,
                                  "end": 185,
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 189,
                          "end": 191,
                          "properties": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 201,
                    "end": 242,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 207,
                        "end": 241,
                        "id": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 236,
                          "decorators": [],
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 209,
                            "end": 236,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 211,
                              "end": 236,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 211,
                                "end": 232,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 211,
                                  "end": 232,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 211,
                                    "end": 214,
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 215,
                                    "end": 232,
                                    "decorators": [],
                                    "name": "IntrinsicElements",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 233,
                                "end": 235,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 233,
                                  "end": 235,
                                  "decorators": [],
                                  "name": "T2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 241,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
