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
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
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
                "start": 33,
                "end": 46
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
                        "start": 58,
                        "end": 61
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 66
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 75,
                        "end": 79
                      },
                      "start": 73,
                      "end": 79
                    },
                    "start": 57,
                    "end": 80
                  }
                ],
                "start": 47,
                "end": 86
              },
              "declare": false,
              "start": 23,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 16,
            "end": 86
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
                "start": 108,
                "end": 121
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
                      "start": 132,
                      "end": 135
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
                                  "start": 143,
                                  "end": 156
                                },
                                "typeArguments": null,
                                "start": 143,
                                "end": 156
                              },
                              "start": 141,
                              "end": 156
                            },
                            "start": 138,
                            "end": 156
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
                              "start": 161,
                              "end": 174
                            },
                            "typeArguments": null,
                            "start": 161,
                            "end": 174
                          },
                          "start": 158,
                          "end": 174
                        },
                        "start": 137,
                        "end": 174
                      },
                      "start": 135,
                      "end": 174
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 132,
                    "end": 175
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 190
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
                            "name": "port",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 199,
                                "end": 205
                              },
                              "start": 197,
                              "end": 205
                            },
                            "start": 193,
                            "end": 205
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 210,
                            "end": 214
                          },
                          "start": 207,
                          "end": 214
                        },
                        "start": 192,
                        "end": 214
                      },
                      "start": 190,
                      "end": 214
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 184,
                    "end": 215
                  }
                ],
                "start": 122,
                "end": 221
              },
              "declare": false,
              "start": 98,
              "end": 221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 91,
            "end": 221
          }
        ],
        "start": 10,
        "end": 224
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 224
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
            "name": "m2",
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
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 243,
                            "end": 245
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 259
                          },
                          "start": 243,
                          "end": 259
                        },
                        "typeArguments": null,
                        "start": 243,
                        "end": 259
                      },
                      "start": 241,
                      "end": 259
                    },
                    "start": 239,
                    "end": 260
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 270
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 272,
                            "end": 274
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 275,
                            "end": 288
                          },
                          "start": 272,
                          "end": 288
                        },
                        "typeArguments": null,
                        "start": 272,
                        "end": 288
                      },
                      "start": 270,
                      "end": 288
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 265,
                    "end": 289
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 299
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 303,
                            "end": 305
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 319
                          },
                          "start": 303,
                          "end": 319
                        },
                        "typeArguments": null,
                        "start": 303,
                        "end": 319
                      },
                      "start": 301,
                      "end": 319
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 294,
                    "end": 320
                  }
                ],
                "start": 233,
                "end": 322
              },
              "start": 231,
              "end": 322
            },
            "start": 229,
            "end": 322
          },
          "init": null,
          "definite": false,
          "start": 229,
          "end": 322
        }
      ],
      "declare": false,
      "start": 225,
      "end": 323
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 335
      },
      "start": 324,
      "end": 336
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 337
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
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 44
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./declFileImportModuleWithExportAssignment_0",
          "raw": "\"./declFileImportModuleWithExportAssignment_0\"",
          "start": 55,
          "end": 101
        },
        "start": 47,
        "end": 102
      },
      "importKind": "value",
      "start": 35,
      "end": 103
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 121
            },
            "definite": false,
            "start": 115,
            "end": 121
          }
        ],
        "declare": false,
        "start": 111,
        "end": 122
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 104,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 130
          },
          "optional": false,
          "computed": false,
          "start": 123,
          "end": 130
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 131,
            "end": 135
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 137,
            "end": 141
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 143,
            "end": 147
          }
        ],
        "optional": false,
        "start": 123,
        "end": 148
      },
      "directive": null,
      "start": 123,
      "end": 149
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 149
}
```
