contextualPropertyOfGenericMappedType.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 58,
          "end": 65,
          "decorators": [],
          "name": "data",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 128,
          "decorators": [],
          "name": "handlers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 75,
            "end": 128,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 77,
              "end": 128,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 95,
                "end": 125,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 96,
                    "end": 107,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 107,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 103,
                        "end": 107,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 105,
                          "end": 106,
                          "typeName": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 103,
                          "end": 104,
                          "typeName": {
                            "type": "Identifier",
                            "start": 103,
                            "end": 104,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 109,
                    "end": 116,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
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
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
                      }
                    }
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
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 135,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 131,
          "end": 135
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 57,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 56,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 50,
              "end": 56
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "decorators": [],
                  "name": "data",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 147,
                  "end": 148,
                  "raw": "0",
                  "value": 0
                }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 158,
                  "decorators": [],
                  "name": "data",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 158,
                  "end": 173,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 171,
                    "end": 173,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 159,
                      "end": 164,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 166,
                      "end": 169,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
