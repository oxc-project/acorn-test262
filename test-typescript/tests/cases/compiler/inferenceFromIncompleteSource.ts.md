__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 249,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 111,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 111,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 79,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 73,
              "decorators": [],
              "name": "items",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 78,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 75,
                "end": 78,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 75,
                  "end": 76,
                  "typeName": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 93,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 89,
              "decorators": [],
              "name": "itemKey",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 96,
            "end": 109,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "decorators": [],
        "name": "ListProps",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 62,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 55,
              "end": 62,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 188,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 188,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 138,
                "end": 188,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 161,
                    "end": 179,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 162,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 164,
                        "end": 179,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 173,
                          "end": 179,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 174,
                              "end": 175,
                              "typeName": {
                                "type": "Identifier",
                                "start": 174,
                                "end": 175,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 177,
                              "end": 178,
                              "typeName": {
                                "type": "Identifier",
                                "start": 177,
                                "end": 178,
                                "decorators": [],
                                "name": "K",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 173,
                          "decorators": [],
                          "name": "ListProps",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 181,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 138,
                  "end": 160,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 139,
                      "end": 140,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 140,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 142,
                      "end": 159,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 152,
                        "end": 159,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 158,
                          "end": 159,
                          "typeName": {
                            "type": "Identifier",
                            "start": 158,
                            "end": 159,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 191,
        "end": 247,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 201,
            "end": 246,
            "properties": [
              {
                "type": "Property",
                "start": 202,
                "end": 227,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 207,
                  "decorators": [],
                  "name": "items",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 209,
                  "end": 227,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 210,
                      "end": 226,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 211,
                          "end": 225,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 215,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 216,
                            "end": 225,
                            "raw": "' string'",
                            "value": " string"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 229,
                "end": 244,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 236,
                  "decorators": [],
                  "name": "itemKey",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 238,
                  "end": 244,
                  "raw": "'name'",
                  "value": "name"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 191,
          "end": 200,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
