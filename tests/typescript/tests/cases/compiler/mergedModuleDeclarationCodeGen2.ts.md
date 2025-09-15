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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 21
        },
        "start": 10,
        "end": 21
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
                "start": 44,
                "end": 47
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
                "start": 50,
                "end": 53
              },
              "expression": false,
              "start": 35,
              "end": 53
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 28,
            "end": 53
          }
        ],
        "start": 22,
        "end": 55
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 55
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
          "start": 66,
          "end": 68
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 73
        },
        "start": 66,
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
                        "start": 108,
                        "end": 111
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "buz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 115
                      },
                      "optional": false,
                      "computed": false,
                      "start": 108,
                      "end": 115
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 108,
                    "end": 117
                  },
                  "directive": null,
                  "start": 108,
                  "end": 118
                }
              ],
              "start": 98,
              "end": 124
            },
            "expression": false,
            "start": 80,
            "end": 124
          }
        ],
        "start": 74,
        "end": 126
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 56,
      "end": 126
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 126
}
```
