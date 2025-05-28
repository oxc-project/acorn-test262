__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 170,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 25,
        "value": "punycode",
        "raw": "\"punycode\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 170,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 140,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "ucs2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 47,
              "end": 140,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 57,
                  "end": 88,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 63,
                    "decorators": [],
                    "name": "decode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 78,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 70,
                        "end": 78,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 72,
                          "end": 78
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 97,
                  "end": 134,
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 103,
                    "decorators": [],
                    "name": "encode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 104,
                      "end": 124,
                      "decorators": [],
                      "name": "codePoints",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 114,
                        "end": 124,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 116,
                          "end": 124,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 116,
                            "end": 122
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 127,
                      "end": 133
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
          {
            "type": "ExportNamedDeclaration",
            "start": 146,
            "end": 168,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 153,
              "end": 168,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 157,
                  "end": 167,
                  "id": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 167,
                    "decorators": [],
                    "name": "ucs2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 161,
                      "end": 167,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 163,
                        "end": 167,
                        "typeName": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 167,
                          "decorators": [],
                          "name": "ucs2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": null,
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
