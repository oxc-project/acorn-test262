__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 56,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 56,
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
                  "name": "x",
                  "optional": false
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
            "type": "ExportNamedDeclaration",
            "start": 32,
            "end": 54,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 39,
              "end": 54,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 47,
                "end": 54,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 57,
      "end": 94,
      "body": {
        "type": "TSModuleBlock",
        "start": 67,
        "end": 94,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 73,
            "end": 92,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 77,
                "end": 91,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 81,
                  "end": 91,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 85,
                    "end": 89,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 87,
                      "decorators": [],
                      "name": "m1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
