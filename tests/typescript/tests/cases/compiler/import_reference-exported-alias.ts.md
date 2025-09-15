__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Services",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 45
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "UserServices",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 81
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getUserName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 103,
                              "end": 114
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 118,
                                  "end": 124
                                },
                                "start": 116,
                                "end": 124
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Literal",
                                      "value": "Bill Gates",
                                      "raw": "\"Bill Gates\"",
                                      "start": 150,
                                      "end": 162
                                    },
                                    "start": 143,
                                    "end": 163
                                  }
                                ],
                                "start": 125,
                                "end": 177
                              },
                              "expression": false,
                              "start": 114,
                              "end": 177
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 96,
                            "end": 177
                          }
                        ],
                        "start": 82,
                        "end": 187
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 63,
                      "end": 187
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 56,
                    "end": 187
                  }
                ],
                "start": 46,
                "end": 193
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 27,
              "end": 193
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 193
          }
        ],
        "start": 14,
        "end": 195
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 195
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 207
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 213
      },
      "importKind": "value",
      "start": 197,
      "end": 214
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 227
      },
      "start": 215,
      "end": 228
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "appJs",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "file1",
          "raw": "\"file1\"",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 48
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "appJs",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 56
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Services",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 65
        },
        "start": 51,
        "end": 65
      },
      "importKind": "value",
      "start": 33,
      "end": 66
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserServices",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 86
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Services",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 97
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "UserServices",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 110
        },
        "start": 89,
        "end": 110
      },
      "importKind": "value",
      "start": 67,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 117
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UserServices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 136
                },
                "typeArguments": null,
                "arguments": [],
                "start": 120,
                "end": 138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getUserName",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 150
              },
              "optional": false,
              "computed": false,
              "start": 120,
              "end": 150
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 120,
            "end": 152
          },
          "definite": false,
          "start": 116,
          "end": 152
        }
      ],
      "declare": false,
      "start": 112,
      "end": 153
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
