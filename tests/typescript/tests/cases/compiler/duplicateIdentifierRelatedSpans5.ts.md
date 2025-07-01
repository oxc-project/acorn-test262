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
              "name": "TopLevel",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 39
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
                    "name": "duplicate1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 50,
                    "end": 60
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 68,
                          "end": 74
                        },
                        "start": 65,
                        "end": 74
                      },
                      "start": 62,
                      "end": 74
                    },
                    "start": 60,
                    "end": 74
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 50,
                  "end": 75
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 94
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 102,
                          "end": 108
                        },
                        "start": 99,
                        "end": 108
                      },
                      "start": 96,
                      "end": 108
                    },
                    "start": 94,
                    "end": 108
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 84,
                  "end": 109
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 128
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 136,
                          "end": 142
                        },
                        "start": 133,
                        "end": 142
                      },
                      "start": 130,
                      "end": 142
                    },
                    "start": 128,
                    "end": 142
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 118,
                  "end": 143
                }
              ],
              "start": 40,
              "end": 149
            },
            "declare": false,
            "start": 21,
            "end": 149
          }
        ],
        "start": 15,
        "end": 151
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 152,
      "end": 161
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./file1",
        "raw": "\"./file1\"",
        "start": 7,
        "end": 16
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 17
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 32
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TopLevel",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 57
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 68,
                    "end": 78
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 82,
                      "end": 88
                    },
                    "start": 80,
                    "end": 88
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 68,
                  "end": 89
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 108
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 112,
                      "end": 118
                    },
                    "start": 110,
                    "end": 118
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 98,
                  "end": 119
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "duplicate3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 138
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 142,
                      "end": 148
                    },
                    "start": 140,
                    "end": 148
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 128,
                  "end": 149
                }
              ],
              "start": 58,
              "end": 155
            },
            "declare": false,
            "start": 39,
            "end": 155
          }
        ],
        "start": 33,
        "end": 157
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 18,
      "end": 157
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 158,
      "end": 167
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
