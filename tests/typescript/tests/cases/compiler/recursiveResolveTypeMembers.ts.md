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
        "name": "PromisedTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 40
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              },
              "start": 51,
              "end": 56
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 41,
            "end": 56
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "constraint": null,
            "default": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 70
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "L",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 73
                      },
                      "typeArguments": null,
                      "start": 72,
                      "end": 73
                    },
                    "start": 70,
                    "end": 73
                  },
                  "value": null,
                  "start": 63,
                  "end": 73
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 78,
                  "end": 82
                },
                "start": 75,
                "end": 82
              },
              "start": 62,
              "end": 82
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 58,
            "end": 82
          }
        ],
        "start": 40,
        "end": 83
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 91
          },
          "typeArguments": null,
          "start": 90,
          "end": 91
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "H",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 110,
                    "end": 111
                  },
                  "start": 104,
                  "end": 111
                },
                "start": 102,
                "end": 111
              },
              "start": 101,
              "end": 111
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 120
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 128,
                    "end": 129
                  },
                  "start": 122,
                  "end": 129
                },
                "start": 120,
                "end": 129
              },
              "value": null,
              "start": 113,
              "end": 129
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 142
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "H",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 144
                        },
                        "typeArguments": null,
                        "start": 143,
                        "end": 144
                      }
                    ],
                    "start": 142,
                    "end": 145
                  },
                  "start": 135,
                  "end": 145
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PromisedTuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 163
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 164,
                            "end": 165
                          },
                          "typeArguments": null,
                          "start": 164,
                          "end": 165
                        }
                      ],
                      "start": 163,
                      "end": 166
                    },
                    "start": 150,
                    "end": 166
                  },
                  "start": 147,
                  "end": 166
                }
              ],
              "start": 134,
              "end": 167
            },
            "start": 131,
            "end": 167
          },
          "start": 100,
          "end": 167
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 170,
          "end": 172
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 175,
          "end": 177
        },
        "start": 90,
        "end": 177
      },
      "declare": false,
      "start": 22,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promised",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "PromisedTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 208
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 210,
                    "end": 211
                  },
                  "start": 210,
                  "end": 211
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 213,
                    "end": 214
                  },
                  "start": 213,
                  "end": 214
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 216,
                    "end": 217
                  },
                  "start": 216,
                  "end": 217
                }
              ],
              "start": 209,
              "end": 218
            }
          ],
          "start": 208,
          "end": 219
        },
        "start": 195,
        "end": 219
      },
      "declare": false,
      "start": 179,
      "end": 219
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 220
}
```
