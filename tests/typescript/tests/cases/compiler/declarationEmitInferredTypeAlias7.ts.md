__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Data",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 16
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
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
          ],
          "start": 19,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 50
                },
                "typeArguments": null,
                "start": 46,
                "end": 50
              },
              "start": 44,
              "end": 50
            },
            "start": 41,
            "end": 50
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 53,
            "end": 57
          },
          "definite": false,
          "start": 41,
          "end": 57
        }
      ],
      "declare": false,
      "start": 37,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "str",
              "raw": "\"str\"",
              "start": 8,
              "end": 13
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 17,
              "end": 21
            },
            "start": 8,
            "end": 21
          },
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 33
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 33
          },
          "exportKind": "value",
          "start": 32,
          "end": 33
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 23,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
