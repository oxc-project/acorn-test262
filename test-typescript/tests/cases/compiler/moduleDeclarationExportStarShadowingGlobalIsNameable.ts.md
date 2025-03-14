model/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 25,
        "raw": "\"./account\"",
        "value": "./account"
      }
    }
  ],
  "sourceType": "module"
}
```
model/account.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 50,
        "body": {
          "type": "TSInterfaceBody",
          "start": 25,
          "end": 50,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 31,
              "end": 48,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 39,
                "decorators": [],
                "name": "myAccNum",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 24,
          "decorators": [],
          "name": "Account",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 95,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 93,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 84,
              "decorators": [],
              "name": "myAccNum",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 69,
        "decorators": [],
        "name": "Account2",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 123,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 105,
          "end": 120,
          "exported": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "decorators": [],
            "name": "Acc",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 105,
            "end": 113,
            "decorators": [],
            "name": "Account2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 230,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 126,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 126,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 72,
            "body": {
              "type": "TSInterfaceBody",
              "start": 39,
              "end": 72,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 49,
                  "end": 66,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 57,
                    "decorators": [],
                    "name": "someProp",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 38,
              "decorators": [],
              "name": "Account",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 77,
            "end": 124,
            "body": {
              "type": "TSInterfaceBody",
              "start": 91,
              "end": 124,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 101,
                  "end": 118,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 109,
                    "decorators": [],
                    "name": "someProp",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "Acc",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ImportDeclaration",
      "start": 127,
      "end": 160,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 150,
        "end": 159,
        "raw": "\"./model\"",
        "value": "./model"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 134,
          "end": 144,
          "local": {
            "type": "Identifier",
            "start": 139,
            "end": 144,
            "decorators": [],
            "name": "model",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 229,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 229,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 174,
            "end": 228,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 178,
              "decorators": [],
              "name": "func",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 181,
              "end": 228,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 228,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 182,
                  "end": 204,
                  "decorators": [],
                  "name": "account",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 204,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 204,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 191,
                        "end": 204,
                        "left": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 196,
                          "decorators": [],
                          "name": "model",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 204,
                          "decorators": [],
                          "name": "Account",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 206,
                  "end": 221,
                  "decorators": [],
                  "name": "acc2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 210,
                    "end": 221,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 212,
                      "end": 221,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 212,
                        "end": 221,
                        "left": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 217,
                          "decorators": [],
                          "name": "model",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 221,
                          "decorators": [],
                          "name": "Acc",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
