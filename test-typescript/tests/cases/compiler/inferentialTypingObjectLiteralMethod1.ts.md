__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 44,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 26,
            "end": 42,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 32,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 37,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "static": false
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
      "start": 45,
      "end": 109,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 76,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 76,
            "typeAnnotation": {
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
        },
        {
          "type": "Identifier",
          "start": 78,
          "end": 90,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 90,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 90,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 84,
                "end": 90,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 86,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 88,
                    "end": 89,
                    "typeName": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
                "decorators": [],
                "name": "Int",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 92,
          "end": 104,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 104,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 95,
              "end": 104,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 98,
                "end": 104,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 102,
                    "end": 103,
                    "typeName": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
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
        "start": 105,
        "end": 108,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 107,
          "end": 108,
          "typeName": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 71,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 67,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 70,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
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
      "start": 110,
      "end": 192,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 191,
        "arguments": [
          {
            "type": "Literal",
            "start": 114,
            "end": 116,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "ObjectExpression",
            "start": 118,
            "end": 153,
            "properties": [
              {
                "type": "Property",
                "start": 120,
                "end": 151,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 126,
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
                  "start": 126,
                  "end": 151,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 131,
                    "end": 151,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 133,
                        "end": 149,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 140,
                          "end": 149,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 140,
                            "end": 142,
                            "decorators": [],
                            "name": "p1",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 149,
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
                      "start": 127,
                      "end": 129,
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
            "start": 155,
            "end": 190,
            "properties": [
              {
                "type": "Property",
                "start": 157,
                "end": 188,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 163,
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
                  "start": 163,
                  "end": 188,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 168,
                    "end": 188,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 170,
                        "end": 186,
                        "argument": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 186,
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
                      "start": 164,
                      "end": 166,
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
          "start": 110,
          "end": 113,
          "decorators": [],
          "name": "foo",
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
