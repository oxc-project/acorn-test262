__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 229,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 226,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 90,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "one",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 90,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 90,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 69,
                    "end": 83,
                    "argument": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 82,
                      "decorators": [],
                      "name": "source",
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
                  "start": 29,
                  "end": 38,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 37,
                      "end": 38,
                      "typeName": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 53,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 47,
                      "end": 53
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 54,
                "end": 57,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 56,
                  "end": 57,
                  "typeName": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 25,
                "end": 28,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 26,
                    "end": 27,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 27,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 121,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "goo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 121,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 110,
                    "end": 119,
                    "argument": {
                      "type": "Literal",
                      "start": 117,
                      "end": 118,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 223,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "decorators": [],
              "name": "two",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 155,
                "end": 223,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 165,
                    "end": 196,
                    "argument": {
                      "type": "CallExpression",
                      "start": 172,
                      "end": 195,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 184,
                          "end": 190,
                          "decorators": [],
                          "name": "source",
                          "optional": false
                        },
                        {
                          "type": "Literal",
                          "start": 192,
                          "end": 194,
                          "raw": "42",
                          "value": 42
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 172,
                        "end": 180,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 172,
                          "end": 176
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 180,
                          "decorators": [],
                          "name": "one",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 180,
                        "end": 183,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 181,
                            "end": 182,
                            "typeName": {
                              "type": "Identifier",
                              "start": 181,
                              "end": 182,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
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
                  "start": 141,
                  "end": 150,
                  "decorators": [],
                  "name": "source",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 149,
                      "end": 150,
                      "typeName": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
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
                "start": 151,
                "end": 154,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 154,
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 137,
                "end": 140,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 138,
                    "end": 139,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
