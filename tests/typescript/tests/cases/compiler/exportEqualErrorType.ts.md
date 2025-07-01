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
        "start": 7,
        "end": 13
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
                "start": 37,
                "end": 50
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
                        "start": 62,
                        "end": 65
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 70
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 76
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 79,
                        "end": 83
                      },
                      "start": 77,
                      "end": 83
                    },
                    "start": 61,
                    "end": 84
                  }
                ],
                "start": 51,
                "end": 90
              },
              "declare": false,
              "start": 27,
              "end": 90
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 90
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
                "start": 112,
                "end": 125
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
                      "start": 136,
                      "end": 139
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
                                  "start": 147,
                                  "end": 160
                                },
                                "typeArguments": null,
                                "start": 147,
                                "end": 160
                              },
                              "start": 145,
                              "end": 160
                            },
                            "start": 142,
                            "end": 160
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
                              "start": 165,
                              "end": 178
                            },
                            "typeArguments": null,
                            "start": 165,
                            "end": 178
                          },
                          "start": 162,
                          "end": 178
                        },
                        "start": 141,
                        "end": 178
                      },
                      "start": 139,
                      "end": 178
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 136,
                    "end": 179
                  }
                ],
                "start": 126,
                "end": 185
              },
              "declare": false,
              "start": 102,
              "end": 185
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 95,
            "end": 185
          }
        ],
        "start": 14,
        "end": 187
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 187
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
                            "start": 210,
                            "end": 216
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 217,
                            "end": 230
                          },
                          "start": 210,
                          "end": 230
                        },
                        "typeArguments": null,
                        "start": 210,
                        "end": 230
                      },
                      "start": 208,
                      "end": 230
                    },
                    "start": 206,
                    "end": 231
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
                      "start": 236,
                      "end": 239
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
                          "start": 241,
                          "end": 245
                        },
                        "typeArguments": null,
                        "start": 241,
                        "end": 245
                      },
                      "start": 239,
                      "end": 245
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 236,
                    "end": 246
                  }
                ],
                "start": 200,
                "end": 248
              },
              "start": 198,
              "end": 248
            },
            "start": 192,
            "end": 248
          },
          "init": null,
          "definite": false,
          "start": 192,
          "end": 248
        }
      ],
      "declare": false,
      "start": 188,
      "end": 249
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 265
      },
      "start": 250,
      "end": 266
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 268
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
          "value": "exportEqualErrorType_0",
          "raw": "'exportEqualErrorType_0'",
          "start": 74,
          "end": 98
        },
        "start": 66,
        "end": 99
      },
      "importKind": "value",
      "start": 49,
      "end": 100
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
              "start": 101,
              "end": 108
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 101,
            "end": 110
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "use",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 114
          },
          "optional": false,
          "computed": false,
          "start": 101,
          "end": 114
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
                "start": 115,
                "end": 122
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 129
              },
              "optional": false,
              "computed": false,
              "start": 115,
              "end": 129
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 130,
                "end": 135
              }
            ],
            "optional": false,
            "start": 115,
            "end": 136
          }
        ],
        "optional": false,
        "start": 101,
        "end": 137
      },
      "directive": null,
      "start": 101,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 49,
  "end": 213
}
```
