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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 17,
              "end": 77,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 18,
                "end": 66,
                "expression": true,
                "async": false,
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
                        "decorators": [],
                        "name": "T",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 22,
                    "end": 58,
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSMappedType",
                        "start": 27,
                        "end": 58,
                        "key": {
                          "type": "Identifier",
                          "start": 29,
                          "end": 30,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
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
                        "optional": false,
                        "readonly": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              "typeArguments": null,
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
                      "kind": "init",
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
