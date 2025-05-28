__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
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
      "end": 172,
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
        "end": 172,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 85,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 96,
              "end": 99,
              "left": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 105,
            "end": 134,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 112,
              "end": 134,
              "id": {
                "type": "Identifier",
                "start": 121,
                "end": 124,
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
                "start": 127,
                "end": 134,
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
            "start": 139,
            "end": 147,
            "expression": {
              "type": "CallExpression",
              "start": 139,
              "end": 146,
              "callee": {
                "type": "MemberExpression",
                "start": 139,
                "end": 144,
                "object": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 144,
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
