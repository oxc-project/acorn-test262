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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 33,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 20,
          "name": "Whatever",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
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
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 26,
          "end": 32,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 31,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 30,
                  "end": 31,
                  "typeName": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 107,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 41,
        "end": 107,
        "id": {
          "type": "Identifier",
          "start": 58,
          "end": 67,
          "name": "something",
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
            "start": 71,
            "end": 92,
            "name": "cb",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 92,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 75,
                "end": 92,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 81,
                    "end": 92,
                    "typeName": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 89,
                      "name": "Whatever",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 89,
                      "end": 92,
                      "params": [
                        {
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
                      ]
                    }
                  }
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
          "start": 67,
          "end": 70,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 68,
              "end": 69,
              "name": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
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
          "start": 93,
          "end": 106,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 95,
            "end": 106,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 103,
              "name": "Whatever",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 103,
              "end": 106,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
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
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 29,
        "value": "whatever",
        "raw": "'whatever'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 112,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 39,
        "end": 112,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 45,
            "end": 111,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "name": "run",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 51,
              "end": 111,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 77,
                  "name": "i",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 58,
                      "end": 77,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 61,
                        "end": 77,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 64,
                          "end": 77,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 64,
                            "end": 74,
                            "left": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 65,
                              "name": "E",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 66,
                              "end": 74,
                              "name": "Whatever",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 74,
                            "end": 77,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 75,
                                "end": 76,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 75,
                                  "end": 76,
                                  "name": "E",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 97,
                "end": 111,
                "callee": {
                  "type": "MemberExpression",
                  "start": 97,
                  "end": 108,
                  "object": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 108,
                    "name": "something",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "name": "E",
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
                "start": 78,
                "end": 93,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 80,
                  "end": 93,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 80,
                    "end": 90,
                    "left": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 81,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 90,
                      "name": "Whatever",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 90,
                    "end": 93,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 91,
                        "end": 92,
                        "typeName": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
