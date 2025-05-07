__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 33,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 20,
          "decorators": [],
          "name": "Whatever",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 26,
          "end": 32,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 31,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 30,
                  "end": 31,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 20,
          "end": 23,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 21,
              "end": 22,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 107,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 41,
        "end": 107,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 67,
          "decorators": [],
          "name": "something",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 71,
            "end": 92,
            "decorators": [],
            "name": "cb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 92,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 75,
                "end": 92,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 81,
                    "end": 92,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 89,
                      "end": 92,
                      "params": [
                        {
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
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 89,
                      "decorators": [],
                      "name": "Whatever",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 93,
          "end": 106,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 95,
            "end": 106,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 103,
              "end": 106,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
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
              "start": 95,
              "end": 103,
              "decorators": [],
              "name": "Whatever",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 67,
          "end": 70,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 68,
              "end": 69,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 29,
        "raw": "'whatever'",
        "value": "whatever",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 112,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 112,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 45,
            "end": 111,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "decorators": [],
              "name": "run",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 51,
              "end": 111,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 97,
                "end": 111,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 97,
                  "end": 108,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 108,
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 77,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 58,
                      "end": 77,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 61,
                        "end": 77,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 64,
                          "end": 77,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 74,
                            "end": 77,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 75,
                                "end": 76,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 75,
                                  "end": 76,
                                  "decorators": [],
                                  "name": "E",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 64,
                            "end": 74,
                            "left": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 65,
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 66,
                              "end": 74,
                              "decorators": [],
                              "name": "Whatever",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 78,
                "end": 93,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 80,
                  "end": 93,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 90,
                    "end": 93,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 91,
                        "end": 92,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 80,
                    "end": 90,
                    "left": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 90,
                      "decorators": [],
                      "name": "Whatever",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 51,
                "end": 54,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 52,
                    "end": 53,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
