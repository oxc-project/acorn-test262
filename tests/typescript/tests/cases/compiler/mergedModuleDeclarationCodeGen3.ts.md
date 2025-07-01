__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "my",
          "optional": false,
          "typeAnnotation": null,
          "start": 7,
          "end": 9
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 14
        },
        "start": 7,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "buz",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 40
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 43,
                "end": 46
              },
              "expression": false,
              "start": 28,
              "end": 46
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 46
          }
        ],
        "start": 15,
        "end": 48
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 58
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 63
          },
          "start": 56,
          "end": 63
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 67
        },
        "start": 56,
        "end": 67
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 87
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 90
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 95
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "buz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 110
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 107,
                    "end": 112
                  },
                  "directive": null,
                  "start": 107,
                  "end": 113
                }
              ],
              "start": 97,
              "end": 119
            },
            "expression": false,
            "start": 74,
            "end": 119
          }
        ],
        "start": 68,
        "end": 121
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 49,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
