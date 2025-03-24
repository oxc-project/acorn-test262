__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 173,
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
      "end": 173,
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
        "end": 173,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 86,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 97,
              "end": 100,
              "left": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 106,
            "end": 135,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 113,
              "end": 135,
              "id": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
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
                "start": 128,
                "end": 135,
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
            "start": 140,
            "end": 148,
            "expression": {
              "type": "CallExpression",
              "start": 140,
              "end": 147,
              "callee": {
                "type": "MemberExpression",
                "start": 140,
                "end": 145,
                "object": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 145,
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
