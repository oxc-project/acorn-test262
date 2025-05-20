__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 38,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 16,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 20,
                "end": 26,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 24,
                  "end": 26,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 32,
            "end": 36,
            "directive": null,
            "expression": {
              "type": "UpdateExpression",
              "start": 32,
              "end": 35,
              "argument": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 39,
      "end": 157,
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 157,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 55,
            "end": 99,
            "body": {
              "type": "TSModuleBlock",
              "start": 65,
              "end": 99,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 75,
                  "end": 93,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 82,
                    "end": 93,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 86,
                        "end": 92,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 90,
                          "end": 92,
                          "raw": "30",
                          "value": 30
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
              "type": "Identifier",
              "start": 62,
              "end": 64,
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "module"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 105,
            "end": 155,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 112,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 155,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 137,
                    "end": 149,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 144,
                      "end": 148,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 121,
                "end": 124,
                "decorators": [],
                "name": "foo",
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
        "type": "Identifier",
        "start": 46,
        "end": 48,
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
