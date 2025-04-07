__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 183,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 183,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 57,
        "end": 183,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 182,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 69,
              "end": 182,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 179,
                "end": 182,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 174,
                  "decorators": [],
                  "name": "subFun",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 83,
                      "end": 174,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 138,
                        "end": 174,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 141,
                          "end": 174,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 141,
                            "end": 172,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 150,
                              "end": 172,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 151,
                                  "end": 168,
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "start": 162,
                                    "end": 167,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 162,
                                      "end": 167,
                                      "decorators": [],
                                      "name": "Field",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 151,
                                    "end": 161,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 151,
                                      "end": 161,
                                      "decorators": [],
                                      "name": "Collection",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "start": 170,
                                  "end": 171,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 170,
                                    "end": 171,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 150,
                              "decorators": [],
                              "name": "FlatArray",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 83,
                        "end": 127,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 84,
                            "end": 94,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 84,
                              "end": 94,
                              "decorators": [],
                              "name": "Collection",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 96,
                            "end": 126,
                            "const": false,
                            "constraint": {
                              "type": "TSTypeOperator",
                              "start": 110,
                              "end": 126,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 116,
                                "end": 126,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 116,
                                  "end": 126,
                                  "decorators": [],
                                  "name": "Collection",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 101,
                              "decorators": [],
                              "name": "Field",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
