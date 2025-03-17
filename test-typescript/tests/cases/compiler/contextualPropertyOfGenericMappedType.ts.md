__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 178,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 21,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "name": "data",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 65,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
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
        {
          "type": "Identifier",
          "start": 67,
          "end": 128,
          "name": "handlers",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 128,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 77,
              "end": 128,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 80,
                "end": 92,
                "name": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 85,
                  "end": 92,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 91,
                    "end": 92,
                    "typeName": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
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
                "type": "TSFunctionType",
                "start": 95,
                "end": 125,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 107,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 103,
                        "end": 107,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 104,
                          "typeName": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 105,
                          "end": 106,
                          "typeName": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 109,
                    "end": 116,
                    "name": "prop",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 113,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 115,
                        "end": 116,
                        "typeName": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "name": "P",
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
                  "start": 118,
                  "end": 125,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 121,
                    "end": 125
                  }
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 85,
                "end": 92,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 91,
                  "end": 92,
                  "typeName": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
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
                "start": 80,
                "end": 81,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 57,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 56,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 50,
              "end": 56
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 135,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 131,
          "end": 135
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 177,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 176,
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 139,
            "end": 150,
            "properties": [
              {
                "type": "Property",
                "start": 141,
                "end": 148,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 147,
                  "end": 148,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 152,
            "end": 175,
            "properties": [
              {
                "type": "Property",
                "start": 154,
                "end": 173,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 158,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 158,
                  "end": 173,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 159,
                      "end": 164,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 166,
                      "end": 169,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 171,
                    "end": 173,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
