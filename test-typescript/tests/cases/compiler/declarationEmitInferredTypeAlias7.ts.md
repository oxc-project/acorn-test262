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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 8,
            "end": 21,
            "left": {
              "type": "Literal",
              "start": 8,
              "end": 13,
              "value": "str",
              "raw": "\"str\""
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 17,
              "end": 21,
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
      "start": 23,
      "end": 35,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 32,
          "end": 33,
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
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
