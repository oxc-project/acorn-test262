__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 45,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 89,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 59,
            "end": 89,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 61,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 63,
                "end": 64,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 67,
                "end": 89,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 68,
                    "end": 78,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 71,
                        "end": 77
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 79,
                    "end": 88,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 80,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 80,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 82,
                        "end": 88
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
  "end": 160,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 9,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 11,
          "end": 17,
          "exported": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 42,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 28,
          "end": 30,
          "exported": {
            "type": "Identifier",
            "start": 28,
            "end": 30,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 30,
            "decorators": [],
            "name": "x1",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 32,
          "end": 40,
          "exported": {
            "type": "Identifier",
            "start": 38,
            "end": 40,
            "decorators": [],
            "name": "y1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 34,
            "decorators": [],
            "name": "x1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 64,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 52,
          "end": 53,
          "exported": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 55,
          "end": 62,
          "exported": {
            "type": "Identifier",
            "start": 60,
            "end": 62,
            "decorators": [],
            "name": "a1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 65,
      "end": 85,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 73,
          "end": 74,
          "exported": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 76,
          "end": 83,
          "exported": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "decorators": [],
            "name": "b1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 104,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 96,
          "end": 102,
          "exported": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 105,
      "end": 123,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 113,
          "end": 121,
          "exported": {
            "type": "Identifier",
            "start": 119,
            "end": 121,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 113,
            "end": 115,
            "decorators": [],
            "name": "x1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 141,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 132,
          "end": 139,
          "exported": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "a2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 142,
      "end": 159,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 150,
          "end": 157,
          "exported": {
            "type": "Identifier",
            "start": 155,
            "end": 157,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
