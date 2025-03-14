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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 47,
        "decorators": [],
        "name": "conforms",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 101,
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 101,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 59,
              "end": 101,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 77,
                "end": 99,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 78,
                    "end": 87,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 83,
                        "end": 87,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 85,
                          "end": 86,
                          "typeName": {
                            "type": "Identifier",
                            "start": 85,
                            "end": 86,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 83,
                          "end": 84,
                          "typeName": {
                            "type": "Identifier",
                            "start": 83,
                            "end": 84,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
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
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 125,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 104,
          "end": 125,
          "params": [
            {
              "type": "Identifier",
              "start": 105,
              "end": 113,
              "decorators": [],
              "name": "value",
              "optional": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
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
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 47,
        "end": 50,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 48,
            "end": 49,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
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
      "start": 127,
      "end": 185,
      "expression": {
        "type": "CallExpression",
        "start": 127,
        "end": 184,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 172,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 174,
                  "end": 181,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "CallExpression",
          "start": 127,
          "end": 166,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 141,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 143,
                    "end": 163,
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "start": 158,
                      "end": 163,
                      "raw": "false",
                      "value": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 144,
                        "end": 153,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 145,
                          "end": 153,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 127,
            "end": 135,
            "decorators": [],
            "name": "conforms",
            "optional": false
          },
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
