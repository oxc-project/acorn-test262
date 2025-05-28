__ESTREE_TEST__:PASS:
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
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 25,
        "value": "./account",
        "raw": "\"./account\""
      },
      "attributes": [],
      "exportKind": "value"
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
  "end": 124,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 50,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 24,
          "decorators": [],
          "name": "Account",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 39,
                "decorators": [],
                "name": "myAccNum",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 69,
        "decorators": [],
        "name": "Account2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 84,
              "decorators": [],
              "name": "myAccNum",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 123,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 105,
          "end": 120,
          "local": {
            "type": "Identifier",
            "start": 105,
            "end": 113,
            "decorators": [],
            "name": "Account2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
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
  "end": 229,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 126,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 38,
              "decorators": [],
              "name": "Account",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 57,
                    "decorators": [],
                    "name": "someProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 77,
            "end": 124,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 109,
                    "decorators": [],
                    "name": "someProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "ImportDeclaration",
      "start": 127,
      "end": 160,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 150,
        "end": 159,
        "value": "./model",
        "raw": "\"./model\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 161,
      "end": 229,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 168,
        "end": 229,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 174,
            "end": 228,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 178,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 181,
              "end": 228,
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 204,
                          "decorators": [],
                          "name": "Account",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 221,
                          "decorators": [],
                          "name": "Acc",
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
                "start": 226,
                "end": 228,
                "body": []
              },
              "id": null,
              "generator": false
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
