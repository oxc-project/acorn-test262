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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          }
        ],
        "start": 9,
        "end": 12
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 17
              },
              "typeArguments": null,
              "start": 16,
              "end": 17
            }
          ],
          "start": 15,
          "end": 18
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              },
              "start": 28,
              "end": 33
            }
          ],
          "start": 27,
          "end": 34
        },
        "trueType": {
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
                "name": "array",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 44
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Test",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 50
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
                            "start": 51,
                            "end": 52
                          },
                          "typeArguments": null,
                          "start": 51,
                          "end": 52
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 53,
                            "end": 54
                          },
                          "start": 53,
                          "end": 54
                        },
                        "start": 51,
                        "end": 55
                      }
                    ],
                    "start": 50,
                    "end": 56
                  },
                  "start": 46,
                  "end": 56
                },
                "start": 44,
                "end": 56
              },
              "accessibility": null,
              "static": false,
              "start": 39,
              "end": 56
            }
          ],
          "start": 37,
          "end": 58
        },
        "falseType": {
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
                "name": "notArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 71
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "typeArguments": null,
                  "start": 73,
                  "end": 74
                },
                "start": 71,
                "end": 74
              },
              "accessibility": null,
              "static": false,
              "start": 63,
              "end": 74
            }
          ],
          "start": 61,
          "end": 76
        },
        "start": 15,
        "end": 76
      },
      "declare": false,
      "start": 0,
      "end": 77
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 99
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 100,
                        "end": 106
                      },
                      "start": 100,
                      "end": 108
                    }
                  ],
                  "start": 99,
                  "end": 109
                },
                "start": 95,
                "end": 109
              },
              "start": 93,
              "end": 109
            },
            "start": 92,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 92,
          "end": 109
        }
      ],
      "declare": true,
      "start": 78,
      "end": 110
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
            "name": "y",
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
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 127
                    },
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
                              "name": "notArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 131,
                              "end": 139
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 141,
                                "end": 147
                              },
                              "start": 139,
                              "end": 147
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 131,
                            "end": 147
                          }
                        ],
                        "start": 129,
                        "end": 149
                      },
                      "start": 127,
                      "end": 149
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 122,
                    "end": 149
                  }
                ],
                "start": 120,
                "end": 151
              },
              "start": 118,
              "end": 151
            },
            "start": 117,
            "end": 151
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "definite": false,
          "start": 117,
          "end": 155
        }
      ],
      "declare": false,
      "start": 111,
      "end": 156
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
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 187
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 188,
                      "end": 194
                    }
                  ],
                  "start": 187,
                  "end": 195
                },
                "start": 183,
                "end": 195
              },
              "start": 181,
              "end": 195
            },
            "start": 180,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 180,
          "end": 195
        }
      ],
      "declare": true,
      "start": 166,
      "end": 196
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
                      "name": "notArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 216
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 218,
                        "end": 224
                      },
                      "start": 216,
                      "end": 224
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 208,
                    "end": 224
                  }
                ],
                "start": 206,
                "end": 226
              },
              "start": 204,
              "end": 226
            },
            "start": 203,
            "end": 226
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 230
          },
          "definite": false,
          "start": 203,
          "end": 230
        }
      ],
      "declare": false,
      "start": 197,
      "end": 231
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
