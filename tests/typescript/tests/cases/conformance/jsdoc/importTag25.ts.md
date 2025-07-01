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
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 23
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 25,
                  "end": 31
                },
                "start": 23,
                "end": 31
              },
              "accessibility": null,
              "static": false,
              "start": 22,
              "end": 32
            }
          ],
          "start": 16,
          "end": 34
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 73
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 110
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 113,
                    "end": 115
                  },
                  "definite": false,
                  "start": 105,
                  "end": 115
                }
              ],
              "declare": false,
              "start": 99,
              "end": 116
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "types",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 130
              },
              "start": 118,
              "end": 131
            }
          ],
          "start": 76,
          "end": 133
        },
        "expression": false,
        "start": 57,
        "end": 133
      },
      "exportKind": "value",
      "start": 42,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 133
}
```
