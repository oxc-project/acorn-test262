__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 17,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "D",
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
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
  "end": 42,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 37,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 35,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 35,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 34,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 34,
                    "value": "hi",
                    "raw": "\"hi\""
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 42,
      "expression": {
        "type": "MemberExpression",
        "start": 38,
        "end": 41,
        "object": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
