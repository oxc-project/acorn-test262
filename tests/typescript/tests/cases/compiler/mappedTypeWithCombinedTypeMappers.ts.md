__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Meta",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
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
              "start": 32,
              "end": 33
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 33
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 36
          }
        ],
        "start": 31,
        "end": 37
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 56
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "typeArguments": null,
            "start": 66,
            "end": 67
          },
          "start": 60,
          "end": 67
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 85
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 88
                    },
                    "typeArguments": null,
                    "start": 87,
                    "end": 88
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    },
                    "typeArguments": null,
                    "start": 89,
                    "end": 90
                  },
                  "start": 87,
                  "end": 91
                },
                "start": 85,
                "end": 91
              },
              "accessibility": null,
              "static": false,
              "start": 80,
              "end": 92
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "also",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 105
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                "start": 105,
                "end": 108
              },
              "accessibility": null,
              "static": false,
              "start": 101,
              "end": 109
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "children",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 135
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 141
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 142,
                            "end": 143
                          },
                          "typeArguments": null,
                          "start": 142,
                          "end": 143
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 144,
                            "end": 145
                          },
                          "typeArguments": null,
                          "start": 144,
                          "end": 145
                        },
                        "start": 142,
                        "end": 146
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 148,
                          "end": 149
                        },
                        "typeArguments": null,
                        "start": 148,
                        "end": 149
                      }
                    ],
                    "start": 141,
                    "end": 150
                  },
                  "start": 137,
                  "end": 150
                },
                "start": 135,
                "end": 150
              },
              "accessibility": null,
              "static": false,
              "start": 118,
              "end": 151
            }
          ],
          "start": 70,
          "end": 157
        },
        "optional": false,
        "readonly": true,
        "start": 40,
        "end": 160
      },
      "declare": false,
      "start": 22,
      "end": 160
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Input",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 177
      },
      "typeParameters": null,
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
              "start": 184,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              },
              "start": 185,
              "end": 193
            },
            "accessibility": null,
            "static": false,
            "start": 184,
            "end": 194
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
            },
            "accessibility": null,
            "static": false,
            "start": 199,
            "end": 209
          }
        ],
        "start": 178,
        "end": 211
      },
      "declare": false,
      "start": 162,
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
            "name": "output",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Meta",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 239
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 245
                      },
                      "typeArguments": null,
                      "start": 240,
                      "end": 245
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 247,
                      "end": 254
                    }
                  ],
                  "start": 239,
                  "end": 255
                },
                "start": 235,
                "end": 255
              },
              "start": 233,
              "end": 255
            },
            "start": 227,
            "end": 255
          },
          "init": null,
          "definite": false,
          "start": 227,
          "end": 255
        }
      ],
      "declare": true,
      "start": 213,
      "end": 256
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
            "name": "shouldFail",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "important",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 287
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 289,
                        "end": 296
                      },
                      "start": 287,
                      "end": 296
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 278,
                    "end": 296
                  }
                ],
                "start": 276,
                "end": 298
              },
              "start": 274,
              "end": 298
            },
            "start": 264,
            "end": 298
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "output",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "optional": false,
              "computed": false,
              "start": 301,
              "end": 309
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 318
            },
            "optional": false,
            "computed": false,
            "start": 301,
            "end": 318
          },
          "definite": false,
          "start": 264,
          "end": 318
        }
      ],
      "declare": false,
      "start": 258,
      "end": 319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 319
}
```
