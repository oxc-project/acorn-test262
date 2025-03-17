__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 215,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 215,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 34,
          "name": "BuildWorkspaceService",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 215,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 158,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 68,
                "name": "injectRequestService",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 68,
                "end": 158,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 81,
                    "end": 92,
                    "name": "service",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 88,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 90,
                        "end": 92,
                        "typeName": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 92,
                          "name": "P0",
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
                "body": {
                  "type": "BlockStatement",
                  "start": 94,
                  "end": 158,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 104,
                      "end": 152,
                      "expression": {
                        "type": "CallExpression",
                        "start": 104,
                        "end": 151,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 104,
                          "end": 127,
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 127,
                            "name": "injectBuildService",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 136,
                            "end": 150,
                            "callee": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 141,
                              "name": "X",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 142,
                                "end": 149,
                                "name": "service",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "typeArguments": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 127,
                          "end": 135,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 128,
                              "end": 134
                            }
                          ]
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 68,
                  "end": 80,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 69,
                      "end": 71,
                      "name": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 71,
                        "name": "P0",
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
                      "start": 73,
                      "end": 75,
                      "name": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "name": "P1",
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
                      "start": 77,
                      "end": 79,
                      "name": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 79,
                        "name": "P2",
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
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
            },
            {
              "type": "MethodDefinition",
              "start": 163,
              "end": 213,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 170,
                "end": 188,
                "name": "injectBuildService",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 188,
                "end": 213,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 193,
                    "end": 204,
                    "name": "service",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 200,
                      "end": 204,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 202,
                        "end": 204,
                        "typeName": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 204,
                          "name": "P0",
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
                "body": {
                  "type": "BlockStatement",
                  "start": 206,
                  "end": 213,
                  "body": []
                },
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 188,
                  "end": 192,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 189,
                      "end": 191,
                      "name": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 191,
                        "name": "P0",
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
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
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
