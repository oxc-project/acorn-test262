__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 186,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 22,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 47,
        "name": "conforms",
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
          "start": 51,
          "end": 101,
          "name": "source",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 101,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 59,
              "end": 101,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 62,
                "end": 74,
                "name": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 67,
                  "end": 74,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 74,
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
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
                "start": 77,
                "end": 99,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 78,
                    "end": 87,
                    "name": "val",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 83,
                        "end": 87,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 83,
                          "end": 84,
                          "typeName": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 85,
                          "end": 86,
                          "typeName": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 86,
                            "name": "K",
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 92,
                    "end": 99
                  }
                }
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 67,
                "end": 74,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 73,
                  "end": 74,
                  "typeName": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 74,
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
                "start": 62,
                "end": 63,
                "name": "K",
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
        "start": 47,
        "end": 50,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 48,
            "end": 49,
            "name": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 125,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 104,
          "end": 125,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 105,
              "end": 113,
              "name": "value",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 110,
                "end": 113,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 112,
                  "end": 113,
                  "typeName": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
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
            "start": 115,
            "end": 125,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 118,
              "end": 125
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 184,
        "callee": {
          "type": "CallExpression",
          "start": 127,
          "end": 166,
          "callee": {
            "type": "Identifier",
            "start": 127,
            "end": 135,
            "name": "conforms",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "ObjectExpression",
              "start": 136,
              "end": 165,
              "properties": [
                {
                  "type": "Property",
                  "start": 138,
                  "end": 163,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 141,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 143,
                    "end": 163,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 144,
                        "end": 153,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 145,
                          "end": 153,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Literal",
                      "start": 158,
                      "end": 163,
                      "value": false,
                      "raw": "false"
                    },
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
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 167,
            "end": 183,
            "properties": [
              {
                "type": "Property",
                "start": 169,
                "end": 181,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 172,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 174,
                  "end": 181,
                  "value": "hello",
                  "raw": "\"hello\""
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
