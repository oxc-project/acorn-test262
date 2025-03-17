__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 140,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 138,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 33,
              "end": 138,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 45,
                "end": 138,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 55,
                    "end": 132,
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "start": 62,
                      "end": 132,
                      "id": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "start": 74,
                        "end": 132,
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "start": 88,
                            "end": 122,
                            "declaration": {
                              "type": "TSModuleDeclaration",
                              "start": 95,
                              "end": 122,
                              "id": {
                                "type": "Identifier",
                                "start": 105,
                                "end": 106,
                                "name": "D",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "body": {
                                "type": "TSModuleBlock",
                                "start": 107,
                                "end": 122,
                                "body": []
                              },
                              "kind": "namespace",
                              "declare": false,
                              "global": false
                            },
                            "specifiers": [],
                            "source": null,
                            "attributes": [],
                            "exportKind": "value"
                          }
                        ]
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
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
  "end": 56,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 53,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 43,
                  "name": "user",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 43,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 34,
                        "end": 43,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 34,
                          "end": 41,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 34,
                            "end": 39,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 34,
                              "end": 37,
                              "left": {
                                "type": "Identifier",
                                "start": 34,
                                "end": 35,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 36,
                                "end": 37,
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 38,
                              "end": 39,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 40,
                            "end": 41,
                            "name": "D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 43,
                          "name": "E",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 18,
                      "end": 27,
                      "expression": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 27,
                        "name": "decorate",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 53,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
