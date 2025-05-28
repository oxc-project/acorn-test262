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
                  "decorators": [],
                  "name": "foo",
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
                  "start": 51,
                  "end": 53,
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
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "bar",
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
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 96,
                      "end": 97,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 101,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
