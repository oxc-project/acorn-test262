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
        "name": "fs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "server",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "IConfiguration",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "workspace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "server",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 235,
                      "name": "IWorkspace",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "name": "server",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "server",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 264,
                      "name": "IServer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "IServer",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "IWorkspace",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "toAbsolutePath",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "server",
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
                        "name": "IServer",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 96,
                  "end": 126,
                  "name": "workspaceRelativePath",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 120,
                      "end": 126
                    }
                  },
                  "decorators": [],
                  "optional": true
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
      "attributes": [],
      "exportKind": "type"
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
        "name": "commands",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "run",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 125,
          "name": "configuration",
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
                  "name": "commands",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 125,
                  "name": "IConfiguration",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 224,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 133,
            "end": 222,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 137,
                "end": 221,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 158,
                  "name": "absoluteWorkspacePath",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "configuration",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 184,
                        "name": "workspace",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 199,
                      "name": "toAbsolutePath",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 200,
                      "end": 220,
                      "object": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 213,
                        "name": "configuration",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 220,
                        "name": "server",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
