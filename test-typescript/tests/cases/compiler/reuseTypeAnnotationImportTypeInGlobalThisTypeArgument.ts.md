__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 160,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 160,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 37,
          "name": "handleParamGovernance",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 38,
            "end": 46,
            "name": "zcf",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 46,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 47,
          "end": 159,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 49,
            "end": 159,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 53,
                "end": 157,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 64,
                  "name": "publicMixin",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 66,
                    "end": 156,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 72,
                        "end": 152,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 89,
                          "name": "getGovernedParams",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 89,
                          "end": 151,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 91,
                            "end": 151,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 94,
                              "end": 151,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 97,
                                "end": 151,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 97,
                                  "end": 112,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 97,
                                    "end": 107,
                                    "name": "globalThis",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 108,
                                    "end": 112,
                                    "name": "ERef",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 112,
                                  "end": 151,
                                  "params": [
                                    {
                                      "type": "TSImportType",
                                      "start": 113,
                                      "end": 150,
                                      "argument": {
                                        "type": "TSLiteralType",
                                        "start": 120,
                                        "end": 132,
                                        "literal": {
                                          "type": "Literal",
                                          "start": 120,
                                          "end": 132,
                                          "value": "./types.js",
                                          "raw": "\"./types.js\""
                                        }
                                      },
                                      "options": null,
                                      "qualifier": {
                                        "type": "Identifier",
                                        "start": 134,
                                        "end": 150,
                                        "name": "ParamStateRecord",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "_ERef",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 16,
        "end": 30,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 16,
            "end": 17,
            "typeName": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 20,
            "end": 30,
            "typeName": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "name": "Promise",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 27,
              "end": 30,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 28,
                  "end": 29,
                  "typeName": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 99,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 78,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 57,
            "name": "ParamStateRecord",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 61,
            "end": 78,
            "name": "_ParamStateRecord",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 86,
        "end": 98,
        "value": "./types.js",
        "raw": "'./types.js'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 100,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 114,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 115,
        "end": 219,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 142,
            "end": 217,
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "start": 155,
                "end": 168,
                "local": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 160,
                  "name": "_ERef",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 168,
                  "name": "ERef",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              },
              {
                "type": "ExportSpecifier",
                "start": 174,
                "end": 211,
                "local": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 191,
                  "name": "_ParamStateRecord",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exported": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 211,
                  "name": "ParamStateRecord",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "exportKind": "value"
              }
            ],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
