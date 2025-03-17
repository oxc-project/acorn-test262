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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 44,
            "name": "require",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 44,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 21,
                "end": 44,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 22,
                    "end": 36,
                    "argument": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 29,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
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
                    },
                    "value": null
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "fs",
        "raw": "\"fs\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 98,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 96,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 33,
              "end": 96,
              "id": {
                "type": "Identifier",
                "start": 42,
                "end": 54,
                "name": "readFileSync",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 55,
                  "end": 67,
                  "name": "path",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 59,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 61,
                      "end": 67
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 69,
                  "end": 86,
                  "name": "encoding",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 80,
                      "end": 86
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 99,
      "end": 247,
      "id": {
        "type": "Literal",
        "start": 114,
        "end": 120,
        "value": "path",
        "raw": "\"path\""
      },
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
              "name": "fs",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 139,
              "end": 152,
              "expression": {
                "type": "Literal",
                "start": 147,
                "end": 151,
                "value": "fs",
                "raw": "\"fs\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 164,
            "end": 220,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 178,
              "name": "path",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 179,
              "end": 220,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 189,
                  "end": 214,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 196,
                    "end": 214,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 202,
                        "end": 213,
                        "id": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 213,
                          "name": "sep",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 205,
                            "end": 213,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 207,
                              "end": 213
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "TSExportAssignment",
            "start": 225,
            "end": 239,
            "expression": {
              "type": "Identifier",
              "start": 234,
              "end": 238,
              "name": "path",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
  "end": 101,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 22,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "_",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 33,
        "end": 47,
        "expression": {
          "type": "Literal",
          "start": 41,
          "end": 46,
          "value": "./a",
          "raw": "\"./a\""
        }
      },
      "importKind": "value"
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "value": "a",
              "raw": "\"a\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
