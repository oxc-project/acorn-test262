__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MySettable",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 24
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Settable",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 44
          },
          "typeArguments": null,
          "start": 36,
          "end": 44
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 54
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "option",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 69
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 70,
                            "end": 76
                          },
                          {
                            "type": "TSUnknownKeyword",
                            "start": 78,
                            "end": 85
                          }
                        ],
                        "start": 69,
                        "end": 86
                      },
                      "start": 63,
                      "end": 86
                    },
                    "start": 61,
                    "end": 86
                  },
                  "start": 55,
                  "end": 86
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 89,
                  "end": 93
                },
                "start": 87,
                "end": 93
              },
              "body": null,
              "expression": false,
              "start": 54,
              "end": 94
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 51,
            "end": 94
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
                  },
                  "start": 103,
                  "end": 115
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 124,
                      "end": 131
                    },
                    "start": 122,
                    "end": 131
                  },
                  "start": 117,
                  "end": 131
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 134,
                  "end": 138
                },
                "start": 132,
                "end": 138
              },
              "body": null,
              "expression": false,
              "start": 102,
              "end": 139
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 99,
            "end": 139
          }
        ],
        "start": 45,
        "end": 141
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Settable",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 161
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                  "start": 175,
                  "end": 179
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "option",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 182,
                              "end": 188
                            },
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Record",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 190,
                                "end": 196
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 197,
                                    "end": 203
                                  },
                                  {
                                    "type": "TSUnknownKeyword",
                                    "start": 205,
                                    "end": 212
                                  }
                                ],
                                "start": 196,
                                "end": 213
                              },
                              "start": 190,
                              "end": 213
                            },
                            "optional": false,
                            "start": 182,
                            "end": 213
                          }
                        ],
                        "start": 181,
                        "end": 214
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 218,
                              "end": 222
                            },
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 224,
                              "end": 230
                            },
                            "optional": false,
                            "start": 218,
                            "end": 230
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 232,
                              "end": 237
                            },
                            "elementType": {
                              "type": "TSUnknownKeyword",
                              "start": 239,
                              "end": 246
                            },
                            "optional": false,
                            "start": 232,
                            "end": 246
                          }
                        ],
                        "start": 217,
                        "end": 247
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 251,
                              "end": 255
                            },
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 257,
                              "end": 263
                            },
                            "optional": false,
                            "start": 251,
                            "end": 263
                          }
                        ],
                        "start": 250,
                        "end": 264
                      }
                    ],
                    "start": 181,
                    "end": 264
                  },
                  "start": 179,
                  "end": 264
                },
                "value": null,
                "start": 172,
                "end": 264
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 267,
                "end": 271
              },
              "start": 265,
              "end": 271
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 168,
            "end": 272
          }
        ],
        "start": 162,
        "end": 274
      },
      "declare": false,
      "start": 143,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 274
}
```
