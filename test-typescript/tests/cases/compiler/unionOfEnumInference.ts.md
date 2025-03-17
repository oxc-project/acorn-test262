__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 224,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 22,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 31,
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 34,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 37,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 40,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 32,
        "end": 43,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 40,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 64,
        "name": "Interface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 79,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 75,
              "end": 79,
              "typeName": {
                "type": "Identifier",
                "start": 75,
                "end": 79,
                "name": "Enum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 81,
        "end": 94,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 84,
            "end": 92,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "name": "foo",
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
          "start": 125,
          "end": 140,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 140,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 128,
              "end": 140,
              "typeName": {
                "type": "Identifier",
                "start": 128,
                "end": 137,
                "name": "Interface",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 137,
                "end": 140,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 142,
        "end": 145,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 108,
        "end": 124,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 123,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 123,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 123,
                "name": "Enum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 159,
        "name": "bar",
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
          "start": 160,
          "end": 209,
          "name": "x",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 172,
                    "name": "Interface",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 173,
                              "end": 179,
                              "left": {
                                "type": "Identifier",
                                "start": 173,
                                "end": 177,
                                "name": "Enum",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 178,
                                "end": 179,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 182,
                            "end": 188,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 182,
                              "end": 188,
                              "left": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 186,
                                "name": "Enum",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 187,
                                "end": 188,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 192,
                  "end": 209,
                  "typeName": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 201,
                    "name": "Interface",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 201,
                    "end": 209,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 202,
                        "end": 208,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 202,
                          "end": 208,
                          "left": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 206,
                            "name": "Enum",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 207,
                            "end": 208,
                            "name": "C",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 211,
        "end": 223,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 221,
            "expression": {
              "type": "CallExpression",
              "start": 214,
              "end": 220,
              "callee": {
                "type": "Identifier",
                "start": 214,
                "end": 217,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 218,
                  "end": 219,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
