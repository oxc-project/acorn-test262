__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 326,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 326,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 326,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 75,
          "end": 326,
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "start": 81,
              "end": 218,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 91,
                "decorators": [],
                "name": "Part1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 94,
                "end": 217,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 112,
                  "end": 125,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 118,
                    "end": 125,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 125,
                      "decorators": [],
                      "name": "Members",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": {
                  "type": "TSConditionalType",
                  "start": 129,
                  "end": 195,
                  "checkType": {
                    "type": "TSIndexedAccessType",
                    "start": 129,
                    "end": 141,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 140,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 140,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 136,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 136,
                        "decorators": [],
                        "name": "Members",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "extendsType": {
                    "type": "TSStringKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 190,
                    "end": 195
                  },
                  "trueType": {
                    "type": "TSIndexedAccessType",
                    "start": 167,
                    "end": 179,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 178,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 178,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 174,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 174,
                        "decorators": [],
                        "name": "Members",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "optional": null,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 198,
                  "end": 210,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 209,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 209,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 205,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 205,
                      "decorators": [],
                      "name": "Members",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSTypeAliasDeclaration",
              "start": 223,
              "end": 283,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 228,
                "end": 233,
                "decorators": [],
                "name": "Part2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 236,
                "end": 282,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 251,
                  "end": 262,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 257,
                    "end": 262,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 262,
                      "decorators": [],
                      "name": "Part1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 247,
                  "decorators": [],
                  "name": "Property",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": null,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 265,
                  "end": 280,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 271,
                    "end": 279,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 279,
                      "decorators": [],
                      "name": "Property",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 265,
                    "end": 270,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 270,
                      "decorators": [],
                      "name": "Part1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            },
            {
              "type": "ReturnStatement",
              "start": 288,
              "end": 324,
              "argument": {
                "type": "TSAsExpression",
                "start": 295,
                "end": 323,
                "expression": {
                  "type": "CallExpression",
                  "start": 295,
                  "end": 314,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 309,
                      "end": 313,
                      "raw": "null",
                      "value": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 295,
                    "end": 308,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 301,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 308,
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 318,
                  "end": 323,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 323,
                    "decorators": [],
                    "name": "Part2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 31,
          "decorators": [],
          "name": "enumFromStrings",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 31,
          "end": 72,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 32,
              "end": 71,
              "const": true,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 54,
                "end": 71,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 63,
                  "end": 71,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 38,
                "end": 45,
                "decorators": [],
                "name": "Members",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
