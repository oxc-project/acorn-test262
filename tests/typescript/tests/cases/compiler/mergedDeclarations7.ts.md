__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "passport",
        "raw": "'passport'",
        "start": 15,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "passport",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 50
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Passport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 79
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
                          "name": "use",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 94,
                          "end": 97
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 101,
                            "end": 105
                          },
                          "start": 99,
                          "end": 105
                        },
                        "accessibility": null,
                        "readonly": false,
                        "static": false,
                        "start": 94,
                        "end": 106
                      }
                    ],
                    "start": 80,
                    "end": 116
                  },
                  "declare": false,
                  "start": 61,
                  "end": 116
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PassportStatic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 150
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Passport",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 167
                      },
                      "typeArguments": null,
                      "start": 159,
                      "end": 167
                    }
                  ],
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
                          "name": "Passport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 190
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Passport",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 200,
                                      "end": 208
                                    },
                                    "typeArguments": null,
                                    "start": 200,
                                    "end": 208
                                  },
                                  "start": 198,
                                  "end": 208
                                },
                                "start": 193,
                                "end": 208
                              }
                            ],
                            "start": 192,
                            "end": 209
                          },
                          "start": 190,
                          "end": 209
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 182,
                        "end": 210
                      }
                    ],
                    "start": 168,
                    "end": 220
                  },
                  "declare": false,
                  "start": 126,
                  "end": 220
                }
              ],
              "start": 51,
              "end": 226
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 32,
            "end": 226
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "passport",
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
                          "name": "passport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 256
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PassportStatic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 271
                        },
                        "start": 248,
                        "end": 271
                      },
                      "typeArguments": null,
                      "start": 248,
                      "end": 271
                    },
                    "start": 246,
                    "end": 271
                  },
                  "start": 238,
                  "end": 271
                },
                "init": null,
                "definite": false,
                "start": 238,
                "end": 271
              }
            ],
            "declare": false,
            "start": 232,
            "end": 272
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "passport",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 294
            },
            "start": 277,
            "end": 295
          }
        ],
        "start": 26,
        "end": 297
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 297
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 298
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
            "name": "passport",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 20
          },
          "start": 7,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "passport",
        "raw": "\"passport\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Passport",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 55
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Passport",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 55
          },
          "importKind": "value",
          "start": 47,
          "end": 55
        }
      ],
      "source": {
        "type": "Literal",
        "value": "passport",
        "raw": "\"passport\"",
        "start": 63,
        "end": 73
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Passport",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 91
                },
                "typeArguments": null,
                "start": 83,
                "end": 91
              },
              "start": 81,
              "end": 91
            },
            "start": 80,
            "end": 91
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "passport",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 102
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 106
              },
              "optional": false,
              "computed": false,
              "start": 94,
              "end": 106
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 94,
            "end": 108
          },
          "definite": false,
          "start": 80,
          "end": 108
        }
      ],
      "declare": false,
      "start": 76,
      "end": 109
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 109
}
```
