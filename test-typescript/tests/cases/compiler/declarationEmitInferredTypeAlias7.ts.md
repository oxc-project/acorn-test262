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
              "value": "str"
            },
            "right": {
              "type": "Literal",
              "start": 17,
              "end": 21,
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
