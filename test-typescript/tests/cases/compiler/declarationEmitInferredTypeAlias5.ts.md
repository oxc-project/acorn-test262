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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 31,
        "end": 60,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 40,
          "decorators": [],
          "name": "Data",
          "optional": false,
          "typeAnnotation": null
        },
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
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 74,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 74,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 77,
            "end": 81,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./0\"",
        "value": "./0"
      },
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
            "name": "Z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 51,
            "end": 64,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 51,
              "end": 56,
              "raw": "\"str\"",
              "value": "str"
            },
            "right": {
              "type": "Literal",
              "start": 60,
              "end": 64,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 78,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 75,
          "end": 76,
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "v",
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
