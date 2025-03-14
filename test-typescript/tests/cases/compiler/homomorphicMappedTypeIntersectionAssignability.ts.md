homomorphicMappedTypeIntersectionAssignability.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 220,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 220,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 172,
            "end": 178,
            "expression": {
              "type": "AssignmentExpression",
              "start": 172,
              "end": 177,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 192,
            "end": 198,
            "expression": {
              "type": "AssignmentExpression",
              "start": 192,
              "end": 197,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 78,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 78,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 26,
              "end": 78,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 26,
                  "end": 43,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 28,
                      "end": 41,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 28,
                        "end": 32,
                        "decorators": [],
                        "name": "weak",
                        "optional": false
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 33,
                        "end": 41,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 46,
                  "end": 61,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 54,
                    "end": 61,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 55,
                        "end": 60,
                        "typeName": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 60,
                          "decorators": [],
                          "name": "TType",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 54,
                    "decorators": [],
                    "name": "Readonly",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 64,
                  "end": 78,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 66,
                      "end": 76,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 70,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 70,
                        "end": 76,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 72,
                          "end": 76,
                          "literal": {
                            "type": "Literal",
                            "start": 72,
                            "end": 76,
                            "raw": "\"ok\"",
                            "value": "ok"
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 84,
          "end": 121,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 121,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 87,
              "end": 121,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 95,
                "end": 121,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 96,
                    "end": 120,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 96,
                        "end": 101,
                        "typeName": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 101,
                          "decorators": [],
                          "name": "TType",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 104,
                        "end": 120,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 106,
                            "end": 118,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 106,
                              "end": 110,
                              "decorators": [],
                              "name": "name",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 110,
                              "end": 118,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 112,
                                "end": 118
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 87,
                "end": 95,
                "decorators": [],
                "name": "Readonly",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 127,
          "end": 164,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 128,
            "end": 164,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 130,
              "end": 164,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 130,
                  "end": 145,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 138,
                    "end": 145,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 139,
                        "end": 144,
                        "typeName": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 144,
                          "decorators": [],
                          "name": "TType",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 138,
                    "decorators": [],
                    "name": "Readonly",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 148,
                  "end": 164,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 150,
                      "end": 162,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 154,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 154,
                        "end": 162,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 156,
                          "end": 162
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 16,
              "decorators": [],
              "name": "TType",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
