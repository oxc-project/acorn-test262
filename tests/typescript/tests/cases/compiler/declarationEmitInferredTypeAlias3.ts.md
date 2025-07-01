__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSTypeAliasDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Data",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 15
          },
          "typeParameters": null,
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              },
              {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              }
            ],
            "start": 18,
            "end": 34
          },
          "declare": false,
          "start": 6,
          "end": 35
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
                      "start": 49,
                      "end": 53
                    },
                    "typeArguments": null,
                    "start": 49,
                    "end": 53
                  },
                  "start": 47,
                  "end": 53
                },
                "start": 44,
                "end": 53
              },
              "init": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 56,
                "end": 60
              },
              "definite": false,
              "start": 44,
              "end": 60
            }
          ],
          "declare": false,
          "start": 40,
          "end": 61
        }
      ],
      "start": 0,
      "end": 63
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 64,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "hi",
              "raw": "\"hi\"",
              "start": 8,
              "end": 12
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 16,
              "end": 17
            },
            "start": 8,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "exportKind": "value",
      "start": 19,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
