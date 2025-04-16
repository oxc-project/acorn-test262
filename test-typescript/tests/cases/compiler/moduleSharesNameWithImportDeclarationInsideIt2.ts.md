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
      "id": {
        "type": "TSQualifiedName",
        "start": 8,
        "end": 11,
        "left": {
          "type": "Identifier",
          "start": 8,
          "end": 9,
          "name": "Z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 10,
          "end": 11,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 68,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 66,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 25,
              "end": 66,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 37,
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
                      "value": "",
                      "raw": "\"\""
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 69,
      "end": 180,
      "id": {
        "type": "TSQualifiedName",
        "start": 76,
        "end": 79,
        "left": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 180,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 86,
            "end": 108,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 93,
              "end": 108,
              "id": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 104,
                "end": 107,
                "left": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "Z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 113,
            "end": 142,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 120,
              "end": 142,
              "id": {
                "type": "Identifier",
                "start": 129,
                "end": 132,
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
                "start": 135,
                "end": 142,
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
          },
          {
            "type": "ExpressionStatement",
            "start": 147,
            "end": 155,
            "expression": {
              "type": "CallExpression",
              "start": 147,
              "end": 154,
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 152,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 152,
                  "name": "bar",
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
