__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 292,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 97,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 97,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 32,
            "end": 95,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 39,
              "end": 95,
              "body": {
                "type": "TSInterfaceBody",
                "start": 53,
                "end": 95,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 63,
                    "end": 89,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "decorators": [],
                      "name": "doer",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 69,
                        "end": 88,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 70,
                            "end": 79,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 71,
                              "end": 79,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 73,
                                "end": 79
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 81,
                          "end": 88,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 84,
                            "end": 88
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "decorators": [],
                "name": "Bar",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 25,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 98,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 140,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "decorators": [],
              "name": "field",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 133,
                "end": 139
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 145,
            "end": 189,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 188,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 157,
                "end": 188,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 158,
                    "end": 167,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 159,
                      "end": 167,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 161,
                        "end": 167
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 169,
                    "end": 179,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 171,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 173,
                        "end": 179
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 181,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 184,
                    "end": 188
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 194,
            "end": 222,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 205,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 205,
              "end": 222,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 206,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 207,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 209,
                      "end": 220,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 209,
                        "end": 220,
                        "left": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 216,
                          "decorators": [],
                          "name": "MyClass",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 220,
                          "decorators": [],
                          "name": "Bar",
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
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 119,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 225,
      "end": 274,
      "body": {
        "type": "TSModuleBlock",
        "start": 240,
        "end": 274,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 246,
            "end": 272,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 271,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 271,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 271,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 257,
                      "end": 271,
                      "exprName": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 271,
                        "decorators": [],
                        "name": "MyClass",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 239,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "TSExportAssignment",
      "start": 275,
      "end": 292,
      "expression": {
        "type": "Identifier",
        "start": 284,
        "end": 291,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
