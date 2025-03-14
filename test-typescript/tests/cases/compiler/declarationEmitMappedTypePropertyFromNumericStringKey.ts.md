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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 78,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 77,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 17,
              "end": 77,
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
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 69,
                        "end": 72,
                        "raw": "'0'",
                        "value": "0"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 74,
                        "end": 75,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 18,
                "end": 66,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 66,
                  "decorators": [],
                  "name": "arg",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
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
                              "optional": false
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "start": 29,
                          "end": 30,
                          "decorators": [],
                          "name": "K",
                          "optional": false
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
                                  "optional": false
                                }
                              },
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
                                  "optional": false
                                }
                              }
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 51,
                              "end": 57
                            }
                          ]
                        }
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 18,
                  "end": 21,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 19,
                      "end": 20,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              },
              "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
