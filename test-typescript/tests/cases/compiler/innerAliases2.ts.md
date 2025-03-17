__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 520,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "name": "_provider",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 48,
                "end": 59,
                "name": "UsefulClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 60,
                "end": 160,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 94,
                    "end": 142,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 104,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 104,
                      "end": 142,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 107,
                        "end": 142,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
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
        "name": "consumer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "provider",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 216,
              "end": 225,
              "name": "_provider",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
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
                "id": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 286,
                  "name": "g",
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
                          "name": "provider",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 286,
                          "name": "UsefulClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
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
            "kind": "var",
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
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 402,
                        "end": 425,
                        "name": "p2",
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
                                "name": "provider",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 414,
                                "end": 425,
                                "name": "UsefulClass",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                            "name": "provider",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 440,
                            "end": 451,
                            "name": "UsefulClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
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
                    "name": "p2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
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
                    "name": "provider",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 351,
                    "end": 362,
                    "name": "UsefulClass",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            }
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
