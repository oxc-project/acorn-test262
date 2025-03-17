__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 184,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 183,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 57,
        "end": 183,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 182,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 69,
              "end": 182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 174,
                  "name": "subFun",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 83,
                      "end": 174,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 83,
                        "end": 127,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 84,
                            "end": 94,
                            "name": {
                              "type": "Identifier",
                              "start": 84,
                              "end": 94,
                              "name": "Collection",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 96,
                            "end": 126,
                            "name": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 101,
                              "name": "Field",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "constraint": {
                              "type": "TSTypeOperator",
                              "start": 110,
                              "end": 126,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 116,
                                "end": 126,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 116,
                                  "end": 126,
                                  "name": "Collection",
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
                          }
                        ]
                      },
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 150,
                              "name": "FlatArray",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 150,
                              "end": 172,
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "start": 151,
                                  "end": 168,
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "start": 151,
                                    "end": 161,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 151,
                                      "end": 161,
                                      "name": "Collection",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  },
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "start": 162,
                                    "end": 167,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 162,
                                      "end": 167,
                                      "name": "Field",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
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
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              ]
                            }
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 179,
                "end": 182,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
