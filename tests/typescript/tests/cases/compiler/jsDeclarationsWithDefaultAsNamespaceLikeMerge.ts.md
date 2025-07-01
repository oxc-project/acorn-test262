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
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 22,
            "end": 25
          },
          "start": 19,
          "end": 25
        },
        "start": 16,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 43
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 45
          }
        ],
        "start": 43,
        "end": 46
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 57
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 54,
                  "end": 72
                }
              ],
              "start": 53,
              "end": 73
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 82
                      },
                      "typeArguments": null,
                      "start": 79,
                      "end": 82
                    },
                    "start": 79,
                    "end": 84
                  },
                  "start": 77,
                  "end": 84
                },
                "start": 74,
                "end": 84
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 98
                  },
                  "typeArguments": null,
                  "start": 95,
                  "end": 98
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 102
                  },
                  "typeArguments": null,
                  "start": 101,
                  "end": 102
                },
                "optional": false,
                "readonly": null,
                "start": 87,
                "end": 104
              },
              "start": 85,
              "end": 104
            },
            "start": 53,
            "end": 105
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 114
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 129
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 130,
                          "end": 136
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 138,
                          "end": 144
                        }
                      ],
                      "start": 129,
                      "end": 145
                    },
                    "start": 123,
                    "end": 145
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 111,
                  "end": 145
                }
              ],
              "start": 110,
              "end": 146
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 152,
                    "end": 155
                  },
                  "start": 150,
                  "end": 155
                },
                "start": 147,
                "end": 155
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 162
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 175
                    },
                    "typeArguments": null,
                    "start": 172,
                    "end": 175
                  },
                  "start": 166,
                  "end": 175
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 179
                  },
                  "typeArguments": null,
                  "start": 178,
                  "end": 179
                },
                "optional": false,
                "readonly": null,
                "start": 158,
                "end": 181
              },
              "start": 156,
              "end": 181
            },
            "start": 110,
            "end": 182
          }
        ],
        "start": 47,
        "end": 184
      },
      "declare": false,
      "start": 27,
      "end": 184
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamespacedMappers",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 212
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
              "name": "mapState",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 235
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Computed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 244
                      },
                      "typeArguments": null,
                      "start": 236,
                      "end": 244
                    }
                  ],
                  "start": 235,
                  "end": 245
                },
                "start": 229,
                "end": 245
              },
              "start": 227,
              "end": 245
            },
            "accessibility": null,
            "static": false,
            "start": 219,
            "end": 246
          }
        ],
        "start": 213,
        "end": 248
      },
      "declare": false,
      "start": 185,
      "end": 248
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createNamespacedHelpers",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 296
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NamespacedMappers",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 317
            },
            "typeArguments": null,
            "start": 300,
            "end": 317
          },
          "start": 298,
          "end": 317
        },
        "body": null,
        "expression": false,
        "start": 256,
        "end": 318
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 249,
      "end": 318
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 319
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createNamespacedHelpers",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 32
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createNamespacedHelpers",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 32
          },
          "importKind": "value",
          "start": 9,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./helper",
        "raw": "'./helper'",
        "start": 40,
        "end": 50
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 67
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 67
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 59,
                "end": 67
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 69
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createNamespacedHelpers",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 95
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 72,
            "end": 97
          },
          "definite": false,
          "start": 57,
          "end": 97
        }
      ],
      "declare": false,
      "start": 51,
      "end": 97
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "computed",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 127
            },
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mapState",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 150
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": "panels",
                            "raw": "'panels'",
                            "start": 152,
                            "end": 160
                          }
                        ],
                        "start": 151,
                        "end": 161
                      }
                    ],
                    "optional": false,
                    "start": 142,
                    "end": 162
                  },
                  "start": 139,
                  "end": 162
                }
              ],
              "start": 129,
              "end": 168
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 119,
            "end": 168
          }
        ],
        "start": 113,
        "end": 170
      },
      "exportKind": "value",
      "start": 98,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
