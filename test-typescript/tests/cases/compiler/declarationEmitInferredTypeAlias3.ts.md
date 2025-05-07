__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 63,
      "body": [
        {
          "type": "TSTypeAliasDeclaration",
          "start": 6,
          "end": 35,
          "declare": false,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 15,
            "decorators": [],
            "name": "Data",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 18,
            "end": 34,
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
            ]
          },
          "typeParameters": null
        },
        {
          "type": "VariableDeclaration",
          "start": 40,
          "end": 61,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 44,
              "end": 60,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 44,
                "end": 53,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 49,
                    "end": 53,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 53,
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
                "start": 56,
                "end": 60,
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
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 64,
      "end": 74,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 8,
            "end": 17,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 8,
              "end": 12,
              "raw": "\"hi\"",
              "value": "hi",
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "Literal",
              "start": 16,
              "end": 17,
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 19,
      "end": 36,
      "declaration": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
