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
          "start": 10,
          "end": 12
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 17
        },
        "start": 10,
        "end": 17
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
                "start": 40,
                "end": 43
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
                "start": 46,
                "end": 49
              },
              "expression": false,
              "start": 31,
              "end": 49
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 49
          }
        ],
        "start": 18,
        "end": 51
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 51
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
            "start": 62,
            "end": 64
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "start": 62,
          "end": 69
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 73
        },
        "start": 62,
        "end": 73
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
              "start": 89,
              "end": 93
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
                "start": 94,
                "end": 96
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 101
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
                      "start": 113,
                      "end": 116
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 113,
                    "end": 118
                  },
                  "directive": null,
                  "start": 113,
                  "end": 119
                }
              ],
              "start": 103,
              "end": 125
            },
            "expression": false,
            "start": 80,
            "end": 125
          }
        ],
        "start": 74,
        "end": 127
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 52,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 127
}
```
