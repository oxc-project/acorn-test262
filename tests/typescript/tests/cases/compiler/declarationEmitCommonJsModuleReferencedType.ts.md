__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 31,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 28,
          "decorators": [],
          "name": "NestedProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 29,
          "end": 31,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 32,
          "decorators": [],
          "name": "OtherIndexProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 33,
          "end": 35,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 30,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "decorators": [],
          "name": "OtherProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 28,
          "end": 30,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
  "end": 233,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "OtherProps",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 19,
            "decorators": [],
            "name": "OtherProps",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 36,
        "value": "./other",
        "raw": "\"./other\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 38,
      "end": 86,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 62,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 62,
            "decorators": [],
            "name": "OtherIndexProps",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 62,
            "decorators": [],
            "name": "OtherIndexProps",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 70,
        "end": 85,
        "value": "./other/index",
        "raw": "\"./other/index\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 124,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 96,
          "end": 107,
          "imported": {
            "type": "Identifier",
            "start": 96,
            "end": 107,
            "decorators": [],
            "name": "NestedProps",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 96,
            "end": 107,
            "decorators": [],
            "name": "NestedProps",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 115,
        "end": 123,
        "value": "nested",
        "raw": "\"nested\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 125,
      "end": 154,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 132,
        "end": 154,
        "id": {
          "type": "Identifier",
          "start": 142,
          "end": 151,
          "decorators": [],
          "name": "SomeProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 152,
          "end": 154,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 156,
      "end": 233,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 163,
        "end": 233,
        "id": {
          "type": "Identifier",
          "start": 172,
          "end": 175,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 177,
          "end": 232,
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 179,
            "end": 232,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 180,
                "end": 189,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 189,
                  "decorators": [],
                  "name": "SomeProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 191,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 201,
                  "decorators": [],
                  "name": "OtherProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 203,
                "end": 218,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 218,
                  "decorators": [],
                  "name": "OtherIndexProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 220,
                "end": 231,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 231,
                  "decorators": [],
                  "name": "NestedProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 64,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 29,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "decorators": [],
          "name": "RootProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 27,
          "end": 29,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 64,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 38,
        "end": 64,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 52,
          "end": 63,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 54,
            "end": 63,
            "typeName": {
              "type": "Identifier",
              "start": 54,
              "end": 63,
              "decorators": [],
              "name": "RootProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 102,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "foo",
        "raw": "\"foo\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 27,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 36,
          "end": 39,
          "imported": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 47,
        "end": 53,
        "value": "root",
        "raw": "\"root\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 78,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 62,
        "end": 78,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 72,
              "end": 77,
              "callee": {
                "type": "Identifier",
                "start": 72,
                "end": 75,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 79,
      "end": 102,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 86,
        "end": 102,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 92,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 96,
              "end": 101,
              "callee": {
                "type": "Identifier",
                "start": 96,
                "end": 99,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
