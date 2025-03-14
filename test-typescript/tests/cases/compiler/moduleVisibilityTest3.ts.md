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
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 71,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 24,
              "end": 47,
              "body": {
                "type": "TSInterfaceBody",
                "start": 40,
                "end": 47,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 39,
                "decorators": [],
                "name": "IMode",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 69,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 62,
              "end": 69,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "decorators": [],
              "name": "Mode",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "_modes",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 150,
      "end": 441,
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
              "decorators": [],
              "name": "modes",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "decorators": [],
              "name": "_modes",
              "optional": false
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 212,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
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
                          "decorators": [],
                          "name": "modes",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 212,
                          "decorators": [],
                          "name": "IMode",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ClassDeclaration",
            "start": 293,
            "end": 439,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 303,
              "end": 439,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 310,
                  "end": 431,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 321,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 321,
                    "end": 431,
                    "async": false,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 411,
                                "end": 423,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
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
                                        "decorators": [],
                                        "name": "modes",
                                        "optional": false
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 419,
                                        "end": 423,
                                        "decorators": [],
                                        "name": "Mode",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              },
                              "init": null
                            }
                          ],
                          "declare": false,
                          "kind": "var"
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
                        "start": 322,
                        "end": 331,
                        "decorators": [],
                        "name": "p1",
                        "optional": false,
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
                              "decorators": [],
                              "name": "modes",
                              "optional": false
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 333,
                        "end": 347,
                        "decorators": [],
                        "name": "p2",
                        "optional": false,
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
                                "decorators": [],
                                "name": "modes",
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 343,
                                "end": 347,
                                "decorators": [],
                                "name": "Mode",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 299,
              "end": 302,
              "decorators": [],
              "name": "Bug",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 163,
        "decorators": [],
        "name": "editor",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
