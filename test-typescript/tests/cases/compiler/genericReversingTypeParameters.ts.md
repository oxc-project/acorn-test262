__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 291,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 24,
            "end": 58,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 44,
              "decorators": [],
              "name": "inverseBiMap",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 57,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 51,
                  "end": 57,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 52,
                      "end": 53,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 53,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 55,
                      "end": 56,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 56,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 51,
                  "decorators": [],
                  "name": "BiMap",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 101,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 101,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 101,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 87,
                    "end": 99,
                    "argument": {
                      "type": "Literal",
                      "start": 94,
                      "end": 98,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
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
                  "start": 74,
                  "end": 80,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 79,
                      "end": 80,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 80,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 81,
                "end": 84,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 84,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 152,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 120,
              "decorators": [],
              "name": "inverse",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 138,
                    "end": 150,
                    "argument": {
                      "type": "Literal",
                      "start": 145,
                      "end": 149,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 122,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 135,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 129,
                    "end": 135,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 130,
                        "end": 131,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 130,
                          "end": 131,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 133,
                        "end": 134,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 129,
                    "decorators": [],
                    "name": "BiMap",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "BiMap",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 161,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 164,
            "end": 191,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 168,
              "end": 173,
              "decorators": [],
              "name": "BiMap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 173,
              "end": 189,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 174,
                  "end": 180
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 182,
                  "end": 188
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 199,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 202,
            "end": 211,
            "arguments": [
              {
                "type": "Literal",
                "start": 208,
                "end": 210,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 202,
              "end": 207,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 202,
                "end": 203,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 204,
                "end": 207,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 233,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 219,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 222,
            "end": 233,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 222,
              "end": 231,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 224,
                "end": 231,
                "decorators": [],
                "name": "inverse",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 278,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 281,
            "end": 289,
            "arguments": [
              {
                "type": "Literal",
                "start": 287,
                "end": 288,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 281,
              "end": 286,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 283,
                "end": 286,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
