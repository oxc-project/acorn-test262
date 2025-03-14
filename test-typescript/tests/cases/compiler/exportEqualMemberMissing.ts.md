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
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 187,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 90,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 90,
              "body": {
                "type": "TSInterfaceBody",
                "start": 51,
                "end": 90,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 61,
                    "end": 84,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 65,
                        "decorators": [],
                        "name": "res",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 67,
                        "end": 70,
                        "decorators": [],
                        "name": "req",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 72,
                        "end": 76,
                        "decorators": [],
                        "name": "next",
                        "optional": false
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
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 50,
                "decorators": [],
                "name": "connectModule",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 95,
            "end": 185,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 102,
              "end": 185,
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
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 139,
                      "decorators": [],
                      "name": "use",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 178,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 141,
                        "end": 178,
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
                                  "optional": false
                                }
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
                              "optional": false
                            }
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
                "start": 112,
                "end": 125,
                "decorators": [],
                "name": "connectExport",
                "optional": false
              }
            },
            "exportKind": "type",
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
        "end": 13,
        "decorators": [],
        "name": "server",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 248,
          "definite": false,
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
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 217,
                            "end": 230,
                            "decorators": [],
                            "name": "connectExport",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 236,
                    "end": 246,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 239,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
  "start": 53,
  "end": 218,
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 70,
        "end": 109,
        "expression": {
          "type": "Literal",
          "start": 78,
          "end": 108,
          "raw": "'./exportEqualMemberMissing_0'",
          "value": "./exportEqualMemberMissing_0"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 147,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 125,
            "end": 146,
            "arguments": [
              {
                "type": "Literal",
                "start": 140,
                "end": 145,
                "raw": "'foo'",
                "value": "foo"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 125,
              "end": 139,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 125,
                "end": 132,
                "decorators": [],
                "name": "connect",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 139,
                "decorators": [],
                "name": "static",
                "optional": false
              }
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 111,
          "end": 124,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 111,
            "end": 120,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "decorators": [],
              "name": "connect",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 124,
            "decorators": [],
            "name": "use",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
