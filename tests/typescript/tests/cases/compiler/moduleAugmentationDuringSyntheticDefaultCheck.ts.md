__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 40,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 27,
          "end": 40,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 27,
            "end": 40,
            "left": {
              "type": "Identifier",
              "start": 27,
              "end": 33,
              "decorators": [],
              "name": "moment",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 34,
              "end": 40,
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 66,
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 133,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 71,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 87,
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 96,
                "end": 102,
                "expression": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 102,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 103,
              "end": 131,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 109,
                  "end": 127,
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 116,
                    "decorators": [],
                    "name": "valueOf",
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
                    "start": 118,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 120,
                      "end": 126
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 134,
      "end": 150,
      "expression": {
        "type": "Identifier",
        "start": 143,
        "end": 149,
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null
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
  "end": 129,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "moment",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 32,
        "value": "moment",
        "raw": "'moment'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 34,
      "end": 50,
      "expression": {
        "type": "Identifier",
        "start": 43,
        "end": 49,
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 129,
      "id": {
        "type": "Literal",
        "start": 66,
        "end": 74,
        "value": "moment",
        "raw": "\"moment\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 75,
        "end": 129,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 81,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 98,
              "end": 127,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 108,
                  "end": 121,
                  "key": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 110,
                    "decorators": [],
                    "name": "tz",
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
                    "start": 112,
                    "end": 120,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 114,
                      "end": 120
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
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
  "end": 243,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 19,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "decorators": [],
            "name": "_moment",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 33,
        "value": "moment",
        "raw": "\"moment\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 134,
      "id": {
        "type": "Literal",
        "start": 50,
        "end": 58,
        "value": "moment",
        "raw": "\"moment\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 59,
        "end": 134,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 65,
            "end": 132,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 82,
              "end": 132,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 92,
                  "end": 126,
                  "key": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 100,
                    "decorators": [],
                    "name": "strftime",
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
                      "start": 101,
                      "end": 116,
                      "decorators": [],
                      "name": "pattern",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 108,
                        "end": 116,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 110,
                          "end": 116
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 125,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 119,
                      "end": 125
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 135,
      "end": 243,
      "id": {
        "type": "Literal",
        "start": 150,
        "end": 167,
        "value": "moment-timezone",
        "raw": "\"moment-timezone\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 168,
        "end": 243,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 174,
            "end": 241,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 190,
              "decorators": [],
              "name": "Moment",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 191,
              "end": 241,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 201,
                  "end": 235,
                  "key": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 209,
                    "decorators": [],
                    "name": "strftime",
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
                      "start": 210,
                      "end": 225,
                      "decorators": [],
                      "name": "pattern",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 217,
                        "end": 225,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 219,
                          "end": 225
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 226,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 228,
                      "end": 234
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
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
  "start": 32,
  "end": 75,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 32,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 45,
        "decorators": [],
        "name": "moment",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 48,
        "end": 74,
        "expression": {
          "type": "Literal",
          "start": 56,
          "end": 73,
          "value": "moment-timezone",
          "raw": "\"moment-timezone\""
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
