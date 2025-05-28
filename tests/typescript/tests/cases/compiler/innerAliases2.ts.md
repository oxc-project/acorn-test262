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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "decorators": [],
        "name": "_provider",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 162,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 35,
            "end": 160,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 42,
              "end": 160,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 60,
                "end": 160,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 94,
                    "end": 142,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 104,
                      "end": 142,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 107,
                        "end": 142,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 164,
      "end": 518,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 179,
        "decorators": [],
        "name": "consumer",
        "optional": false,
        "typeAnnotation": null
      },
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
            "moduleReference": {
              "type": "Identifier",
              "start": 216,
              "end": 225,
              "decorators": [],
              "name": "_provider",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 260,
            "end": 293,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 264,
                "end": 292,
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
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 288,
                  "end": 292,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 327,
            "end": 516,
            "id": {
              "type": "Identifier",
              "start": 336,
              "end": 339,
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 362,
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
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 363,
              "end": 516,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 398,
                  "end": 454,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 402,
                      "end": 453,
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
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": {
                        "type": "NewExpression",
                        "start": 427,
                        "end": 453,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 431,
                          "end": 451,
                          "object": {
                            "type": "Identifier",
                            "start": 431,
                            "end": 439,
                            "decorators": [],
                            "name": "provider",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 440,
                            "end": 451,
                            "decorators": [],
                            "name": "UsefulClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": []
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
