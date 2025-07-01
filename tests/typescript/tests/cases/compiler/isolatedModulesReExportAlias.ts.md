__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "events",
        "raw": "\"events\"",
        "start": 15,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitterOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 57
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "captureRejections",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 81
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 84,
                      "end": 91
                    },
                    "start": 82,
                    "end": 91
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 64,
                  "end": 92
                }
              ],
              "start": 58,
              "end": 96
            },
            "declare": false,
            "start": 28,
            "end": 96
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitter",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 117
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 135
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "EventEmitterOptions",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 146,
                              "end": 165
                            },
                            "typeArguments": null,
                            "start": 146,
                            "end": 165
                          },
                          "start": 144,
                          "end": 165
                        },
                        "start": 136,
                        "end": 165
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 135,
                    "end": 167
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 124,
                  "end": 167
                }
              ],
              "start": 118,
              "end": 171
            },
            "abstract": false,
            "declare": false,
            "start": 99,
            "end": 171
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventEmitter",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 195
            },
            "start": 174,
            "end": 196
          }
        ],
        "start": 24,
        "end": 198
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "node:events",
        "raw": "\"node:events\"",
        "start": 214,
        "end": 227
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 245
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "events",
                "raw": "\"events\"",
                "start": 256,
                "end": 264
              },
              "start": 248,
              "end": 265
            },
            "importKind": "value",
            "start": 232,
            "end": 266
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 284
            },
            "start": 269,
            "end": 285
          }
        ],
        "start": 228,
        "end": 287
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 199,
      "end": 287
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 288
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
        "name": "events",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 13
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "events",
          "raw": "\"events\"",
          "start": 24,
          "end": 32
        },
        "start": 16,
        "end": 33
      },
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "events",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 50
      },
      "start": 35,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 83,
  "end": 83
}
```
