__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 66
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subFun",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Collection",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 84,
                              "end": 94
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 84,
                            "end": 94
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Field",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 96,
                              "end": 101
                            },
                            "constraint": {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Collection",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 116,
                                  "end": 126
                                },
                                "typeArguments": null,
                                "start": 116,
                                "end": 126
                              },
                              "start": 110,
                              "end": 126
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 96,
                            "end": 126
                          }
                        ],
                        "start": 83,
                        "end": 127
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FlatArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 150
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
                                      "name": "Collection",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 151,
                                      "end": 161
                                    },
                                    "typeArguments": null,
                                    "start": 151,
                                    "end": 161
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Field",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 162,
                                      "end": 167
                                    },
                                    "typeArguments": null,
                                    "start": 162,
                                    "end": 167
                                  },
                                  "start": 151,
                                  "end": 168
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 170,
                                    "end": 171
                                  },
                                  "start": 170,
                                  "end": 171
                                }
                              ],
                              "start": 150,
                              "end": 172
                            },
                            "start": 141,
                            "end": 172
                          },
                          "start": 141,
                          "end": 174
                        },
                        "start": 138,
                        "end": 174
                      },
                      "start": 83,
                      "end": 174
                    },
                    "start": 81,
                    "end": 174
                  },
                  "start": 75,
                  "end": 174
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 179,
                "end": 182
              },
              "id": null,
              "generator": false,
              "start": 69,
              "end": 182
            },
            "definite": false,
            "start": 63,
            "end": 182
          }
        ],
        "declare": false,
        "start": 57,
        "end": 183
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 183
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 50,
  "end": 183
}
```
