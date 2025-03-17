__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 193,
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
      "end": 193,
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 193,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 86,
            "end": 101,
            "body": {
              "type": "TSInterfaceBody",
              "start": 98,
              "end": 101,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 106,
            "end": 121,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 117,
              "end": 120,
              "left": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 126,
            "end": 155,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 133,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 155,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 142,
                "end": 145,
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
            "start": 160,
            "end": 168,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 160,
              "end": 167,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 160,
                "end": 165,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 165,
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
