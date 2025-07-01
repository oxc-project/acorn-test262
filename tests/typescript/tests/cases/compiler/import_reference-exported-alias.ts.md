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
        "start": 7,
        "end": 10
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
                "start": 31,
                "end": 39
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
                        "start": 63,
                        "end": 75
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
                              "start": 97,
                              "end": 108
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
                                  "start": 112,
                                  "end": 118
                                },
                                "start": 110,
                                "end": 118
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
                                      "start": 144,
                                      "end": 156
                                    },
                                    "start": 137,
                                    "end": 157
                                  }
                                ],
                                "start": 119,
                                "end": 171
                              },
                              "expression": false,
                              "start": 108,
                              "end": 171
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 90,
                            "end": 171
                          }
                        ],
                        "start": 76,
                        "end": 181
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 57,
                      "end": 181
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 50,
                    "end": 181
                  }
                ],
                "start": 40,
                "end": 187
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 24,
              "end": 187
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 187
          }
        ],
        "start": 11,
        "end": 189
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 189
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 201
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 207
      },
      "importKind": "value",
      "start": 191,
      "end": 208
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 221
      },
      "start": 209,
      "end": 222
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 223
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
