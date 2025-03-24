__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 223,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 189,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 189,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 187,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 24,
              "end": 187,
              "body": {
                "type": "TSModuleBlock",
                "start": 40,
                "end": 187,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 50,
                    "end": 181,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 57,
                      "end": 181,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 76,
                        "end": 181,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 90,
                            "end": 171,
                            "accessibility": "public",
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 97,
                              "end": 108,
                              "decorators": [],
                              "name": "getUserName",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 108,
                              "end": 171,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 119,
                                "end": 171,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 137,
                                    "end": 157,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 144,
                                      "end": 156,
                                      "raw": "\"Bill Gates\"",
                                      "value": "Bill Gates"
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 110,
                                "end": 118,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 112,
                                  "end": 118
                                }
                              },
                              "typeParameters": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 75,
                        "decorators": [],
                        "name": "UserServices",
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
                "start": 31,
                "end": 39,
                "decorators": [],
                "name": "Services",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
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
        "end": 10,
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 191,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 201,
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 204,
        "end": 207,
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 209,
      "end": 222,
      "expression": {
        "type": "Identifier",
        "start": 218,
        "end": 221,
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "appJs",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "raw": "\"file1\"",
          "value": "file1"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 33,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 51,
        "end": 65,
        "left": {
          "type": "Identifier",
          "start": 51,
          "end": 56,
          "decorators": [],
          "name": "appJs",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 57,
          "end": 65,
          "decorators": [],
          "name": "Services",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 86,
        "decorators": [],
        "name": "UserServices",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 89,
        "end": 110,
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 97,
          "decorators": [],
          "name": "Services",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 98,
          "end": 110,
          "decorators": [],
          "name": "UserServices",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 120,
            "end": 152,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 120,
              "end": 150,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 120,
                "end": 138,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 136,
                  "decorators": [],
                  "name": "UserServices",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 150,
                "decorators": [],
                "name": "getUserName",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
