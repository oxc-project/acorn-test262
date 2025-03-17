__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 105,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "define",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 47,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 47,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            }
          }
        },
        {
          "type": "Identifier",
          "start": 49,
          "end": 66,
          "decorators": [],
          "name": "modules",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 66,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 58,
              "end": 66,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 68,
          "end": 103,
          "decorators": [],
          "name": "ready",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 103,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 75,
              "end": 103,
              "params": [
                {
                  "type": "RestElement",
                  "start": 76,
                  "end": 97,
                  "argument": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 86,
                    "decorators": [],
                    "name": "modules",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 88,
                      "end": 97,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 88,
                        "end": 95
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 99,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 102,
                  "end": 103,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 33,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 26,
              "end": 33
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 145,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 32,
        "end": 145,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 38,
            "end": 119,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 119,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 64,
                  "end": 113,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 78,
                    "decorators": [],
                    "name": "extends",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 78,
                    "end": 113,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 82,
                        "end": 86,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 83,
                          "end": 86,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 85,
                            "end": 86,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 85,
                              "end": 86,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 89,
                        "end": 112,
                        "abstract": false,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 96,
                          "end": 112,
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "start": 99,
                            "end": 112,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 99,
                                "end": 100,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 99,
                                  "end": 100,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 103,
                                "end": 112,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 103,
                                  "end": 112,
                                  "decorators": [],
                                  "name": "BaseClass",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          }
                        },
                        "typeParameters": null
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 78,
                      "end": 81,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 79,
                          "end": 80,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 79,
                            "end": 80,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 53,
              "decorators": [],
              "name": "BaseClass",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "TSExportAssignment",
            "start": 124,
            "end": 143,
            "expression": {
              "type": "Identifier",
              "start": 133,
              "end": 142,
              "decorators": [],
              "name": "BaseClass",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 31,
        "raw": "\"deps/BaseClass\"",
        "value": "deps/BaseClass"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
