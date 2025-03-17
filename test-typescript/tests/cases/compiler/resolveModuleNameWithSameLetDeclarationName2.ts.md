__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 171,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 171,
      "id": {
        "type": "Literal",
        "start": 16,
        "end": 26,
        "value": "punycode",
        "raw": "\"punycode\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 171,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 33,
            "end": 141,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "name": "ucs2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 48,
              "end": 141,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 58,
                  "end": 89,
                  "key": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 64,
                    "name": "decode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 65,
                      "end": 79,
                      "name": "string",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 71,
                        "end": 79,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 73,
                          "end": 79
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 82,
                      "end": 88
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 98,
                  "end": 135,
                  "key": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 104,
                    "name": "encode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 105,
                      "end": 125,
                      "name": "codePoints",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 115,
                        "end": 125,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 117,
                          "end": 125,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 117,
                            "end": 123
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
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
            "start": 147,
            "end": 169,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 154,
              "end": 169,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 158,
                  "end": 168,
                  "id": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 168,
                    "name": "ucs2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 162,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 164,
                        "end": 168,
                        "typeName": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 168,
                          "name": "ucs2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
