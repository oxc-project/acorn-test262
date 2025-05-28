__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 17,
        "properties": []
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 38,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 38,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 0,
              "raw": "0"
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
      "start": 39,
      "end": 58,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 58,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 56,
              "end": 57,
              "value": 1,
              "raw": "1"
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
      "start": 59,
      "end": 80,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 66,
        "end": 80,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 78,
          "end": 80,
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
  "end": 34,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 15,
          "end": 16,
          "imported": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 18,
          "end": 19,
          "imported": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 32,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
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
  "end": 26,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
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
  "end": 13,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "ObjectExpression",
        "start": 9,
        "end": 11,
        "properties": []
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
  "end": 59,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "value": "./d",
          "raw": "\"./d\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 27,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 36,
        "decorators": [],
        "name": "DD",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 39,
        "end": 53,
        "expression": {
          "type": "Literal",
          "start": 47,
          "end": 52,
          "value": "./d",
          "raw": "\"./d\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 58,
      "expression": {
        "type": "Identifier",
        "start": 55,
        "end": 57,
        "decorators": [],
        "name": "DD",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
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
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 12,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 53,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 35,
          "end": 36,
          "imported": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 38,
          "end": 39,
          "imported": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 47,
        "end": 52,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 56,
      "expression": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
