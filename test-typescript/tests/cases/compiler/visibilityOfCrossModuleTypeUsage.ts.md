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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 48,
        "end": 96,
        "expression": {
          "type": "Literal",
          "start": 56,
          "end": 95,
          "raw": "'./visibilityOfCrossModuleTypeUsage_fs'",
          "value": "./visibilityOfCrossModuleTypeUsage_fs"
        }
      }
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 114,
        "end": 166,
        "expression": {
          "type": "Literal",
          "start": 122,
          "end": 165,
          "raw": "'./visibilityOfCrossModuleTypeUsage_server'",
          "value": "./visibilityOfCrossModuleTypeUsage_server"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 169,
      "end": 267,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 176,
        "end": 267,
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
              "key": {
                "type": "Identifier",
                "start": 207,
                "end": 216,
                "decorators": [],
                "name": "workspace",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 235,
                      "decorators": [],
                      "name": "IWorkspace",
                      "optional": false
                    }
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 241,
              "end": 265,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 241,
                "end": 247,
                "decorators": [],
                "name": "server",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 264,
                      "decorators": [],
                      "name": "IServer",
                      "optional": false
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
          "start": 186,
          "end": 200,
          "decorators": [],
          "name": "IConfiguration",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 28,
        "body": {
          "type": "TSInterfaceBody",
          "start": 25,
          "end": 28,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 24,
          "decorators": [],
          "name": "IServer",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 138,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 37,
        "end": 138,
        "body": {
          "type": "TSInterfaceBody",
          "start": 58,
          "end": 138,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 64,
              "end": 136,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 78,
                "decorators": [],
                "name": "toAbsolutePath",
                "optional": false
              },
              "kind": "method",
              "optional": false,
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
                        "optional": false
                      }
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
              "readonly": false,
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
              "static": false
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 57,
          "decorators": [],
          "name": "IWorkspace",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 72,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 71,
          "raw": "'./visibilityOfCrossModuleTypeUsage_commands'",
          "value": "./visibilityOfCrossModuleTypeUsage_commands"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 224,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 158,
                  "decorators": [],
                  "name": "absoluteWorkspacePath",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 161,
                  "end": 221,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 200,
                      "end": 220,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 200,
                        "end": 213,
                        "decorators": [],
                        "name": "configuration",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 214,
                        "end": 220,
                        "decorators": [],
                        "name": "server",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 161,
                    "end": 199,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 161,
                      "end": 184,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 174,
                        "decorators": [],
                        "name": "configuration",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 184,
                        "decorators": [],
                        "name": "workspace",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 199,
                      "decorators": [],
                      "name": "toAbsolutePath",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 86,
        "decorators": [],
        "name": "run",
        "optional": false
      },
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
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 125,
                  "decorators": [],
                  "name": "IConfiguration",
                  "optional": false
                }
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
