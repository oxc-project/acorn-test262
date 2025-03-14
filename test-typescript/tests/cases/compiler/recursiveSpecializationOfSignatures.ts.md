recursiveSpecializationOfSignatures.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 44,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "S1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 23,
              "end": 44,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 44,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 24,
                  "end": 39,
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 28,
                      "end": 39,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 30,
                        "end": 39,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 31,
                            "end": 34
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 35,
                            "end": 38
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 28,
                        "end": 30,
                        "decorators": [],
                        "name": "S0",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 93,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 56,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 56,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 57,
                  "end": 88,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 88,
                    "decorators": [],
                    "name": "S17",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 69,
                        "end": 88,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 71,
                          "end": 88,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 72,
                              "end": 75
                            },
                            {
                              "type": "TSFunctionType",
                              "start": 77,
                              "end": 87,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 78,
                                  "end": 81,
                                  "decorators": [],
                                  "name": "S18",
                                  "optional": false
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 83,
                                "end": 87,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 86,
                                  "end": 87,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 86,
                                    "end": 87,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 69,
                          "end": 71,
                          "decorators": [],
                          "name": "S0",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "S0",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
