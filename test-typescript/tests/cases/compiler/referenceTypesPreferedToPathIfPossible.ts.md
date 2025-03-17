__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 83,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 83,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 46,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 44,
                "end": 46,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 43,
                "decorators": [],
                "name": "Url",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 80,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 58,
              "end": 80,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 72,
                "decorators": [],
                "name": "parse",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 74,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 76,
                  "end": 79,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "Url",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
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
        "end": 20,
        "raw": "\"url\"",
        "value": "url"
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
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "raw": "\"url\"",
        "value": "url"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 63,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 50,
              "end": 63,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 56,
                "end": 63,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 61,
                  "decorators": [],
                  "name": "parse",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
