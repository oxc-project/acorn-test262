__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 298,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 297,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 25,
        "value": "passport",
        "raw": "'passport'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 297,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 32,
            "end": 226,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 50,
              "decorators": [],
              "name": "passport",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 51,
              "end": 226,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 61,
                  "end": 116,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 79,
                    "decorators": [],
                    "name": "Passport",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 80,
                    "end": 116,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 94,
                        "end": 106,
                        "key": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 97,
                          "decorators": [],
                          "name": "use",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "computed": false,
                        "optional": false,
                        "kind": "method",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 99,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 101,
                            "end": 105
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
                  "type": "TSInterfaceDeclaration",
                  "start": 126,
                  "end": 220,
                  "id": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 150,
                    "decorators": [],
                    "name": "PassportStatic",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 159,
                      "end": 167,
                      "expression": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 167,
                        "decorators": [],
                        "name": "Passport",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 168,
                    "end": 220,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 182,
                        "end": 210,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 190,
                          "decorators": [],
                          "name": "Passport",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 190,
                          "end": 209,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 192,
                            "end": 209,
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
                                "start": 193,
                                "end": 208,
                                "typeParameters": null,
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 198,
                                  "end": 208,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 200,
                                    "end": 208,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 200,
                                      "end": 208,
                                      "decorators": [],
                                      "name": "Passport",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "VariableDeclaration",
            "start": 232,
            "end": 272,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 238,
                "end": 271,
                "id": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 271,
                  "decorators": [],
                  "name": "passport",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 246,
                    "end": 271,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 248,
                      "end": 271,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 248,
                        "end": 271,
                        "left": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 256,
                          "decorators": [],
                          "name": "passport",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 271,
                          "decorators": [],
                          "name": "PassportStatic",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
          {
            "type": "TSExportAssignment",
            "start": 277,
            "end": 295,
            "expression": {
              "type": "Identifier",
              "start": 286,
              "end": 294,
              "decorators": [],
              "name": "passport",
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
  "end": 109,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 20,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "passport",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 36,
        "value": "passport",
        "raw": "\"passport\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 38,
      "end": 74,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 55,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "decorators": [],
            "name": "Passport",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "decorators": [],
            "name": "Passport",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 73,
        "value": "passport",
        "raw": "\"passport\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 109,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 91,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 91,
                  "decorators": [],
                  "name": "Passport",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 94,
            "end": 108,
            "callee": {
              "type": "MemberExpression",
              "start": 94,
              "end": 106,
              "object": {
                "type": "Identifier",
                "start": 94,
                "end": 102,
                "decorators": [],
                "name": "passport",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
