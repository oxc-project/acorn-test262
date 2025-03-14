inferentialTypingObjectLiteralMethod2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 53,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 26,
            "end": 51,
            "parameters": [
              {
                "type": "Identifier",
                "start": 27,
                "end": 36,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 30,
                    "end": 36
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 50,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 39,
                "end": 50,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 40,
                    "end": 44,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 43,
                        "end": 44,
                        "typeName": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 44,
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
                  "start": 46,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 49,
                    "end": 50,
                    "typeName": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                }
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
        "name": "Int",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 54,
      "end": 118,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 74,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 81,
          "end": 85,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 85,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 84,
              "end": 85,
              "typeName": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 87,
          "end": 99,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 99,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 93,
                "end": 99,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 95,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 97,
                    "end": 98,
                    "typeName": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 98,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 93,
                "decorators": [],
                "name": "Int",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 101,
          "end": 113,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 113,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 113,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 107,
                "end": 113,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 109,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 111,
                    "end": 112,
                    "typeName": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 107,
                "decorators": [],
                "name": "Int",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 114,
        "end": 117,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 116,
          "end": 117,
          "typeName": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 76,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 119,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 119,
        "end": 200,
        "arguments": [
          {
            "type": "Literal",
            "start": 123,
            "end": 125,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "ObjectExpression",
            "start": 127,
            "end": 162,
            "properties": [
              {
                "type": "Property",
                "start": 129,
                "end": 160,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 135,
                  "decorators": [],
                  "name": "method",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 135,
                  "end": 160,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 140,
                    "end": 160,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 142,
                        "end": 158,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 149,
                          "end": 158,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 151,
                            "decorators": [],
                            "name": "p1",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 152,
                            "end": 158,
                            "decorators": [],
                            "name": "length",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 136,
                      "end": 138,
                      "decorators": [],
                      "name": "p1",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 164,
            "end": 199,
            "properties": [
              {
                "type": "Property",
                "start": 166,
                "end": 197,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 172,
                  "decorators": [],
                  "name": "method",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 172,
                  "end": 197,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 177,
                    "end": 197,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 179,
                        "end": 195,
                        "argument": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 195,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 173,
                      "end": 175,
                      "decorators": [],
                      "name": "p2",
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
          "start": 119,
          "end": 122,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
