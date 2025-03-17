__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 327,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 326,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 326,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 31,
          "name": "enumFromStrings",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 75,
          "end": 326,
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "start": 81,
              "end": 218,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 91,
                "name": "Part1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 94,
                "end": 217,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 105,
                  "end": 125,
                  "name": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 112,
                    "end": 125,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 118,
                      "end": 125,
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 125,
                        "name": "Members",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": {
                  "type": "TSConditionalType",
                  "start": 129,
                  "end": 195,
                  "checkType": {
                    "type": "TSIndexedAccessType",
                    "start": 129,
                    "end": 141,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 136,
                        "name": "Members",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 140,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 140,
                        "name": "key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "extendsType": {
                    "type": "TSStringKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "trueType": {
                    "type": "TSIndexedAccessType",
                    "start": 167,
                    "end": 179,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 174,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 174,
                        "name": "Members",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 178,
                        "name": "key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 190,
                    "end": 195
                  }
                },
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 198,
                  "end": 210,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 205,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 205,
                      "name": "Members",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 209,
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 209,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 112,
                  "end": 125,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 118,
                    "end": 125,
                    "typeName": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 125,
                      "name": "Members",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 108,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "declare": false
            },
            {
              "type": "TSTypeAliasDeclaration",
              "start": 223,
              "end": 283,
              "id": {
                "type": "Identifier",
                "start": 228,
                "end": 233,
                "name": "Part2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 236,
                "end": 282,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 239,
                  "end": 262,
                  "name": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 247,
                    "name": "Property",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 251,
                    "end": 262,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 257,
                      "end": 262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 262,
                        "name": "Part1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 265,
                  "end": 280,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 265,
                    "end": 270,
                    "typeName": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 270,
                      "name": "Part1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 271,
                    "end": 279,
                    "typeName": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 279,
                      "name": "Property",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 251,
                  "end": 262,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 257,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 262,
                      "name": "Part1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 247,
                  "name": "Property",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "declare": false
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 295,
                    "end": 308,
                    "object": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 301,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 308,
                      "name": "create",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 309,
                      "end": 313,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 318,
                  "end": 323,
                  "typeName": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 323,
                    "name": "Part2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 31,
          "end": 72,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 32,
              "end": 71,
              "name": {
                "type": "Identifier",
                "start": 38,
                "end": 45,
                "name": "Members",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              "out": false,
              "const": true
            }
          ]
        },
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
