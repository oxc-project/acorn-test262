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
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 25,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 97,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 32,
            "end": 95,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 39,
              "end": 95,
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 67,
                      "name": "doer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 69,
                        "end": 88,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 70,
                            "end": 79,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 71,
                              "end": 79,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 73,
                                "end": 79
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 98,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 119,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 224,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 140,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "name": "field",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 145,
            "end": 189,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 188,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 157,
                "end": 188,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 158,
                    "end": 167,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 159,
                      "end": 167,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 161,
                        "end": 167
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 169,
                    "end": 179,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 171,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 173,
                        "end": 179
                      }
                    },
                    "decorators": [],
                    "optional": true
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 194,
            "end": 222,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 205,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 205,
              "end": 222,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 206,
                  "end": 220,
                  "name": "x",
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
                          "name": "MyClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 220,
                          "name": "Bar",
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
              "body": null,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 225,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 239,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 271,
                  "name": "Foo",
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
                        "name": "MyClass",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "TSExportAssignment",
      "start": 275,
      "end": 292,
      "expression": {
        "type": "Identifier",
        "start": 284,
        "end": 291,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
