__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 282,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "name": "connectmodule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 55,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 30,
            "end": 53,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "name": "res",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "name": "req",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 41,
                "end": 45,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 52,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 48,
                "end": 52
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 79,
        "name": "connectexport",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 80,
        "end": 167,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 129,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 89,
              "name": "use",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 128,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 91,
                "end": 128,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 92,
                    "end": 110,
                    "name": "mod",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 97,
                        "end": 110,
                        "typeName": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 110,
                          "name": "connectmodule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 128,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 128,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 128,
                      "name": "connectexport",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 134,
            "end": 165,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 140,
              "name": "listen",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 164,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 142,
                "end": 164,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 143,
                    "end": 155,
                    "name": "port",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 149,
                        "end": 155
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 160,
                    "end": 164
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 169,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 261,
            "name": "server",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 261,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 181,
                "end": 261,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 187,
                    "end": 205,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 189,
                      "end": 204,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 191,
                        "end": 204,
                        "typeName": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 204,
                          "name": "connectexport",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 210,
                    "end": 231,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 215,
                      "name": "test1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 215,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 217,
                        "end": 230,
                        "typeName": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 230,
                          "name": "connectmodule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 236,
                    "end": 259,
                    "key": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 241,
                      "name": "test2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 243,
                      "end": 258,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 245,
                        "end": 258,
                        "typeName": {
                          "type": "Identifier",
                          "start": 245,
                          "end": 258,
                          "name": "connectmodule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 264,
      "end": 280,
      "expression": {
        "type": "Identifier",
        "start": 273,
        "end": 279,
        "name": "server",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
