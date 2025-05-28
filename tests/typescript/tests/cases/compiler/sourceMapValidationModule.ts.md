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
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 20,
                "end": 26,
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
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null
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
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 86,
                        "end": 92,
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
                          "value": 30,
                          "raw": "30"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
                "decorators": [],
                "name": "foo",
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
                        "decorators": [],
                        "name": "m4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
