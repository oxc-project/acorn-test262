__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 28,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 27,
        "value": "./eventList",
        "raw": "'./eventList'"
      },
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
  "end": 113,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "EventList",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "EventList",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 39,
        "value": "./eventList",
        "raw": "\"./eventList\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 80,
            "name": "p012",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 80,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 62,
                "end": 80,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 62,
                    "end": 66,
                    "literal": {
                      "type": "Literal",
                      "start": 62,
                      "end": 66,
                      "value": "p0",
                      "raw": "\"p0\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 69,
                    "end": 73,
                    "literal": {
                      "type": "Literal",
                      "start": 69,
                      "end": 73,
                      "value": "p1",
                      "raw": "\"p1\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 76,
                    "end": 80,
                    "literal": {
                      "type": "Literal",
                      "start": 76,
                      "end": 80,
                      "value": "p2",
                      "raw": "\"p2\""
                    }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 105,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 90,
                "end": 105,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 105,
                    "name": "EventList",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "name": "p012",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
  "end": 43,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 42,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "name": "EventList",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 27,
          "end": 42,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 33,
              "end": 40,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 33,
                "end": 35,
                "name": "p0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "start": 37,
                  "end": 39,
                  "elementTypes": []
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 88,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "./index",
        "raw": "'./index'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 75,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 31,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "name": "EventList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 51,
              "end": 73,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 67,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 63,
                    "name": "p1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 65,
                      "end": 67,
                      "elementTypes": []
                    }
                  },
                  "accessibility": null,
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
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 86,
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
  "end": 87,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "./index",
        "raw": "'./index'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 75,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 31,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "name": "EventList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 51,
              "end": 73,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 67,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 63,
                    "name": "p2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 63,
                    "end": 67,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 65,
                      "end": 67,
                      "elementTypes": []
                    }
                  },
                  "accessibility": null,
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
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 86,
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
