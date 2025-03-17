__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 315,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 144,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 144,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "name": "Equals",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 18,
          "end": 50,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 33,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 21,
                "name": "A1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 35,
              "end": 49,
              "name": {
                "type": "Identifier",
                "start": 35,
                "end": 37,
                "name": "A2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 57,
          "end": 144,
          "checkType": {
            "type": "TSFunctionType",
            "start": 58,
            "end": 87,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 58,
              "end": 61,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 60,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "A",
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 87,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 67,
                "end": 87,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 67,
                  "end": 68,
                  "typeName": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 77,
                  "end": 79,
                  "typeName": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 79,
                    "name": "A1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 82,
                  "end": 83,
                  "literal": {
                    "type": "Literal",
                    "start": 82,
                    "end": 83,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 86,
                  "end": 87,
                  "literal": {
                    "type": "Literal",
                    "start": 86,
                    "end": 87,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            }
          },
          "extendsType": {
            "type": "TSFunctionType",
            "start": 98,
            "end": 127,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 98,
              "end": 101,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 99,
                  "end": 100,
                  "name": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "name": "A",
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 127,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 107,
                "end": 127,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 107,
                  "end": 108,
                  "typeName": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 117,
                  "end": 119,
                  "typeName": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 119,
                    "name": "A2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 122,
                  "end": 123,
                  "literal": {
                    "type": "Literal",
                    "start": 122,
                    "end": 123,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 126,
                  "end": 127,
                  "literal": {
                    "type": "Literal",
                    "start": 126,
                    "end": 127,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            }
          },
          "trueType": {
            "type": "TSLiteralType",
            "start": 135,
            "end": 136,
            "literal": {
              "type": "Literal",
              "start": 135,
              "end": 136,
              "value": 1,
              "raw": "1"
            }
          },
          "falseType": {
            "type": "TSLiteralType",
            "start": 143,
            "end": 144,
            "literal": {
              "type": "Literal",
              "start": 143,
              "end": 144,
              "value": 0,
              "raw": "0"
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 146,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 159,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 159,
        "end": 162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 160,
            "end": 161,
            "name": {
              "type": "Identifier",
              "start": 160,
              "end": 161,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 163,
        "end": 182,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 180,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 180,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 173,
                "end": 180,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 176,
                  "end": 180,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 179,
                    "end": 180,
                    "typeName": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
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
      "start": 184,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 210,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 210,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 204,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 204,
                  "end": 210,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 209,
                        "name": "Date",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 245,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 232,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 232,
                  "end": 245,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 233,
                      "end": 244,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 233,
                          "end": 237,
                          "typeName": {
                            "type": "Identifier",
                            "start": 233,
                            "end": 237,
                            "name": "Date",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 240,
                          "end": 244
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 271,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 285,
        "name": "ShouldBe0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 288,
        "end": 314,
        "typeName": {
          "type": "Identifier",
          "start": 288,
          "end": 294,
          "name": "Equals",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 294,
          "end": 314,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 295,
              "end": 303,
              "exprName": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeQuery",
              "start": 305,
              "end": 313,
              "exprName": {
                "type": "Identifier",
                "start": 312,
                "end": 313,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
