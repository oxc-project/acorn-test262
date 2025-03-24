__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 83,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 60,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 31,
        "end": 60,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 40,
          "name": "Data",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 43,
          "end": 59,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 43,
              "end": 49
            },
            {
              "type": "TSBooleanKeyword",
              "start": 52,
              "end": 59
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 74,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
                  "name": "Data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 77,
            "end": 81,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "let",
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
  "end": 78,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "Z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./0",
        "raw": "\"./0\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 51,
            "end": 64,
            "left": {
              "type": "Literal",
              "start": 51,
              "end": 56,
              "value": "str",
              "raw": "\"str\""
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 60,
              "end": 64,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 78,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 75,
          "end": 76,
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
