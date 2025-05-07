__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 36,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Data",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 19,
          "end": 35,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            },
            {
              "type": "TSBooleanKeyword",
              "start": 28,
              "end": 35
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
      "start": 37,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 57,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 50,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 50,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 50,
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
            "start": 53,
            "end": 57,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
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
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 8,
            "end": 21,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 8,
              "end": 13,
              "raw": "\"str\"",
              "value": "str",
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "Literal",
              "start": 17,
              "end": 21,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 35,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 32,
          "end": 33,
          "exported": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
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
