__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 151,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 151,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 149,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 149,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 50,
                  "end": 75,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 60,
                    "decorators": [],
                    "name": "duplicate1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 60,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 62,
                      "end": 74,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 65,
                        "end": 74,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 68,
                          "end": 74
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 84,
                  "end": 109,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 94,
                    "decorators": [],
                    "name": "duplicate2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 94,
                    "end": 108,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 96,
                      "end": 108,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 99,
                        "end": 108,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 102,
                          "end": 108
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 118,
                  "end": 143,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 128,
                    "decorators": [],
                    "name": "duplicate3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 130,
                      "end": 142,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 133,
                        "end": 142,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 136,
                          "end": 142
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 39,
              "decorators": [],
              "name": "TopLevel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 152,
      "end": 161,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 167,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 17,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 16,
        "raw": "\"./file1\"",
        "value": "./file1"
      },
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 18,
      "end": 157,
      "body": {
        "type": "TSModuleBlock",
        "start": 33,
        "end": 157,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 39,
            "end": 155,
            "body": {
              "type": "TSInterfaceBody",
              "start": 58,
              "end": 155,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 68,
                  "end": 89,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 78,
                    "decorators": [],
                    "name": "duplicate1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
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
                  "end": 119,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 108,
                    "decorators": [],
                    "name": "duplicate2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 110,
                    "end": 118,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 112,
                      "end": 118
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 128,
                  "end": 149,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 138,
                    "decorators": [],
                    "name": "duplicate3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 148,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 142,
                      "end": 148
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
              "start": 49,
              "end": 57,
              "decorators": [],
              "name": "TopLevel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 32,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 158,
      "end": 167,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
