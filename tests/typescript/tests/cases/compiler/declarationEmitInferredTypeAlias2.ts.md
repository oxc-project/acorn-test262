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
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 56,
      "async": false,
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
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 74,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 66,
          "end": 67,
          "exported": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 69,
          "end": 72,
          "exported": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "bar",
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
