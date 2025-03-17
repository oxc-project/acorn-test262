__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 17,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 48,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 35,
                "end": 48,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 35,
                    "end": 41
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 44,
                    "end": 48
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 62,
            "end": 127,
            "properties": [
              {
                "type": "Property",
                "start": 66,
                "end": 125,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 70,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 70,
                  "end": 125,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 122,
                    "end": 125,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 93,
                      "end": 97,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 94,
                        "end": 97,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 96,
                          "end": 97,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 96,
                            "end": 97,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 100,
                      "end": 119,
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 102,
                        "end": 119,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 104,
                          "end": 119,
                          "types": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 104,
                              "end": 110,
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 108,
                                "end": 109,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 108,
                                  "end": 109,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 104,
                                "end": 107,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 104,
                                  "end": 107,
                                  "decorators": [],
                                  "name": "Bar",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 115,
                              "end": 119
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 70,
                    "end": 91,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 71,
                        "end": 90,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 81,
                          "end": 90,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 87,
                            "end": 90,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 90,
                              "decorators": [],
                              "name": "Bar",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 71,
                          "end": 72,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 149,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 129,
        "end": 148,
        "arguments": [
          {
            "type": "Literal",
            "start": 136,
            "end": 141,
            "raw": "\"bar\"",
            "value": "bar"
          },
          {
            "type": "Literal",
            "start": 143,
            "end": 147,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 129,
          "end": 135,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 131,
            "end": 135,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
