__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "punycode",
        "raw": "\"punycode\"",
        "start": 15,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ucs2",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
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
                    "name": "decode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 63
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 72,
                          "end": 78
                        },
                        "start": 70,
                        "end": 78
                      },
                      "start": 64,
                      "end": 78
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 57,
                  "end": 88
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "encode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 103
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "codePoints",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 116,
                            "end": 122
                          },
                          "start": 116,
                          "end": 124
                        },
                        "start": 114,
                        "end": 124
                      },
                      "start": 104,
                      "end": 124
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 127,
                      "end": 133
                    },
                    "start": 125,
                    "end": 133
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 97,
                  "end": 134
                }
              ],
              "start": 47,
              "end": 140
            },
            "declare": false,
            "start": 32,
            "end": 140
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ucs2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ucs2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 167
                        },
                        "typeArguments": null,
                        "start": 163,
                        "end": 167
                      },
                      "start": 161,
                      "end": 167
                    },
                    "start": 157,
                    "end": 167
                  },
                  "init": null,
                  "definite": false,
                  "start": 157,
                  "end": 167
                }
              ],
              "declare": false,
              "start": 153,
              "end": 168
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 146,
            "end": 168
          }
        ],
        "start": 26,
        "end": 170
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
