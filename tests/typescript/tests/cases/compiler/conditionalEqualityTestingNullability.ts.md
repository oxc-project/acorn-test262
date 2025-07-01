__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Equals",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 18
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 21
              },
              "constraint": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 19,
              "end": 33
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 37
              },
              "constraint": {
                "type": "TSAnyKeyword",
                "start": 46,
                "end": 49
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 35,
              "end": 49
            }
          ],
          "start": 18,
          "end": 50
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSFunctionType",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 59,
                  "end": 60
                }
              ],
              "start": 58,
              "end": 61
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 68
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 68
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 79
                  },
                  "typeArguments": null,
                  "start": 77,
                  "end": 79
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 82,
                    "end": 83
                  },
                  "start": 82,
                  "end": 83
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 86,
                    "end": 87
                  },
                  "start": 86,
                  "end": 87
                },
                "start": 67,
                "end": 87
              },
              "start": 64,
              "end": 87
            },
            "start": 58,
            "end": 87
          },
          "extendsType": {
            "type": "TSFunctionType",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 100
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 99,
                  "end": 100
                }
              ],
              "start": 98,
              "end": 101
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 108
                  },
                  "typeArguments": null,
                  "start": 107,
                  "end": 108
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 119
                  },
                  "typeArguments": null,
                  "start": 117,
                  "end": 119
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 122,
                    "end": 123
                  },
                  "start": 122,
                  "end": 123
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 126,
                    "end": 127
                  },
                  "start": 126,
                  "end": 127
                },
                "start": 107,
                "end": 127
              },
              "start": 104,
              "end": 127
            },
            "start": 98,
            "end": 127
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 135,
              "end": 136
            },
            "start": 135,
            "end": 136
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 143,
              "end": 144
            },
            "start": 143,
            "end": 144
          },
          "start": 57,
          "end": 144
        },
        "declare": false,
        "start": 7,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 144
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 159
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 161
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 160,
            "end": 161
          }
        ],
        "start": 159,
        "end": 162
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 180
                    },
                    "typeArguments": null,
                    "start": 179,
                    "end": 180
                  },
                  "start": 176,
                  "end": 180
                },
                "start": 173,
                "end": 180
              },
              "start": 171,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 169,
            "end": 180
          }
        ],
        "start": 163,
        "end": 182
      },
      "declare": false,
      "start": 146,
      "end": 182
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 204
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 209
                      },
                      "typeArguments": null,
                      "start": 205,
                      "end": 209
                    }
                  ],
                  "start": 204,
                  "end": 210
                },
                "start": 201,
                "end": 210
              },
              "start": 199,
              "end": 210
            },
            "start": 198,
            "end": 210
          },
          "init": null,
          "definite": false,
          "start": 198,
          "end": 210
        }
      ],
      "declare": true,
      "start": 184,
      "end": 211
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 232
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 233,
                            "end": 237
                          },
                          "typeArguments": null,
                          "start": 233,
                          "end": 237
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 240,
                          "end": 244
                        }
                      ],
                      "start": 233,
                      "end": 244
                    }
                  ],
                  "start": 232,
                  "end": 245
                },
                "start": 229,
                "end": 245
              },
              "start": 227,
              "end": 245
            },
            "start": 226,
            "end": 245
          },
          "init": null,
          "definite": false,
          "start": 226,
          "end": 245
        }
      ],
      "declare": true,
      "start": 212,
      "end": 246
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ShouldBe0",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 285
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Equals",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 294
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 303
              },
              "typeArguments": null,
              "start": 295,
              "end": 303
            },
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "typeArguments": null,
              "start": 305,
              "end": 313
            }
          ],
          "start": 294,
          "end": 314
        },
        "start": 288,
        "end": 314
      },
      "declare": false,
      "start": 271,
      "end": 315
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 315
}
```
