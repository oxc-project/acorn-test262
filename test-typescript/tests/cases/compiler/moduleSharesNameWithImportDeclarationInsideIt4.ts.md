__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 67,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 67,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 65,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 24,
              "end": 65,
              "async": false,
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
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 36,
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
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 192,
      "body": {
        "type": "TSModuleBlock",
        "start": 79,
        "end": 192,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 85,
            "end": 100,
            "body": {
              "type": "TSInterfaceBody",
              "start": 97,
              "end": 100,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 105,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 116,
              "end": 119,
              "left": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 125,
            "end": 154,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 132,
              "end": 154,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 147,
                "end": 154,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 141,
                "end": 144,
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
            "start": 159,
            "end": 167,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 159,
              "end": 166,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 164,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
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
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
