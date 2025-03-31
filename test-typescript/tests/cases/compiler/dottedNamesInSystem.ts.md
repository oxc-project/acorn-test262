__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 55,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 55,
        "id": {
          "type": "TSQualifiedName",
          "start": 17,
          "end": 22,
          "left": {
            "type": "TSQualifiedName",
            "start": 17,
            "end": 20,
            "left": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 23,
          "end": 55,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 29,
              "end": 53,
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 36,
                "end": 53,
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "name": "foo",
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
                  "start": 51,
                  "end": 53,
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
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 106,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 64,
        "end": 106,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "name": "bar",
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
          "start": 79,
          "end": 106,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 85,
              "end": 104,
              "argument": {
                "type": "CallExpression",
                "start": 92,
                "end": 103,
                "callee": {
                  "type": "MemberExpression",
                  "start": 92,
                  "end": 101,
                  "object": {
                    "type": "MemberExpression",
                    "start": 92,
                    "end": 97,
                    "object": {
                      "type": "MemberExpression",
                      "start": 92,
                      "end": 95,
                      "object": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 101,
                    "name": "foo",
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
              }
            }
          ]
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
