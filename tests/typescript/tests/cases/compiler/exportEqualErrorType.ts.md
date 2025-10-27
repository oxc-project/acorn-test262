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
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 53
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "res",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 65,
                        "end": 68
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 70,
                        "end": 73
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
                        "end": 79
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 82,
                        "end": 86
                      },
                      "start": 80,
                      "end": 86
                    },
                    "start": 64,
                    "end": 87
                  }
                ],
                "start": 54,
                "end": 93
              },
              "declare": false,
              "start": 30,
              "end": 93
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 23,
            "end": 93
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "connectExport",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 128
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 142
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "connectModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 150,
                                  "end": 163
                                },
                                "typeArguments": null,
                                "start": 150,
                                "end": 163
                              },
                              "start": 148,
                              "end": 163
                            },
                            "start": 145,
                            "end": 163
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 168,
                              "end": 181
                            },
                            "typeArguments": null,
                            "start": 168,
                            "end": 181
                          },
                          "start": 165,
                          "end": 181
                        },
                        "start": 144,
                        "end": 181
                      },
                      "start": 142,
                      "end": 181
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 139,
                    "end": 182
                  }
                ],
                "start": 129,
                "end": 188
              },
              "declare": false,
              "start": 105,
              "end": 188
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 98,
            "end": 188
          }
        ],
        "start": 17,
        "end": 190
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 190
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
            "name": "server",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "server",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 219
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 220,
                            "end": 233
                          },
                          "start": 213,
                          "end": 233
                        },
                        "typeArguments": null,
                        "start": 213,
                        "end": 233
                      },
                      "start": 211,
                      "end": 233
                    },
                    "start": 209,
                    "end": 234
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 242
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 248
                        },
                        "typeArguments": null,
                        "start": 244,
                        "end": 248
                      },
                      "start": 242,
                      "end": 248
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 239,
                    "end": 249
                  }
                ],
                "start": 203,
                "end": 251
              },
              "start": 201,
              "end": 251
            },
            "start": 195,
            "end": 251
          },
          "init": null,
          "definite": false,
          "start": 195,
          "end": 251
        }
      ],
      "declare": false,
      "start": 191,
      "end": 252
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 268
      },
      "start": 253,
      "end": 269
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 271
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
        "name": "connect",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./exportEqualErrorType_0",
          "raw": "'./exportEqualErrorType_0'",
          "start": 74,
          "end": 100
        },
        "start": 66,
        "end": 101
      },
      "importKind": "value",
      "start": 49,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "connect",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 110
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 103,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "use",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 116
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 116
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "connect",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 124
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 131
              },
              "optional": false,
              "computed": false,
              "start": 117,
              "end": 131
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 132,
                "end": 137
              }
            ],
            "optional": false,
            "start": 117,
            "end": 138
          }
        ],
        "optional": false,
        "start": 103,
        "end": 139
      },
      "directive": null,
      "start": 103,
      "end": 140
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 49,
  "end": 215
}
```
