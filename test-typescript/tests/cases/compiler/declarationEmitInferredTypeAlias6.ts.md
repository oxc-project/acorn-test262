0.ts
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
            "optional": false
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
          }
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 77,
                      "decorators": [],
                      "name": "Data",
                      "optional": false
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
  "sourceType": "module"
}
```
1.ts
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
            "optional": false
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
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "v",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
