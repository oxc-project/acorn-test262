__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 180,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 68,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 68,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 66,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 25,
              "end": 66,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 66,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 50,
                    "end": 60,
                    "argument": {
                      "type": "Literal",
                      "start": 57,
                      "end": 59,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 37,
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
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 8,
        "end": 11,
        "left": {
          "type": "Identifier",
          "start": 8,
          "end": 9,
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 10,
          "end": 11,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 69,
      "end": 180,
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 180,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 108,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 93,
              "end": 108,
              "id": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 104,
                "end": 107,
                "left": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 113,
            "end": 142,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 120,
              "end": 142,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 142,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 129,
                "end": 132,
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
          },
          {
            "type": "ExpressionStatement",
            "start": 147,
            "end": 155,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 147,
              "end": 154,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 152,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 152,
                  "decorators": [],
                  "name": "bar",
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
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 76,
        "end": 79,
        "left": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "M",
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
