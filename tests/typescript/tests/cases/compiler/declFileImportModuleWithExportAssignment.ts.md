__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 337,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 224,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 86,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 86,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 46,
                "decorators": [],
                "name": "connectModule",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 47,
                "end": 86,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 57,
                    "end": 80,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 58,
                        "end": 61,
                        "decorators": [],
                        "name": "res",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 66,
                        "decorators": [],
                        "name": "req",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 68,
                        "end": 72,
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 75,
                        "end": 79
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
            "start": 91,
            "end": 221,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 98,
              "end": 221,
              "id": {
                "type": "Identifier",
                "start": 108,
                "end": 121,
                "decorators": [],
                "name": "connectExport",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 122,
                "end": 221,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 132,
                    "end": 175,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 135,
                      "decorators": [],
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 135,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 137,
                        "end": 174,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 138,
                            "end": 156,
                            "decorators": [],
                            "name": "mod",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 141,
                              "end": 156,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 143,
                                "end": 156,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 143,
                                  "end": 156,
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
                          "start": 158,
                          "end": 174,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 161,
                            "end": 174,
                            "typeName": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 174,
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
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 184,
                    "end": 215,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 190,
                      "decorators": [],
                      "name": "listen",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 214,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 192,
                        "end": 214,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 193,
                            "end": 205,
                            "decorators": [],
                            "name": "port",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 197,
                              "end": 205,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 199,
                                "end": 205
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 214,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 210,
                            "end": 214
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
      "start": 225,
      "end": 323,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 322,
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 322,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 233,
                "end": 322,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 239,
                    "end": 260,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 241,
                      "end": 259,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 243,
                        "end": 259,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 243,
                          "end": 259,
                          "left": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 245,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 259,
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
                    "start": 265,
                    "end": 289,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 270,
                      "decorators": [],
                      "name": "test1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 270,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 272,
                        "end": 288,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 272,
                          "end": 288,
                          "left": {
                            "type": "Identifier",
                            "start": 272,
                            "end": 274,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 288,
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 294,
                    "end": 320,
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 299,
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 301,
                      "end": 319,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 303,
                        "end": 319,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 303,
                          "end": 319,
                          "left": {
                            "type": "Identifier",
                            "start": 303,
                            "end": 305,
                            "decorators": [],
                            "name": "m2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 306,
                            "end": 319,
                            "decorators": [],
                            "name": "connectModule",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 324,
      "end": 336,
      "expression": {
        "type": "Identifier",
        "start": 333,
        "end": 335,
        "decorators": [],
        "name": "m2",
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
  "start": 35,
  "end": 149,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 47,
        "end": 102,
        "expression": {
          "type": "Literal",
          "start": 55,
          "end": 101,
          "value": "./declFileImportModuleWithExportAssignment_0",
          "raw": "\"./declFileImportModuleWithExportAssignment_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 122,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 111,
        "end": 122,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 115,
            "end": 121,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 119,
              "end": 121,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 149,
      "expression": {
        "type": "CallExpression",
        "start": 123,
        "end": 148,
        "callee": {
          "type": "MemberExpression",
          "start": 123,
          "end": 130,
          "object": {
            "type": "Identifier",
            "start": 123,
            "end": 124,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 130,
            "decorators": [],
            "name": "test1",
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
            "start": 131,
            "end": 135,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 137,
            "end": 141,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Literal",
            "start": 143,
            "end": 147,
            "value": null,
            "raw": "null"
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
