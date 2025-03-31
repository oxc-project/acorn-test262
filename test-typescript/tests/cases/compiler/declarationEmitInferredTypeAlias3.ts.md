__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 99,
  "body": [
    {
      "type": "BlockStatement",
      "start": 24,
      "end": 87,
      "body": [
        {
          "type": "TSTypeAliasDeclaration",
          "start": 30,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "name": "Data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeParameters": null,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 42,
            "end": 58,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              },
              {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
              }
            ]
          },
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 64,
          "end": 85,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 68,
              "end": 84,
              "id": {
                "type": "Identifier",
                "start": 68,
                "end": 77,
                "name": "obj",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 77,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 77,
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
                "start": 80,
                "end": 84,
                "value": true,
                "raw": "true"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 98,
      "declaration": null,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 8,
            "end": 17,
            "left": {
              "type": "Literal",
              "start": 8,
              "end": 12,
              "value": "hi",
              "raw": "\"hi\""
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 16,
              "end": 17,
              "value": 5,
              "raw": "5"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 19,
      "end": 36,
      "declaration": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
