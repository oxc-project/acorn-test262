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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 15,
          "end": 18
        },
        "start": 7,
        "end": 18
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
                "start": 41,
                "end": 44
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
                "start": 47,
                "end": 50
              },
              "expression": false,
              "start": 32,
              "end": 50
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 50
          }
        ],
        "start": 19,
        "end": 52
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 52
    },
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
          "start": 60,
          "end": 62
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 67
        },
        "start": 60,
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 105
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "buz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 109
                      },
                      "optional": false,
                      "computed": false,
                      "start": 102,
                      "end": 109
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 102,
                    "end": 111
                  },
                  "directive": null,
                  "start": 102,
                  "end": 112
                }
              ],
              "start": 92,
              "end": 118
            },
            "expression": false,
            "start": 74,
            "end": 118
          }
        ],
        "start": 68,
        "end": 120
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 53,
      "end": 120
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
