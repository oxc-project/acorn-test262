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
          "declare": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "Data",
            "optional": false,
            "typeAnnotation": null
          },
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
          "typeParameters": null
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
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 68,
                "end": 77,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 77,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 73,
                    "end": 77,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 77,
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
                "start": 80,
                "end": 84,
                "raw": "true",
                "value": true
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
      "start": 88,
      "end": 98,
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
              "value": "hi"
            },
            "right": {
              "type": "Literal",
              "start": 16,
              "end": 17,
              "raw": "5",
              "value": 5
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
