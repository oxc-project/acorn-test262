__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 223,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 22,
      "end": 43,
      "body": {
        "type": "TSEnumBody",
        "start": 32,
        "end": 43,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 35,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 38,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 40,
            "end": 41,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 94,
      "body": {
        "type": "TSInterfaceBody",
        "start": 81,
        "end": 94,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 84,
            "end": 92,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 91,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 55,
        "end": 64,
        "decorators": [],
        "name": "Interface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 79,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 79,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 79,
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 142,
        "end": 145,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 125,
          "end": 140,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 140,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 137,
                "end": 140,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 139,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 137,
                "decorators": [],
                "name": "Interface",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 108,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 123,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 123,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 123,
                "decorators": [],
                "name": "Enum",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 223,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 211,
        "end": 223,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 221,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 214,
              "end": 220,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 214,
                "end": 217,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 159,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 160,
          "end": 209,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 209,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 163,
              "end": 209,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 163,
                  "end": 189,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 172,
                    "end": 189,
                    "params": [
                      {
                        "type": "TSUnionType",
                        "start": 173,
                        "end": 188,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 173,
                            "end": 179,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 173,
                              "end": 179,
                              "left": {
                                "type": "Identifier",
                                "start": 173,
                                "end": 177,
                                "decorators": [],
                                "name": "Enum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 178,
                                "end": 179,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 182,
                            "end": 188,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 182,
                              "end": 188,
                              "left": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 186,
                                "decorators": [],
                                "name": "Enum",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 187,
                                "end": 188,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 172,
                    "decorators": [],
                    "name": "Interface",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 192,
                  "end": 209,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 201,
                    "end": 209,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 202,
                        "end": 208,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 202,
                          "end": 208,
                          "left": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 206,
                            "decorators": [],
                            "name": "Enum",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 208,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 201,
                    "decorators": [],
                    "name": "Interface",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
