__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./eventList",
        "raw": "'./eventList'",
        "start": 14,
        "end": 27
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "EventList",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EventList",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./eventList",
        "raw": "\"./eventList\"",
        "start": 26,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p012",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "p0",
                      "raw": "\"p0\"",
                      "start": 62,
                      "end": 66
                    },
                    "start": 62,
                    "end": 66
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "p1",
                      "raw": "\"p1\"",
                      "start": 69,
                      "end": 73
                    },
                    "start": 69,
                    "end": 73
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "p2",
                      "raw": "\"p2\"",
                      "start": 76,
                      "end": 80
                    },
                    "start": 76,
                    "end": 80
                  }
                ],
                "start": 62,
                "end": 80
              },
              "start": 60,
              "end": 80
            },
            "start": 56,
            "end": 80
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 80
        }
      ],
      "declare": true,
      "start": 42,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EventList",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 105
                  },
                  "typeArguments": null,
                  "start": 96,
                  "end": 105
                },
                "start": 90,
                "end": 105
              },
              "start": 88,
              "end": 105
            },
            "start": 87,
            "end": 105
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "p012",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 112
          },
          "definite": false,
          "start": 87,
          "end": 112
        }
      ],
      "declare": false,
      "start": 81,
      "end": 112
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "EventList",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 26
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p0",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 37,
                  "end": 39
                },
                "start": 35,
                "end": 39
              },
              "accessibility": null,
              "static": false,
              "start": 33,
              "end": 40
            }
          ],
          "start": 27,
          "end": 42
        },
        "declare": false,
        "start": 7,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./index",
        "raw": "'./index'",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventList",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 50
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 63
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [],
                      "start": 65,
                      "end": 67
                    },
                    "start": 63,
                    "end": 67
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 67
                }
              ],
              "start": 51,
              "end": 73
            },
            "declare": false,
            "start": 31,
            "end": 73
          }
        ],
        "start": 25,
        "end": 75
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 76,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./index",
        "raw": "'./index'",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventList",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 50
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 63
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [],
                      "start": 65,
                      "end": 67
                    },
                    "start": 63,
                    "end": 67
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 67
                }
              ],
              "start": 51,
              "end": 73
            },
            "declare": false,
            "start": 31,
            "end": 73
          }
        ],
        "start": 25,
        "end": 75
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 76,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
