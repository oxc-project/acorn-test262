__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 78,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 78,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 17,
              "end": 77,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 18,
                "end": 66,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 22,
                    "end": 58,
                    "name": "arg",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "start": 27,
                        "end": 58,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 29,
                          "end": 41,
                          "name": {
                            "type": "Identifier",
                            "start": 29,
                            "end": 30,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeOperator",
                            "start": 34,
                            "end": 41,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 40,
                              "end": 41,
                              "typeName": {
                                "type": "Identifier",
                                "start": 40,
                                "end": 41,
                                "name": "T",
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
                          "type": "TSUnionType",
                          "start": 44,
                          "end": 57,
                          "types": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 44,
                              "end": 48,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 44,
                                "end": 45,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 44,
                                  "end": 45,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 46,
                                "end": 47,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 46,
                                  "end": 47,
                                  "name": "K",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 51,
                              "end": 57
                            }
                          ]
                        },
                        "optional": null,
                        "readonly": null,
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 34,
                          "end": 41,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 40,
                            "end": 41,
                            "typeName": {
                              "type": "Identifier",
                              "start": 40,
                              "end": 41,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 29,
                          "end": 30,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 18,
                  "end": 21,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 19,
                      "end": 20,
                      "name": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
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
                "returnType": null
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 68,
                  "end": 76,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 69,
                      "end": 75,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 69,
                        "end": 72,
                        "value": "0",
                        "raw": "'0'"
                      },
                      "value": {
                        "type": "Literal",
                        "start": 74,
                        "end": 75,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
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
