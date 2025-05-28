__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 319,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 16,
        "end": 25,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 19,
          "end": 25,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 22,
            "end": 25
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 43,
        "decorators": [],
        "name": "Mapper",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 47,
        "end": 184,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 53,
            "end": 105,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 53,
              "end": 73,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 54,
                  "end": 72,
                  "name": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 57,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 84,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 79,
                    "end": 84,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 79,
                      "end": 82,
                      "typeName": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 82,
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 104,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 87,
                "end": 104,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 98,
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 101,
                  "end": 102,
                  "typeName": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "optional": false,
                "readonly": null
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 110,
            "end": 182,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 110,
              "end": 146,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 111,
                  "end": 145,
                  "name": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 114,
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 129,
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 129,
                      "end": 145,
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
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 155,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 150,
                  "end": 155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 152,
                    "end": 155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 181,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 158,
                "end": 181,
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 166,
                  "end": 175,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 175,
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 178,
                  "end": 179,
                  "typeName": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "optional": false,
                "readonly": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 185,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 212,
        "decorators": [],
        "name": "NamespacedMappers",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 213,
        "end": 248,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 219,
            "end": 246,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 227,
              "decorators": [],
              "name": "mapState",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "end": 235,
                  "decorators": [],
                  "name": "Mapper",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 235,
                  "end": 245,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 236,
                      "end": 244,
                      "typeName": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 244,
                        "decorators": [],
                        "name": "Computed",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
      "type": "ExportNamedDeclaration",
      "start": 249,
      "end": 318,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 256,
        "end": 318,
        "id": {
          "type": "Identifier",
          "start": 273,
          "end": 296,
          "decorators": [],
          "name": "createNamespacedHelpers",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 298,
          "end": 317,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 300,
            "end": 317,
            "typeName": {
              "type": "Identifier",
              "start": 300,
              "end": 317,
              "decorators": [],
              "name": "NamespacedMappers",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
  "end": 170,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 50,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 32,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 32,
            "decorators": [],
            "name": "createNamespacedHelpers",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 32,
            "decorators": [],
            "name": "createNamespacedHelpers",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 40,
        "end": 50,
        "value": "./helper",
        "raw": "'./helper'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 97,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 97,
          "id": {
            "type": "ObjectPattern",
            "start": 57,
            "end": 69,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 59,
                "end": 67,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 67,
                  "decorators": [],
                  "name": "mapState",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 67,
                  "decorators": [],
                  "name": "mapState",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 97,
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 95,
              "decorators": [],
              "name": "createNamespacedHelpers",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 98,
      "end": 170,
      "declaration": {
        "type": "ObjectExpression",
        "start": 113,
        "end": 170,
        "properties": [
          {
            "type": "Property",
            "start": 119,
            "end": 168,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 127,
              "decorators": [],
              "name": "computed",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "ObjectExpression",
              "start": 129,
              "end": 168,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 139,
                  "end": 162,
                  "argument": {
                    "type": "CallExpression",
                    "start": 142,
                    "end": 162,
                    "callee": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 150,
                      "decorators": [],
                      "name": "mapState",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "start": 151,
                        "end": 161,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 152,
                            "end": 160,
                            "value": "panels",
                            "raw": "'panels'"
                          }
                        ]
                      }
                    ],
                    "optional": false
                  }
                }
              ]
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
