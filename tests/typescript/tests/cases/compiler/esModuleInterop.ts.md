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
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 24,
          "decorators": [],
          "name": "sayHello",
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
          "start": 26,
          "end": 34,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 28,
            "end": 34
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
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 27,
            "decorators": [],
            "name": "anything",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 29,
      "end": 47,
      "expression": {
        "type": "Identifier",
        "start": 38,
        "end": 46,
        "decorators": [],
        "name": "anything",
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
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 27,
            "decorators": [],
            "name": "anything",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 29,
      "end": 47,
      "expression": {
        "type": "Identifier",
        "start": 38,
        "end": 46,
        "decorators": [],
        "name": "anything",
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
  "end": 114,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "sayHello",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "sayHello",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 35,
        "value": "./hybrid",
        "raw": "\"./hybrid\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 37,
      "end": 63,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 44,
          "end": 48,
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 62,
        "value": "./path",
        "raw": "\"./path\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 91,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 71,
          "end": 78,
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 84,
        "end": 90,
        "value": "./fs",
        "raw": "\"./fs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 98,
      "expression": {
        "type": "Identifier",
        "start": 93,
        "end": 97,
        "decorators": [],
        "name": "path",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 110,
      "expression": {
        "type": "CallExpression",
        "start": 99,
        "end": 109,
        "callee": {
          "type": "Identifier",
          "start": 99,
          "end": 107,
          "decorators": [],
          "name": "sayHello",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 114,
      "expression": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "decorators": [],
        "name": "fs",
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
