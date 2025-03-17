__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 32,
            "end": 35,
            "raw": "100",
            "value": 100
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 66,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 47,
          "end": 59,
          "exported": {
            "type": "Identifier",
            "start": 53,
            "end": 59,
            "decorators": [],
            "name": "return",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 61,
          "end": 63,
          "exported": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 62,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "raw": "\"./t1\"",
        "value": "./t1"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 36,
            "end": 41,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 36,
              "end": 38,
              "decorators": [],
              "name": "as",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "decorators": [],
              "name": "as",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 51,
            "end": 60,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 51,
              "end": 53,
              "decorators": [],
              "name": "as",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 60,
              "decorators": [],
              "name": "return",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
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
  "end": 33,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 31,
        "raw": "\"./t1\"",
        "value": "./t1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 17,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 25,
        "raw": "\"./t1\"",
        "value": "./t1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
