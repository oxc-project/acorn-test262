__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 424,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 82,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 31,
        "end": 82,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 56,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 44,
              "end": 56,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 49,
                "end": 52,
                "decorators": [],
                "name": "typ",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 55,
                "end": 56,
                "literal": {
                  "type": "Literal",
                  "start": 55,
                  "end": 56,
                  "raw": "1",
                  "value": 1
                }
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 61,
            "end": 80,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 68,
              "end": 80,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 72,
                  "end": 80,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 80,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 75,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 77,
                        "end": 80,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 80,
                          "decorators": [],
                          "name": "typ",
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
              "kind": "var"
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
        "start": 15,
        "end": 30,
        "raw": "\"ambientModule\"",
        "value": "ambientModule"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 83,
      "end": 127,
      "body": {
        "type": "TSModuleBlock",
        "start": 105,
        "end": 127,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 107,
            "end": 125,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 114,
              "end": 125,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 118,
                  "end": 125,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 121,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 124,
                    "end": 125,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 104,
        "decorators": [],
        "name": "valueModule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 128,
      "end": 177,
      "body": {
        "type": "TSModuleBlock",
        "start": 154,
        "end": 177,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 156,
            "end": 175,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 163,
              "end": 175,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 168,
                "end": 171,
                "decorators": [],
                "name": "typ",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 174,
                "end": 175,
                "literal": {
                  "type": "Literal",
                  "start": 174,
                  "end": 175,
                  "raw": "1",
                  "value": 1
                }
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 153,
        "decorators": [],
        "name": "namespaceModule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 194,
      "end": 252,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 209,
        "decorators": [],
        "name": "GlobalBad1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 212,
        "end": 252,
        "indexType": {
          "type": "TSLiteralType",
          "start": 232,
          "end": 251,
          "literal": {
            "type": "Literal",
            "start": 232,
            "end": 251,
            "raw": "\"\\\"ambientModule\\\"\"",
            "value": "\"ambientModule\""
          }
        },
        "objectType": {
          "type": "TSTypeQuery",
          "start": 213,
          "end": 230,
          "exprName": {
            "type": "Identifier",
            "start": 220,
            "end": 230,
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 253,
      "end": 304,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 267,
        "decorators": [],
        "name": "GlobalOk1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 270,
        "end": 304,
        "indexType": {
          "type": "TSLiteralType",
          "start": 290,
          "end": 303,
          "literal": {
            "type": "Literal",
            "start": 290,
            "end": 303,
            "raw": "\"valueModule\"",
            "value": "valueModule"
          }
        },
        "objectType": {
          "type": "TSTypeQuery",
          "start": 271,
          "end": 288,
          "exprName": {
            "type": "Identifier",
            "start": 278,
            "end": 288,
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 305,
      "end": 352,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 319,
        "decorators": [],
        "name": "GlobalOk2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 322,
        "end": 352,
        "typeArguments": null,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 322,
          "end": 352,
          "left": {
            "type": "TSQualifiedName",
            "start": 322,
            "end": 348,
            "left": {
              "type": "Identifier",
              "start": 322,
              "end": 332,
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 333,
              "end": 348,
              "decorators": [],
              "name": "namespaceModule",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 349,
            "end": 352,
            "decorators": [],
            "name": "typ",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 423,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 423,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 405,
            "decorators": [],
            "name": "bad1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 363,
              "end": 405,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 365,
                "end": 405,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 385,
                  "end": 404,
                  "literal": {
                    "type": "Literal",
                    "start": 385,
                    "end": 404,
                    "raw": "\"\\\"ambientModule\\\"\"",
                    "value": "\"ambientModule\""
                  }
                },
                "objectType": {
                  "type": "TSTypeQuery",
                  "start": 366,
                  "end": 383,
                  "exprName": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 383,
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 408,
            "end": 423,
            "raw": "'ambientModule'",
            "value": "ambientModule"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
