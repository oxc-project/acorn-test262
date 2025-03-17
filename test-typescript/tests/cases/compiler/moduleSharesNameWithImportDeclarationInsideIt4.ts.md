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
      "end": 193,
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
        "end": 193,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 86,
            "end": 101,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 98,
              "end": 101,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 106,
            "end": 121,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 117,
              "end": 120,
              "left": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "Z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
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
            "start": 126,
            "end": 155,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 133,
              "end": 155,
              "id": {
                "type": "Identifier",
                "start": 142,
                "end": 145,
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
                "start": 148,
                "end": 155,
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
            "start": 160,
            "end": 168,
            "expression": {
              "type": "CallExpression",
              "start": 160,
              "end": 167,
              "callee": {
                "type": "MemberExpression",
                "start": 160,
                "end": 165,
                "object": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 165,
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
