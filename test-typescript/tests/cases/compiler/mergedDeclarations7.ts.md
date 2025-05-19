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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 297,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 32,
            "end": 226,
            "body": {
              "type": "TSModuleBlock",
              "start": 51,
              "end": 226,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 61,
                  "end": 116,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 80,
                    "end": 116,
                    "body": [
                      {
                        "type": "TSMethodSignature",
                        "start": 94,
                        "end": 106,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 94,
                          "end": 97,
                          "decorators": [],
                          "name": "use",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "params": [],
                        "readonly": false,
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
                        "static": false,
                        "typeParameters": null
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 79,
                    "decorators": [],
                    "name": "Passport",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 126,
                  "end": 220,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 168,
                    "end": 220,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 182,
                        "end": 210,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 190,
                          "decorators": [],
                          "name": "Passport",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
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
                                "params": [],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 198,
                                  "end": 208,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 200,
                                    "end": 208,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 200,
                                      "end": 208,
                                      "decorators": [],
                                      "name": "Passport",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "typeParameters": null
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
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
                  "id": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 150,
                    "decorators": [],
                    "name": "PassportStatic",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 50,
              "decorators": [],
              "name": "passport",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          },
          {
            "type": "VariableDeclaration",
            "start": 232,
            "end": 272,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 238,
                "end": 271,
                "definite": false,
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
                      "typeArguments": null,
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
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 25,
        "raw": "'passport'",
        "value": "passport"
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
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 36,
        "raw": "\"passport\"",
        "value": "passport"
      },
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
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 38,
      "end": 74,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 63,
        "end": 73,
        "raw": "\"passport\"",
        "value": "passport"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 55,
            "decorators": [],
            "name": "Passport",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 108,
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 91,
                  "decorators": [],
                  "name": "Passport",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 94,
            "end": 108,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 94,
              "end": 106,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 94,
                "end": 102,
                "decorators": [],
                "name": "passport",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
