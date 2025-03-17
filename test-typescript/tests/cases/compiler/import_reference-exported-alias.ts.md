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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "App",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 189,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 187,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 24,
              "end": 187,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 39,
                "name": "Services",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 40,
                "end": 187,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 50,
                    "end": 181,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 57,
                      "end": 181,
                      "id": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 75,
                        "name": "UserServices",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 76,
                        "end": 181,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 90,
                            "end": 171,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 97,
                              "end": 108,
                              "name": "getUserName",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 108,
                              "end": 171,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
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
                                      "value": "Bill Gates",
                                      "raw": "\"Bill Gates\""
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 110,
                                "end": 118,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 112,
                                  "end": 118
                                }
                              }
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
      "type": "TSImportEqualsDeclaration",
      "start": 191,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 201,
        "name": "Mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 204,
        "end": 207,
        "name": "App",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 209,
      "end": 222,
      "expression": {
        "type": "Identifier",
        "start": 218,
        "end": 221,
        "name": "Mod",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "appJs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "file1",
          "raw": "\"file1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 33,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 48,
        "name": "Services",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 51,
        "end": 65,
        "left": {
          "type": "Identifier",
          "start": 51,
          "end": 56,
          "name": "appJs",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 57,
          "end": 65,
          "name": "Services",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 67,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 86,
        "name": "UserServices",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 89,
        "end": 110,
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 97,
          "name": "Services",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 98,
          "end": 110,
          "name": "UserServices",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 120,
            "end": 152,
            "callee": {
              "type": "MemberExpression",
              "start": 120,
              "end": 150,
              "object": {
                "type": "NewExpression",
                "start": 120,
                "end": 138,
                "callee": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 136,
                  "name": "UserServices",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 150,
                "name": "getUserName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
