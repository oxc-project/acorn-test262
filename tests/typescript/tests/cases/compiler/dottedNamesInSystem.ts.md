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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 55,
        "body": {
          "type": "TSModuleBlock",
          "start": 23,
          "end": 55,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 29,
              "end": 53,
              "attributes": [],
              "declaration": {
                "type": "FunctionDeclaration",
                "start": 36,
                "end": 53,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 51,
                  "end": 53,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "foo",
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 64,
        "end": 106,
        "async": false,
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
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 92,
                  "end": 101,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 92,
                    "end": 97,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 92,
                      "end": 95,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 101,
                    "decorators": [],
                    "name": "foo",
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
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "bar",
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
