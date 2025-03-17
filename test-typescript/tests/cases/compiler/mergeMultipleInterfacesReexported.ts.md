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
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 27,
        "raw": "'./eventList'",
        "value": "./eventList"
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
  "end": 113,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 39,
        "raw": "\"./eventList\"",
        "value": "./eventList"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "EventList",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "EventList",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 80,
            "decorators": [],
            "name": "p012",
            "optional": false,
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
                      "raw": "\"p0\"",
                      "value": "p0"
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
                      "raw": "\"p1\"",
                      "value": "p1"
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
                      "raw": "\"p2\"",
                      "value": "p2"
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
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 105,
            "decorators": [],
            "name": "t",
            "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 105,
                    "decorators": [],
                    "name": "EventList",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "decorators": [],
            "name": "p012",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 42,
        "body": {
          "type": "TSInterfaceBody",
          "start": 27,
          "end": 42,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 33,
              "end": 40,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 33,
                "end": 35,
                "decorators": [],
                "name": "p0",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "decorators": [],
          "name": "EventList",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 88,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 75,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 31,
            "end": 73,
            "body": {
              "type": "TSInterfaceBody",
              "start": 51,
              "end": 73,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 67,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 63,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "decorators": [],
              "name": "EventList",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "'./index'",
        "value": "./index"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 86,
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
  "end": 87,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 75,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 31,
            "end": 73,
            "body": {
              "type": "TSInterfaceBody",
              "start": 51,
              "end": 73,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 61,
                  "end": 67,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 63,
                    "decorators": [],
                    "name": "p2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "decorators": [],
              "name": "EventList",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "raw": "'./index'",
        "value": "./index"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 86,
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
