__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 87,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 87,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 43,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 43,
              "body": {
                "type": "TSInterfaceBody",
                "start": 36,
                "end": 43,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 35,
                "decorators": [],
                "name": "m1",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 48,
            "end": 85,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 55,
              "end": 85,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 78,
                "end": 85,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 61,
                "end": 63,
                "decorators": [],
                "name": "m2",
                "optional": false
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 75,
                  "end": 77,
                  "expression": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 77,
                    "decorators": [],
                    "name": "m1",
                    "optional": false
                  }
                }
              ],
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
      "type": "VariableDeclaration",
      "start": 88,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 98,
            "end": 109,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 102,
              "end": 107,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 102,
                "end": 104,
                "decorators": [],
                "name": "m1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 105,
                "end": 107,
                "decorators": [],
                "name": "m2",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
