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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 37,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 35,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 22,
              "end": 35,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 26,
                  "end": 34,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 30,
                    "end": 34,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 42,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 38,
        "end": 41,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
