__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 18,
        "left": {
          "type": "TSQualifiedName",
          "start": 7,
          "end": 14,
          "left": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "name": "my",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 10,
            "end": 14,
            "name": "data",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 15,
          "end": 18,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 52,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 50,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 32,
              "end": 50,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 44,
                "name": "buz",
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
                "start": 47,
                "end": 50,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
      "type": "TSModuleDeclaration",
      "start": 53,
      "end": 120,
      "id": {
        "type": "TSQualifiedName",
        "start": 60,
        "end": 67,
        "left": {
          "type": "Identifier",
          "start": 60,
          "end": 62,
          "name": "my",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 63,
          "end": 67,
          "name": "data",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 120,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 74,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 90,
                "name": "my",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 92,
              "end": 118,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 102,
                  "end": 112,
                  "expression": {
                    "type": "CallExpression",
                    "start": 102,
                    "end": 111,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 102,
                      "end": 109,
                      "object": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 105,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 109,
                        "name": "buz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
