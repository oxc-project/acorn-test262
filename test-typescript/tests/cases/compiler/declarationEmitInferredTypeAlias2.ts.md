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
  "end": 74,
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
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 56,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 45,
            "end": 54,
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 74,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 66,
          "end": 67,
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 69,
          "end": 72,
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "name": "bar",
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
