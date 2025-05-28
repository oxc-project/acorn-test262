__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 268,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 48,
        "end": 96,
        "expression": {
          "type": "Literal",
          "start": 56,
          "end": 95,
          "value": "./visibilityOfCrossModuleTypeUsage_fs",
          "raw": "'./visibilityOfCrossModuleTypeUsage_fs'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 98,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 111,
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 114,
        "end": 166,
        "expression": {
          "type": "Literal",
          "start": 122,
          "end": 165,
          "value": "./visibilityOfCrossModuleTypeUsage_server",
          "raw": "'./visibilityOfCrossModuleTypeUsage_server'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 169,
      "end": 267,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 176,
        "end": 267,
        "id": {
          "type": "Identifier",
          "start": 186,
          "end": 200,
          "decorators": [],
          "name": "IConfiguration",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 201,
          "end": 267,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 207,
              "end": 236,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 207,
                "end": 216,
                "decorators": [],
                "name": "workspace",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 216,
                "end": 235,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 218,
                  "end": 235,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 218,
                    "end": 235,
                    "left": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 224,
                      "decorators": [],
                      "name": "server",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 235,
                      "decorators": [],
                      "name": "IWorkspace",
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
              "type": "TSPropertySignature",
              "start": 241,
              "end": 265,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 241,
                "end": 247,
                "decorators": [],
                "name": "server",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 248,
                "end": 264,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 250,
                  "end": 264,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 250,
                    "end": 264,
                    "left": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 256,
                      "decorators": [],
                      "name": "server",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 264,
                      "decorators": [],
                      "name": "IServer",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
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
  "end": 139,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 28,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 24,
          "decorators": [],
          "name": "IServer",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 25,
          "end": 28,
          "body": []
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
      "start": 30,
      "end": 138,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 37,
        "end": 138,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 57,
          "decorators": [],
          "name": "IWorkspace",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 58,
          "end": 138,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 64,
              "end": 136,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 78,
                "decorators": [],
                "name": "toAbsolutePath",
                "optional": false,
                "typeAnnotation": null
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 79,
                  "end": 94,
                  "decorators": [],
                  "name": "server",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 87,
                      "end": 94,
                      "typeName": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 94,
                        "decorators": [],
                        "name": "IServer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 96,
                  "end": 126,
                  "decorators": [],
                  "name": "workspaceRelativePath",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 120,
                      "end": 126
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                }
              },
              "accessibility": null,
              "readonly": false,
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
  "end": 224,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "commands",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 72,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 71,
          "value": "./visibilityOfCrossModuleTypeUsage_commands",
          "raw": "'./visibilityOfCrossModuleTypeUsage_commands'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 86,
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 125,
          "decorators": [],
          "name": "configuration",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 125,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 102,
                "end": 125,
                "left": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 110,
                  "decorators": [],
                  "name": "commands",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 125,
                  "decorators": [],
                  "name": "IConfiguration",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 224,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 222,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 221,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 158,
                  "decorators": [],
                  "name": "absoluteWorkspacePath",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 161,
                  "end": 221,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 161,
                    "end": 199,
                    "object": {
                      "type": "MemberExpression",
                      "start": 161,
                      "end": 184,
                      "object": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 174,
                        "decorators": [],
                        "name": "configuration",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 184,
                        "decorators": [],
                        "name": "workspace",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 199,
                      "decorators": [],
                      "name": "toAbsolutePath",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 200,
                      "end": 220,
                      "object": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 213,
                        "decorators": [],
                        "name": "configuration",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 220,
                        "decorators": [],
                        "name": "server",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
