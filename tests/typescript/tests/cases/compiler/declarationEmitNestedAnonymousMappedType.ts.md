__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumFromStrings",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 31
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Members",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 45
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  },
                  "start": 63,
                  "end": 71
                },
                "start": 54,
                "end": 71
              },
              "default": null,
              "in": false,
              "out": false,
              "const": true,
              "start": 32,
              "end": 71
            }
          ],
          "start": 31,
          "end": 72
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Part1",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 91
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 108
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Members",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 125
                    },
                    "typeArguments": null,
                    "start": 118,
                    "end": 125
                  },
                  "start": 112,
                  "end": 125
                },
                "nameType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Members",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 136
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 140
                      },
                      "typeArguments": null,
                      "start": 137,
                      "end": 140
                    },
                    "start": 129,
                    "end": 141
                  },
                  "extendsType": {
                    "type": "TSStringKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "trueType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Members",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 174
                      },
                      "typeArguments": null,
                      "start": 167,
                      "end": 174
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 178
                    },
                    "start": 167,
                    "end": 179
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 190,
                    "end": 195
                  },
                  "start": 129,
                  "end": 195
                },
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Members",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 205
                    },
                    "typeArguments": null,
                    "start": 198,
                    "end": 205
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 209
                    },
                    "typeArguments": null,
                    "start": 206,
                    "end": 209
                  },
                  "start": 198,
                  "end": 210
                },
                "optional": false,
                "readonly": null,
                "start": 94,
                "end": 217
              },
              "declare": false,
              "start": 81,
              "end": 218
            },
            {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Part2",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 233
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Property",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 247
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Part1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 262
                    },
                    "typeArguments": null,
                    "start": 257,
                    "end": 262
                  },
                  "start": 251,
                  "end": 262
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Part1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 265,
                    "end": 270
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Property",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 279
                    },
                    "typeArguments": null,
                    "start": 271,
                    "end": 279
                  },
                  "start": 265,
                  "end": 280
                },
                "optional": false,
                "readonly": null,
                "start": 236,
                "end": 282
              },
              "declare": false,
              "start": 223,
              "end": 283
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 301
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 308
                    },
                    "optional": false,
                    "computed": false,
                    "start": 295,
                    "end": 308
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 309,
                      "end": 313
                    }
                  ],
                  "optional": false,
                  "start": 295,
                  "end": 314
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Part2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 323
                  },
                  "typeArguments": null,
                  "start": 318,
                  "end": 323
                },
                "start": 295,
                "end": 323
              },
              "start": 288,
              "end": 324
            }
          ],
          "start": 75,
          "end": 326
        },
        "expression": false,
        "start": 7,
        "end": 326
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 326
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 326
}
```
