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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 215,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 215,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 41,
              "end": 158,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 68,
                "decorators": [],
                "name": "injectRequestService",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 68,
                "end": 158,
                "async": false,
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
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 136,
                            "end": 150,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 142,
                                "end": 149,
                                "decorators": [],
                                "name": "service",
                                "optional": false
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 140,
                              "end": 141,
                              "decorators": [],
                              "name": "X",
                              "optional": false
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 104,
                          "end": 127,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 127,
                            "decorators": [],
                            "name": "injectBuildService",
                            "optional": false
                          }
                        },
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
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 81,
                    "end": 92,
                    "decorators": [],
                    "name": "service",
                    "optional": false,
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
                          "decorators": [],
                          "name": "P0",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 68,
                  "end": 80,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 69,
                      "end": 71,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 71,
                        "decorators": [],
                        "name": "P0",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 73,
                      "end": 75,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "decorators": [],
                        "name": "P1",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 77,
                      "end": 79,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 79,
                        "decorators": [],
                        "name": "P2",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 163,
              "end": 213,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 170,
                "end": 188,
                "decorators": [],
                "name": "injectBuildService",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 188,
                "end": 213,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 206,
                  "end": 213,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 193,
                    "end": 204,
                    "decorators": [],
                    "name": "service",
                    "optional": false,
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
                          "decorators": [],
                          "name": "P0",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 188,
                  "end": 192,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 189,
                      "end": 191,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 191,
                        "decorators": [],
                        "name": "P0",
                        "optional": false
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
          "start": 13,
          "end": 34,
          "decorators": [],
          "name": "BuildWorkspaceService",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
