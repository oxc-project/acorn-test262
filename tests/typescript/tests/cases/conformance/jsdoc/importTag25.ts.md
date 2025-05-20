__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 35,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 16,
          "end": 34,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 22,
              "end": 32,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 25,
                  "end": 31
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "start": 42,
  "end": 133,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 42,
      "end": 133,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 57,
        "end": 133,
        "async": true,
        "body": {
          "type": "BlockStatement",
          "start": 76,
          "end": 133,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 99,
              "end": 116,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 105,
                  "end": 115,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 110,
                    "decorators": [],
                    "name": "types",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "start": 113,
                    "end": 115,
                    "elements": []
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ReturnStatement",
              "start": 118,
              "end": 131,
              "argument": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "decorators": [],
                "name": "types",
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
          "start": 72,
          "end": 73,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
