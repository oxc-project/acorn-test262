__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BuildWorkspaceService",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 34
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "injectRequestService",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 68
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 71
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 69,
                      "end": 71
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 75
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 73,
                      "end": 75
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 79
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 77,
                      "end": 79
                    }
                  ],
                  "start": 68,
                  "end": 80
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "service",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 90,
                          "end": 92
                        },
                        "typeArguments": null,
                        "start": 90,
                        "end": 92
                      },
                      "start": 88,
                      "end": 92
                    },
                    "start": 81,
                    "end": 92
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "injectBuildService",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 127
                          },
                          "optional": false,
                          "computed": false,
                          "start": 104,
                          "end": 127
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 128,
                              "end": 134
                            }
                          ],
                          "start": 127,
                          "end": 135
                        },
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "X",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 140,
                              "end": 141
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "service",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 142,
                                "end": 149
                              }
                            ],
                            "start": 136,
                            "end": 150
                          }
                        ],
                        "optional": false,
                        "start": 104,
                        "end": 151
                      },
                      "directive": null,
                      "start": 104,
                      "end": 152
                    }
                  ],
                  "start": 94,
                  "end": 158
                },
                "expression": false,
                "start": 68,
                "end": 158
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 41,
              "end": 158
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "injectBuildService",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 188
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 191
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 189,
                      "end": 191
                    }
                  ],
                  "start": 188,
                  "end": 192
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "service",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 202,
                          "end": 204
                        },
                        "typeArguments": null,
                        "start": 202,
                        "end": 204
                      },
                      "start": 200,
                      "end": 204
                    },
                    "start": 193,
                    "end": 204
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 206,
                  "end": 213
                },
                "expression": false,
                "start": 188,
                "end": 213
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 163,
              "end": 213
            }
          ],
          "start": 35,
          "end": 215
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 215
}
```
