multipleExportAssignments.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 305,
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
        "name": "connectModule",
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
                          "name": "connectModule",
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
                      "name": "connectExport",
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
        "name": "connectExport",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 260,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 260,
            "decorators": [],
            "name": "server",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 260,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 180,
                "end": 260,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 186,
                    "end": 204,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 190,
                        "end": 203,
                        "typeName": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 203,
                          "decorators": [],
                          "name": "connectExport",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 209,
                    "end": 230,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 214,
                      "decorators": [],
                      "name": "test1",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 214,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 216,
                        "end": 229,
                        "typeName": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 229,
                          "decorators": [],
                          "name": "connectModule",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 235,
                    "end": 258,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 240,
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
                      "start": 242,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 244,
                        "end": 257,
                        "typeName": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 257,
                          "decorators": [],
                          "name": "connectModule",
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
      "start": 262,
      "end": 278,
      "expression": {
        "type": "Identifier",
        "start": 271,
        "end": 277,
        "decorators": [],
        "name": "server",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 279,
      "end": 302,
      "expression": {
        "type": "Identifier",
        "start": 288,
        "end": 301,
        "decorators": [],
        "name": "connectExport",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
