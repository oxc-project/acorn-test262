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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 36,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 16,
          "decorators": [],
          "name": "Data",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 58,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 57,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 50,
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 53,
            "end": 57,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
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
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
