__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "fn",
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
        "start": 14,
        "end": 34,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 20,
            "end": 32,
            "argument": {
              "type": "MemberExpression",
              "start": 27,
              "end": 31,
              "object": {
                "type": "Identifier",
                "start": 27,
                "end": 29,
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
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
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 44,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 68,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 58,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 62,
                  "end": 67,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 66,
                    "end": 67,
                    "value": 1,
                    "raw": "1"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
