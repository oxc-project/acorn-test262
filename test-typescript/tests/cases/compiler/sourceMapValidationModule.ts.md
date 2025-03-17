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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 24,
                  "end": 26,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 32,
            "end": 36,
            "expression": {
              "type": "UpdateExpression",
              "start": 32,
              "end": 35,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 39,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 48,
        "name": "m3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 157,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 55,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 64,
              "name": "m4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 65,
              "end": 99,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 75,
                  "end": 93,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 82,
                    "end": 93,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 86,
                        "end": 92,
                        "id": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 90,
                          "end": 92,
                          "value": 30,
                          "raw": "30"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "type": "ExportNamedDeclaration",
            "start": 105,
            "end": 155,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 112,
              "end": 155,
              "id": {
                "type": "Identifier",
                "start": 121,
                "end": 124,
                "name": "foo",
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
                      "object": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "name": "m4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
