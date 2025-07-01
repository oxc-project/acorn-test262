__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 36,
              "end": 42
            },
            "declare": false,
            "start": 27,
            "end": 42
          }
        ],
        "start": 21,
        "end": 44
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "computeCommonSourceDirectoryOfFilenames",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 315
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "integer",
          "optional": false,
          "typeAnnotation": null,
          "start": 316,
          "end": 323
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "integer",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 345
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 348,
                "end": 349
              },
              "start": 338,
              "end": 349
            },
            "start": 331,
            "end": 349
          }
        ],
        "start": 325,
        "end": 366
      },
      "expression": false,
      "start": 267,
      "end": 366
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "see3",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 404
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 407,
            "end": 411
          },
          "definite": false,
          "start": 400,
          "end": 411
        }
      ],
      "declare": false,
      "start": 396,
      "end": 411
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 267,
  "end": 527
}
```
