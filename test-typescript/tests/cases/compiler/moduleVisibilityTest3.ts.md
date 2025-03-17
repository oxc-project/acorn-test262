__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 442,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "name": "_modes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 71,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 47,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 47,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 39,
                "name": "IMode",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 47,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "name": "Mode",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 62,
              "end": 69,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 150,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "name": "editor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 164,
        "end": 441,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 167,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 179,
              "name": "modes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "name": "_modes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 193,
            "end": 213,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 197,
                "end": 212,
                "id": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 212,
                  "name": "i",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 199,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 201,
                      "end": 212,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 201,
                        "end": 212,
                        "left": {
                          "type": "Identifier",
                          "start": 201,
                          "end": 206,
                          "name": "modes",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 212,
                          "name": "IMode",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 293,
            "end": 439,
            "id": {
              "type": "Identifier",
              "start": 299,
              "end": 302,
              "name": "Bug",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 303,
              "end": 439,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 310,
                  "end": 431,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 321,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 321,
                    "end": 431,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 322,
                        "end": 331,
                        "name": "p1",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 324,
                          "end": 331,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 326,
                            "end": 331,
                            "typeName": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 331,
                              "name": "modes",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 333,
                        "end": 347,
                        "name": "p2",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 335,
                          "end": 347,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 337,
                            "end": 347,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 337,
                              "end": 347,
                              "left": {
                                "type": "Identifier",
                                "start": 337,
                                "end": 342,
                                "name": "modes",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 343,
                                "end": 347,
                                "name": "Mode",
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
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 349,
                      "end": 431,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 407,
                          "end": 424,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 411,
                              "end": 423,
                              "id": {
                                "type": "Identifier",
                                "start": 411,
                                "end": 423,
                                "name": "x",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 412,
                                  "end": 423,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 413,
                                    "end": 423,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 413,
                                      "end": 423,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 413,
                                        "end": 418,
                                        "name": "modes",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 419,
                                        "end": 423,
                                        "name": "Mode",
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
                              "init": null,
                              "definite": false
                            }
                          ],
                          "kind": "var",
                          "declare": false
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
