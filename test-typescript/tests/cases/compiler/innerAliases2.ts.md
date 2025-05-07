__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 519,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 162,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 162,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 35,
            "end": 160,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 42,
              "end": 160,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 60,
                "end": 160,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 94,
                    "end": 142,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 104,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 104,
                      "end": 142,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 107,
                        "end": 142,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 48,
                "end": 59,
                "decorators": [],
                "name": "UsefulClass",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "decorators": [],
        "name": "_provider",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 164,
      "end": 518,
      "body": {
        "type": "TSModuleBlock",
        "start": 180,
        "end": 518,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 198,
            "end": 226,
            "id": {
              "type": "Identifier",
              "start": 205,
              "end": 213,
              "decorators": [],
              "name": "provider",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 216,
              "end": 225,
              "decorators": [],
              "name": "_provider",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 260,
            "end": 293,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 264,
                "end": 292,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 286,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 265,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 266,
                      "end": 286,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 266,
                        "end": 286,
                        "left": {
                          "type": "Identifier",
                          "start": 266,
                          "end": 274,
                          "decorators": [],
                          "name": "provider",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 286,
                          "decorators": [],
                          "name": "UsefulClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 288,
                  "end": 292,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 327,
            "end": 516,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 363,
              "end": 516,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 398,
                  "end": 454,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 402,
                      "end": 453,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 402,
                        "end": 425,
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 404,
                          "end": 425,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 405,
                            "end": 425,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 405,
                              "end": 425,
                              "left": {
                                "type": "Identifier",
                                "start": 405,
                                "end": 413,
                                "decorators": [],
                                "name": "provider",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 414,
                                "end": 425,
                                "decorators": [],
                                "name": "UsefulClass",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "NewExpression",
                        "start": 427,
                        "end": 453,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 431,
                          "end": 451,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 431,
                            "end": 439,
                            "decorators": [],
                            "name": "provider",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 440,
                            "end": 451,
                            "decorators": [],
                            "name": "UsefulClass",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ReturnStatement",
                  "start": 487,
                  "end": 497,
                  "argument": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 496,
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 336,
              "end": 339,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 362,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 342,
                  "end": 362,
                  "left": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 350,
                    "decorators": [],
                    "name": "provider",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 362,
                    "decorators": [],
                    "name": "UsefulClass",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 179,
        "decorators": [],
        "name": "consumer",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
