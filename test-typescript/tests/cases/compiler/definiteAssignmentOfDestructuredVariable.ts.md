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
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 73,
        "name": "Options",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 121,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 100,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 119,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 118,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 108,
                "end": 118,
                "typeParameters": null,
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
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 150,
        "end": 273,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 156,
            "end": 186,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 186,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 162,
                "end": 186,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 165,
                  "end": 177,
                  "name": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 170,
                    "end": 177,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 176,
                      "end": 177,
                      "typeName": {
                        "type": "Identifier",
                        "start": 176,
                        "end": 177,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 180,
                  "end": 184,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 180,
                    "end": 181,
                    "typeName": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 182,
                    "end": 183,
                    "typeName": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 170,
                  "end": 177,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 176,
                    "end": 177,
                    "typeName": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 271,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 198,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 198,
              "end": 271,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "ObjectPattern",
                          "start": 215,
                          "end": 223,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 217,
                              "end": 218,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 218,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 218,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            },
                            {
                              "type": "Property",
                              "start": 220,
                              "end": 221,
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 220,
                                "end": 221,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 220,
                                "end": 221,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 226,
                          "end": 234,
                          "object": {
                            "type": "ThisExpression",
                            "start": 226,
                            "end": 230
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 231,
                            "end": 234,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 244,
                    "end": 254,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 244,
                      "end": 253,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "LogicalExpression",
                        "start": 246,
                        "end": 252,
                        "left": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "&&",
                        "right": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 252,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 263,
                    "end": 265,
                    "expression": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 264,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
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
        "start": 130,
        "end": 149,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 148,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 148,
                "name": "Options",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
