__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 274,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 141,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 24,
        "decorators": [],
        "name": "MySettable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 36,
          "end": 44,
          "expression": {
            "type": "Identifier",
            "start": 36,
            "end": 44,
            "decorators": [],
            "name": "Settable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 141,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 94,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 54,
              "end": 94,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 86,
                  "decorators": [],
                  "name": "option",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 63,
                      "end": 86,
                      "typeName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 69,
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 69,
                        "end": 86,
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
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 93,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 89,
                  "end": 93
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 139,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 102,
              "end": 139,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 115,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 117,
                  "end": 131,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 122,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 124,
                      "end": 131
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 132,
                "end": 138,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 134,
                  "end": 138
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 143,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 161,
        "decorators": [],
        "name": "Settable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 162,
        "end": 274,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 168,
            "end": 272,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 172,
                "end": 264,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 179,
                  "end": 264,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 181,
                    "end": 264,
                    "types": [
                      {
                        "type": "TSTupleType",
                        "start": 181,
                        "end": 214,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 182,
                            "end": 213,
                            "label": {
                              "type": "Identifier",
                              "start": 182,
                              "end": 188,
                              "decorators": [],
                              "name": "option",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 190,
                              "end": 213,
                              "typeName": {
                                "type": "Identifier",
                                "start": 190,
                                "end": 196,
                                "decorators": [],
                                "name": "Record",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 196,
                                "end": 213,
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
                                ]
                              }
                            },
                            "optional": false
                          }
                        ]
                      },
                      {
                        "type": "TSTupleType",
                        "start": 217,
                        "end": 247,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 218,
                            "end": 230,
                            "label": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 222,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 224,
                              "end": 230
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 232,
                            "end": 246,
                            "label": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 237,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "elementType": {
                              "type": "TSUnknownKeyword",
                              "start": 239,
                              "end": 246
                            },
                            "optional": false
                          }
                        ]
                      },
                      {
                        "type": "TSTupleType",
                        "start": 250,
                        "end": 264,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 251,
                            "end": 263,
                            "label": {
                              "type": "Identifier",
                              "start": 251,
                              "end": 255,
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 257,
                              "end": 263
                            },
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 271,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 267,
                "end": 271
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
