__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 44,
            "decorators": [],
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 44,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 21,
                "end": 44,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 22,
                    "end": 36,
                    "argument": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 29,
                      "decorators": [],
                      "name": "args",
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 36,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 31,
                        "end": 36,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 31,
                          "end": 34
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 41,
                    "end": 44
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
  "end": 248,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 98,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 98,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 96,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 33,
              "end": 96,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 42,
                "end": 54,
                "decorators": [],
                "name": "readFileSync",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 67,
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 61,
                      "end": 67
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 69,
                  "end": 86,
                  "decorators": [],
                  "name": "encoding",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 80,
                      "end": 86
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 95,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 89,
                  "end": 95
                }
              }
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
        "end": 19,
        "raw": "\"fs\"",
        "value": "fs"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 99,
      "end": 247,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 121,
        "end": 247,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 127,
            "end": 153,
            "id": {
              "type": "Identifier",
              "start": 134,
              "end": 136,
              "decorators": [],
              "name": "fs",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 139,
              "end": 152,
              "expression": {
                "type": "Literal",
                "start": 147,
                "end": 151,
                "raw": "\"fs\"",
                "value": "fs"
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 164,
            "end": 220,
            "body": {
              "type": "TSModuleBlock",
              "start": 179,
              "end": 220,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 189,
                  "end": 214,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 196,
                    "end": 214,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 202,
                        "end": 213,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 213,
                          "decorators": [],
                          "name": "sep",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 205,
                            "end": 213,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 207,
                              "end": 213
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
              "start": 174,
              "end": 178,
              "decorators": [],
              "name": "path",
              "optional": false
            },
            "kind": "namespace"
          },
          {
            "type": "TSExportAssignment",
            "start": 225,
            "end": 239,
            "expression": {
              "type": "Identifier",
              "start": 234,
              "end": 238,
              "decorators": [],
              "name": "path",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 114,
        "end": 120,
        "raw": "\"path\"",
        "value": "path"
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
  "end": 101,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 22,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "_",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 33,
        "end": 47,
        "expression": {
          "type": "Literal",
          "start": 41,
          "end": 46,
          "raw": "\"./a\"",
          "value": "./a"
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 68,
      "end": 80,
      "expression": {
        "type": "ObjectExpression",
        "start": 77,
        "end": 79,
        "properties": []
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 90,
      "end": 100,
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
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
