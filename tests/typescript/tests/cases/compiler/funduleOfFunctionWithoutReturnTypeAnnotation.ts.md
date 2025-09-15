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
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 29
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
              },
              "optional": false,
              "computed": false,
              "start": 27,
              "end": 31
            },
            "start": 20,
            "end": 32
          }
        ],
        "start": 14,
        "end": 34
      },
      "expression": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 69,
                    "end": 70
                  },
                  "definite": false,
                  "start": 65,
                  "end": 70
                }
              ],
              "declare": false,
              "start": 61,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 54,
            "end": 71
          }
        ],
        "start": 48,
        "end": 73
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 35,
      "end": 73
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
