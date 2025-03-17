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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "name": "define",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 47,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 47,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 49,
          "end": 66,
          "name": "modules",
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 68,
          "end": 103,
          "name": "ready",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 103,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 75,
              "end": 103,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 76,
                  "end": 97,
                  "argument": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 86,
                    "name": "modules",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 26,
              "end": 33
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 31,
        "value": "deps/BaseClass",
        "raw": "\"deps/BaseClass\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 32,
        "end": 145,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 38,
            "end": 119,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 53,
              "name": "BaseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 119,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 64,
                  "end": 113,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 78,
                    "name": "extends",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 78,
                    "end": 113,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 82,
                        "end": 86,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 83,
                          "end": 86,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 85,
                            "end": 86,
                            "typeName": {
                              "type": "Identifier",
                              "start": 85,
                              "end": 86,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 78,
                      "end": 81,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 79,
                          "end": 80,
                          "name": {
                            "type": "Identifier",
                            "start": 79,
                            "end": 80,
                            "name": "A",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 89,
                        "end": 112,
                        "abstract": false,
                        "typeParameters": null,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 99,
                                  "end": 100,
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 103,
                                "end": 112,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 103,
                                  "end": 112,
                                  "name": "BaseClass",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSExportAssignment",
            "start": 124,
            "end": 143,
            "expression": {
              "type": "Identifier",
              "start": 133,
              "end": 142,
              "name": "BaseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
