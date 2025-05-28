__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 187,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 90,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 90,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 50,
                "decorators": [],
                "name": "connectModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 51,
                "end": 90,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 61,
                    "end": 84,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 65,
                        "decorators": [],
                        "name": "res",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 70,
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 72,
                        "end": 76,
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 83,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 79,
                        "end": 83
                      }
                    }
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 95,
            "end": 185,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 102,
              "end": 185,
              "id": {
                "type": "Identifier",
                "start": 112,
                "end": 125,
                "decorators": [],
                "name": "connectExport",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 126,
                "end": 185,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 136,
                    "end": 179,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 139,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 178,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 141,
                        "end": 178,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 142,
                            "end": 160,
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 145,
                              "end": 160,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 147,
                                "end": 160,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 147,
                                  "end": 160,
                                  "decorators": [],
                                  "name": "connectModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 162,
                          "end": 178,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 165,
                            "end": 178,
                            "typeName": {
                              "type": "Identifier",
                              "start": 165,
                              "end": 178,
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
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
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 248,
            "decorators": [],
            "name": "server",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 248,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 200,
                "end": 248,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 206,
                    "end": 231,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 208,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 210,
                        "end": 230,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 210,
                          "end": 230,
                          "left": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 216,
                            "decorators": [],
                            "name": "server",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 230,
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 236,
                    "end": 246,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 239,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 239,
                      "end": 245,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 241,
                        "end": 245,
                        "typeName": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 245,
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 250,
      "end": 266,
      "expression": {
        "type": "Identifier",
        "start": 259,
        "end": 265,
        "decorators": [],
        "name": "server",
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
  "start": 53,
  "end": 217,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 53,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 67,
        "decorators": [],
        "name": "connect",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 70,
        "end": 109,
        "expression": {
          "type": "Literal",
          "start": 78,
          "end": 108,
          "value": "./exportEqualMemberMissing_0",
          "raw": "'./exportEqualMemberMissing_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 147,
        "callee": {
          "type": "MemberExpression",
          "start": 111,
          "end": 124,
          "object": {
            "type": "CallExpression",
            "start": 111,
            "end": 120,
            "callee": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "decorators": [],
              "name": "connect",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 124,
            "decorators": [],
            "name": "use",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 125,
            "end": 146,
            "callee": {
              "type": "MemberExpression",
              "start": 125,
              "end": 139,
              "object": {
                "type": "Identifier",
                "start": 125,
                "end": 132,
                "decorators": [],
                "name": "connect",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 139,
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 140,
                "end": 145,
                "value": "foo",
                "raw": "'foo'"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
