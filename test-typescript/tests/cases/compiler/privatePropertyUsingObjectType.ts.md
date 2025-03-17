__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 334,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 296,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 296,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 26,
          "name": "FilterManager",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 27,
          "end": 296,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 33,
              "end": 87,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 41,
                "end": 57,
                "name": "_filterProviders",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 57,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 59,
                  "end": 86,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 61,
                      "end": 84,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 66,
                        "name": "index",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 66,
                        "end": 83,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 68,
                          "end": 83,
                          "typeName": {
                            "type": "Identifier",
                            "start": 68,
                            "end": 83,
                            "name": "IFilterProvider",
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
                }
              },
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 92,
              "end": 157,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 117,
                "name": "_filterProviders2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 156,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 119,
                  "end": 156,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 121,
                      "end": 154,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 122,
                          "end": 135,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 127,
                            "end": 135,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 129,
                              "end": 135
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 136,
                        "end": 153,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 138,
                          "end": 153,
                          "typeName": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 153,
                            "name": "IFilterProvider",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
                }
              },
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 162,
              "end": 227,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 170,
                "end": 187,
                "name": "_filterProviders3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 187,
                "end": 226,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 189,
                  "end": 226,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 191,
                      "end": 224,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 192,
                          "end": 205,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 197,
                            "end": 205,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 199,
                              "end": 205
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 206,
                        "end": 223,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 208,
                          "end": 223,
                          "typeName": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 223,
                            "name": "IFilterProvider",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ]
                }
              },
              "accessibility": "private"
            },
            {
              "type": "PropertyDefinition",
              "start": 232,
              "end": 294,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 240,
                "end": 257,
                "name": "_filterProviders4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 257,
                "end": 293,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 259,
                  "end": 293,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 260,
                      "end": 273,
                      "name": "index",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 265,
                        "end": 273,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 267,
                          "end": 273
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 293,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 278,
                      "end": 293,
                      "typeName": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 293,
                        "name": "IFilterProvider",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "accessibility": "private"
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 297,
      "end": 333,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 304,
        "end": 333,
        "id": {
          "type": "Identifier",
          "start": 314,
          "end": 329,
          "name": "IFilterProvider",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 330,
          "end": 333,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
