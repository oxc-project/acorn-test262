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
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 52,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 50,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 32,
              "end": 50,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 50,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 44,
                "decorators": [],
                "name": "buz",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "right": {
          "type": "Identifier",
          "start": 15,
          "end": 18,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 53,
      "end": 120,
      "body": {
        "type": "TSModuleBlock",
        "start": 68,
        "end": 120,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 74,
            "end": 118,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 92,
              "end": 118,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 102,
                  "end": 112,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 102,
                    "end": 111,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 102,
                      "end": 109,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 105,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 109,
                        "decorators": [],
                        "name": "buz",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 87,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 90,
                "decorators": [],
                "name": "my",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 60,
        "end": 67,
        "left": {
          "type": "Identifier",
          "start": 60,
          "end": 62,
          "decorators": [],
          "name": "my",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 63,
          "end": 67,
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
