__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 14,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 9,
          "decorators": [],
          "name": "my",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 10,
          "end": 14,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 48,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 46,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 28,
              "end": 46,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 40,
                "decorators": [],
                "name": "buz",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 46,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 121,
      "id": {
        "type": "TSQualifiedName",
        "start": 56,
        "end": 67,
        "left": {
          "type": "TSQualifiedName",
          "start": 56,
          "end": 63,
          "left": {
            "type": "Identifier",
            "start": 56,
            "end": 58,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 59,
            "end": 63,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 64,
          "end": 67,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 121,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 74,
            "end": 119,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 90,
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 92,
                "end": 95,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 97,
              "end": 119,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 107,
                  "end": 113,
                  "expression": {
                    "type": "CallExpression",
                    "start": 107,
                    "end": 112,
                    "callee": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 110,
                      "decorators": [],
                      "name": "buz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
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
