__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./account",
        "raw": "\"./account\"",
        "start": 14,
        "end": 25
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Account",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 24
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
                "name": "myAccNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 39
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "accessibility": null,
              "static": false,
              "start": 31,
              "end": 48
            }
          ],
          "start": 25,
          "end": 50
        },
        "declare": false,
        "start": 7,
        "end": 50
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Account2",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 69
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
              "name": "myAccNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 93
          }
        ],
        "start": 70,
        "end": 95
      },
      "declare": false,
      "start": 51,
      "end": 95
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Account2",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 113
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Acc",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 120
          },
          "exportKind": "value",
          "start": 105,
          "end": 120
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 96,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 124
}
```
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
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Account",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 38
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
                    "name": "someProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 57
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    },
                    "start": 57,
                    "end": 65
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 49,
                  "end": 66
                }
              ],
              "start": 39,
              "end": 72
            },
            "declare": false,
            "start": 21,
            "end": 72
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Acc",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 90
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
                    "name": "someProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 109
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    },
                    "start": 109,
                    "end": 117
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 101,
                  "end": 118
                }
              ],
              "start": 91,
              "end": 124
            },
            "declare": false,
            "start": 77,
            "end": 124
          }
        ],
        "start": 15,
        "end": 126
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 126
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "model",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 144
          },
          "start": 134,
          "end": 144
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./model",
        "raw": "\"./model\"",
        "start": 150,
        "end": 159
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 127,
      "end": 160
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 178
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "account",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "model",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 196
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Account",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 204
                        },
                        "start": 191,
                        "end": 204
                      },
                      "typeArguments": null,
                      "start": 191,
                      "end": 204
                    },
                    "start": 189,
                    "end": 204
                  },
                  "start": 182,
                  "end": 204
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "acc2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "model",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 217
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Acc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 218,
                          "end": 221
                        },
                        "start": 212,
                        "end": 221
                      },
                      "typeArguments": null,
                      "start": 212,
                      "end": 221
                    },
                    "start": 210,
                    "end": 221
                  },
                  "start": 206,
                  "end": 221
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 226,
                "end": 228
              },
              "id": null,
              "generator": false,
              "start": 181,
              "end": 228
            },
            "definite": false,
            "start": 174,
            "end": 228
          }
        ],
        "declare": false,
        "start": 168,
        "end": 229
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 161,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
