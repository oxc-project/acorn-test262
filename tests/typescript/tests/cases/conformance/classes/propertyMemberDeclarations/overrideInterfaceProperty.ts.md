__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 388,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 39,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
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
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 75,
        "decorators": [],
        "name": "MupConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 76,
        "end": 217,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 82,
            "end": 103,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 102,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "Mup",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 108,
            "end": 176,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 111,
              "end": 117,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 112,
                  "end": 113,
                  "name": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 115,
                  "end": 116,
                  "name": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
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
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 169,
                  "decorators": [],
                  "name": "Mup",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 181,
            "end": 215,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 199,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 214,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 204,
                  "decorators": [],
                  "name": "Mup",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
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
      "type": "VariableDeclaration",
      "start": 218,
      "end": 250,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 249,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 252,
      "end": 345,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 262,
        "decorators": [],
        "name": "Sizz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 271,
        "end": 274,
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 345,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 343,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 328,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 343,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 346,
      "end": 388,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 358,
        "decorators": [],
        "name": "Kasizz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 367,
        "end": 370,
        "decorators": [],
        "name": "Mup",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 371,
        "end": 388,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 377,
            "end": 386,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 381,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "UnaryExpression",
              "start": 384,
              "end": 386,
              "operator": "-",
              "argument": {
                "type": "Literal",
                "start": 385,
                "end": 386,
                "value": 1,
                "raw": "1"
              },
              "prefix": true
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
