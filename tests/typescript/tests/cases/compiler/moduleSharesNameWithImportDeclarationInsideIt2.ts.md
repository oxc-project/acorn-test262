__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 10,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 8,
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 9,
          "end": 10,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 67,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 65,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 24,
              "end": 65,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 36,
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
                "start": 39,
                "end": 65,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 59,
                    "argument": {
                      "type": "Literal",
                      "start": 56,
                      "end": 58,
                      "value": "",
                      "raw": "\"\""
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 179,
      "id": {
        "type": "TSQualifiedName",
        "start": 75,
        "end": 78,
        "left": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 79,
        "end": 179,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 85,
            "end": 107,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 92,
              "end": 107,
              "id": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 103,
                "end": 106,
                "left": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 112,
            "end": 141,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 119,
              "end": 141,
              "id": {
                "type": "Identifier",
                "start": 128,
                "end": 131,
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
                "start": 134,
                "end": 141,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExpressionStatement",
            "start": 146,
            "end": 154,
            "expression": {
              "type": "CallExpression",
              "start": 146,
              "end": 153,
              "callee": {
                "type": "MemberExpression",
                "start": 146,
                "end": 151,
                "object": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 151,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
