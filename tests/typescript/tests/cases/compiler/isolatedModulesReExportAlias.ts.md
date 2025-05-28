__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 198,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 23,
        "value": "events",
        "raw": "\"events\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 198,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 28,
            "end": 96,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 57,
              "decorators": [],
              "name": "EventEmitterOptions",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 58,
              "end": 96,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 64,
                  "end": 92,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 81,
                    "decorators": [],
                    "name": "captureRejections",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 84,
                      "end": 91
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
            "type": "ClassDeclaration",
            "start": 99,
            "end": 171,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 117,
              "decorators": [],
              "name": "EventEmitter",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 118,
              "end": 171,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 124,
                  "end": 167,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 135,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 135,
                    "end": 167,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 136,
                        "end": 165,
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 144,
                          "end": 165,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 146,
                            "end": 165,
                            "typeName": {
                              "type": "Identifier",
                              "start": 146,
                              "end": 165,
                              "decorators": [],
                              "name": "EventEmitterOptions",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 174,
            "end": 196,
            "expression": {
              "type": "Identifier",
              "start": 183,
              "end": 195,
              "decorators": [],
              "name": "EventEmitter",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 199,
      "end": 287,
      "id": {
        "type": "Literal",
        "start": 214,
        "end": 227,
        "value": "node:events",
        "raw": "\"node:events\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 228,
        "end": 287,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 232,
            "end": 266,
            "id": {
              "type": "Identifier",
              "start": 239,
              "end": 245,
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 248,
              "end": 265,
              "expression": {
                "type": "Literal",
                "start": 256,
                "end": 264,
                "value": "events",
                "raw": "\"events\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 269,
            "end": 285,
            "expression": {
              "type": "Identifier",
              "start": 278,
              "end": 284,
              "decorators": [],
              "name": "events",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 52,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "events",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 16,
        "end": 33,
        "expression": {
          "type": "Literal",
          "start": 24,
          "end": 32,
          "value": "events",
          "raw": "\"events\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 35,
      "end": 51,
      "expression": {
        "type": "Identifier",
        "start": 44,
        "end": 50,
        "decorators": [],
        "name": "events",
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
  "start": 83,
  "end": 83,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
