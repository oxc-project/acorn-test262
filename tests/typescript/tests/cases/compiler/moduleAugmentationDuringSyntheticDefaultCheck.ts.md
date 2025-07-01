__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "moment",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 33
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 40
            },
            "start": 27,
            "end": 40
          },
          "typeArguments": null,
          "start": 27,
          "end": 40
        },
        "start": 25,
        "end": 40
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 66
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 87
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 102
                },
                "typeArguments": null,
                "start": 96,
                "end": 102
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "valueOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 116
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
                      "start": 120,
                      "end": 126
                    },
                    "start": 118,
                    "end": 126
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 109,
                  "end": 127
                }
              ],
              "start": 103,
              "end": 131
            },
            "declare": false,
            "start": 71,
            "end": 131
          }
        ],
        "start": 67,
        "end": 133
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 42,
      "end": 133
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 149
      },
      "start": 134,
      "end": 150
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 150
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moment",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "moment",
        "raw": "'moment'",
        "start": 24,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 49
      },
      "start": 34,
      "end": 50
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moment",
        "raw": "\"moment\"",
        "start": 66,
        "end": 74
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 97
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
                    "name": "tz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 110
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 114,
                      "end": 120
                    },
                    "start": 112,
                    "end": 120
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 108,
                  "end": 121
                }
              ],
              "start": 98,
              "end": 127
            },
            "declare": false,
            "start": 81,
            "end": 127
          }
        ],
        "start": 75,
        "end": 129
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 51,
      "end": 129
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 129
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_moment",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 19
          },
          "start": 7,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "moment",
        "raw": "\"moment\"",
        "start": 25,
        "end": 33
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moment",
        "raw": "\"moment\"",
        "start": 50,
        "end": 58
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 81
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
                    "name": "strftime",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 100
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pattern",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 110,
                          "end": 116
                        },
                        "start": 108,
                        "end": 116
                      },
                      "start": 101,
                      "end": 116
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 119,
                      "end": 125
                    },
                    "start": 117,
                    "end": 125
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 92,
                  "end": 126
                }
              ],
              "start": 82,
              "end": 132
            },
            "declare": false,
            "start": 65,
            "end": 132
          }
        ],
        "start": 59,
        "end": 134
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 35,
      "end": 134
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moment-timezone",
        "raw": "\"moment-timezone\"",
        "start": 150,
        "end": 167
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 190
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
                    "name": "strftime",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 209
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pattern",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 219,
                          "end": 225
                        },
                        "start": 217,
                        "end": 225
                      },
                      "start": 210,
                      "end": 225
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 228,
                      "end": 234
                    },
                    "start": 226,
                    "end": 234
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 201,
                  "end": 235
                }
              ],
              "start": 191,
              "end": 241
            },
            "declare": false,
            "start": 174,
            "end": 241
          }
        ],
        "start": 168,
        "end": 243
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 135,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 45
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "moment-timezone",
          "raw": "\"moment-timezone\"",
          "start": 56,
          "end": 73
        },
        "start": 48,
        "end": 74
      },
      "importKind": "value",
      "start": 32,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 75
}
```
