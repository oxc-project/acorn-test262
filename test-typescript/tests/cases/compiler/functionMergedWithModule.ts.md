functionMergedWithModule.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 47,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 47,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 34,
            "end": 45,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 38,
                "end": 44,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 42,
                  "end": 44,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 26,
          "decorators": [],
          "name": "title",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 26,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            }
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 99,
      "body": {
        "type": "TSModuleBlock",
        "start": 64,
        "end": 99,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 70,
            "end": 97,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 77,
              "end": 97,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 97,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "params": []
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
        "start": 56,
        "end": 63,
        "left": {
          "type": "Identifier",
          "start": 56,
          "end": 59,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 60,
          "end": 63,
          "decorators": [],
          "name": "Bar",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 101,
      "end": 168,
      "body": {
        "type": "TSModuleBlock",
        "start": 116,
        "end": 168,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 122,
            "end": 166,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 129,
              "end": 166,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 166,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 152,
                    "end": 160,
                    "expression": {
                      "type": "CallExpression",
                      "start": 152,
                      "end": 159,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 152,
                        "end": 157,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 155,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "f",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "params": []
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
        "start": 108,
        "end": 115,
        "left": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 112,
          "end": 115,
          "decorators": [],
          "name": "Baz",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
