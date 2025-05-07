__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 44,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 27,
            "end": 42,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
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
  "start": 267,
  "end": 527,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 267,
      "end": 366,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 325,
        "end": 366,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 331,
            "end": 349,
            "argument": {
              "type": "BinaryExpression",
              "start": 338,
              "end": 349,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 338,
                "end": 345,
                "decorators": [],
                "name": "integer",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 348,
                "end": 349,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 315,
        "decorators": [],
        "name": "computeCommonSourceDirectoryOfFilenames",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 316,
          "end": 323,
          "decorators": [],
          "name": "integer",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 411,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 404,
            "decorators": [],
            "name": "see3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 407,
            "end": 411,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
