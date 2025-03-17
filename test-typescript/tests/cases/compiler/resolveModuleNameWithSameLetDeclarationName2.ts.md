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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 171,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 33,
            "end": 141,
            "body": {
              "type": "TSInterfaceBody",
              "start": 48,
              "end": 141,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 58,
                  "end": 89,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 64,
                    "decorators": [],
                    "name": "decode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 65,
                      "end": 79,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 71,
                        "end": 79,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 73,
                          "end": 79
                        }
                      }
                    }
                  ],
                  "readonly": false,
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
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 98,
                  "end": 135,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 104,
                    "decorators": [],
                    "name": "encode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 105,
                      "end": 125,
                      "decorators": [],
                      "name": "codePoints",
                      "optional": false,
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
                      }
                    }
                  ],
                  "readonly": false,
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
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 47,
              "decorators": [],
              "name": "ucs2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 147,
            "end": 169,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 154,
              "end": 169,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 158,
                  "end": 168,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 158,
                    "end": 168,
                    "decorators": [],
                    "name": "ucs2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 162,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 164,
                        "end": 168,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 168,
                          "decorators": [],
                          "name": "ucs2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 16,
        "end": 26,
        "raw": "\"punycode\"",
        "value": "punycode"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
