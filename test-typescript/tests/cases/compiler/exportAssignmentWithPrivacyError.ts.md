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
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 55,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 30,
            "end": 53,
            "params": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "decorators": [],
                "name": "res",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "req",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 41,
                "end": 45,
                "decorators": [],
                "name": "next",
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 23,
        "decorators": [],
        "name": "connectmodule",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 167,
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
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 89,
              "decorators": [],
              "name": "use",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 128,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 91,
                "end": 128,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 92,
                    "end": 110,
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
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
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false
                        }
                      }
                    }
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
                      "decorators": [],
                      "name": "connectexport",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 134,
            "end": 165,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 140,
              "decorators": [],
              "name": "listen",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 164,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 142,
                "end": 164,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 143,
                    "end": 155,
                    "decorators": [],
                    "name": "port",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 149,
                        "end": 155
                      }
                    }
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 79,
        "decorators": [],
        "name": "connectexport",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 261,
            "decorators": [],
            "name": "server",
            "optional": false,
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
                          "decorators": [],
                          "name": "connectexport",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 210,
                    "end": 231,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 215,
                      "decorators": [],
                      "name": "test1",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 236,
                    "end": 259,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 241,
                      "decorators": [],
                      "name": "test2",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
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
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false
                        }
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 264,
      "end": 280,
      "expression": {
        "type": "Identifier",
        "start": 273,
        "end": 279,
        "decorators": [],
        "name": "server",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
