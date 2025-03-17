__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 273,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 121,
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 100,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 99,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 84,
                "end": 99,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 84,
                    "end": 90
                  },
                  {
                    "type": "TSObjectKeyword",
                    "start": 93,
                    "end": 99
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 119,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 118,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 108,
                "end": 118,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 114,
                    "end": 118
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 73,
        "decorators": [],
        "name": "Options",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 273,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 150,
        "end": 273,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 156,
            "end": 186,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 186,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 162,
                "end": 186,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 170,
                  "end": 177,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 176,
                    "end": 177,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": null,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 180,
                  "end": 184,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 182,
                    "end": 183,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 181,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 271,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 198,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 198,
              "end": 271,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 201,
                "end": 271,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 211,
                    "end": 235,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 215,
                        "end": 234,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 215,
                          "end": 223,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 217,
                              "end": 218,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 218,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 218,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 220,
                              "end": 221,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 220,
                                "end": 221,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "start": 220,
                                "end": 221,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 226,
                          "end": 234,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 226,
                            "end": 230
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 231,
                            "end": 234,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 244,
                    "end": 254,
                    "directive": null,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 244,
                      "end": 253,
                      "argument": {
                        "type": "LogicalExpression",
                        "start": 246,
                        "end": 252,
                        "operator": "&&",
                        "left": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 263,
                    "end": 265,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 264,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 130,
        "end": 149,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 148,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 148,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 148,
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
