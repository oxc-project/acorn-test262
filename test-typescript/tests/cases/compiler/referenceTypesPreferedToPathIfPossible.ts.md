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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "url",
        "raw": "\"url\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 83,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 46,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 46,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 43,
                "name": "Url",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 44,
                "end": 46,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 80,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 58,
              "end": 80,
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 72,
                "name": "parse",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 74,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 76,
                  "end": 79,
                  "typeName": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "name": "Url",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "parse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "parse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "value": "url",
        "raw": "\"url\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 64,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 50,
              "end": 63,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "CallExpression",
                "start": 56,
                "end": 63,
                "callee": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 61,
                  "name": "parse",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
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
