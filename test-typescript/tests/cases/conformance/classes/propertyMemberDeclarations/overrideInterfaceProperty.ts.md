__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 389,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "body": {
        "type": "TSInterfaceBody",
        "start": 20,
        "end": 50,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 26,
            "end": 48,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "size",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
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
        "name": "Mup",
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
              "name": "K",
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
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 217,
      "body": {
        "type": "TSInterfaceBody",
        "start": 76,
        "end": 217,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 82,
            "end": 103,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 102,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 92,
                  "end": 102,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 93,
                      "end": 96
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "Mup",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 108,
            "end": 176,
            "params": [
              {
                "type": "Identifier",
                "start": 118,
                "end": 163,
                "decorators": [],
                "name": "entries",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 126,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 128,
                    "end": 163,
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "start": 128,
                        "end": 156,
                        "operator": "readonly",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 137,
                          "end": 156,
                          "elementType": {
                            "type": "TSTypeOperator",
                            "start": 138,
                            "end": 153,
                            "operator": "readonly",
                            "typeAnnotation": {
                              "type": "TSTupleType",
                              "start": 147,
                              "end": 153,
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 148,
                                  "end": 149,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 148,
                                    "end": 149,
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 151,
                                  "end": 152,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 151,
                                    "end": 152,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false
                                  }
                                }
                              ]
                            }
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 159,
                        "end": 163
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 175,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 169,
                  "end": 175,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 170,
                      "end": 171,
                      "typeName": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 171,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 173,
                      "end": 174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 173,
                        "end": 174,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 169,
                  "decorators": [],
                  "name": "Mup",
                  "optional": false
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 111,
              "end": 117,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 112,
                  "end": 113,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 115,
                  "end": 116,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 181,
            "end": 215,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 199,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 214,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 204,
                  "end": 214,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 205,
                      "end": 208
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 210,
                      "end": 213
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 204,
                  "decorators": [],
                  "name": "Mup",
                  "optional": false
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
        "start": 61,
        "end": 75,
        "decorators": [],
        "name": "MupConstructor",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 249,
            "decorators": [],
            "name": "Mup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 249,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 249,
                  "decorators": [],
                  "name": "MupConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 252,
      "end": 345,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 345,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 343,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 328,
              "decorators": [],
              "name": "size",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 343,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 343,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 333,
                    "end": 341,
                    "argument": {
                      "type": "Literal",
                      "start": 340,
                      "end": 341,
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 262,
        "decorators": [],
        "name": "Sizz",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 271,
        "end": 274,
        "decorators": [],
        "name": "Mup",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 346,
      "end": 388,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 371,
        "end": 388,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 377,
            "end": 386,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 381,
              "decorators": [],
              "name": "size",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "UnaryExpression",
              "start": 384,
              "end": 386,
              "argument": {
                "type": "Literal",
                "start": 385,
                "end": 386,
                "raw": "1",
                "value": 1
              },
              "operator": "-",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 358,
        "decorators": [],
        "name": "Kasizz",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 367,
        "end": 370,
        "decorators": [],
        "name": "Mup",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
