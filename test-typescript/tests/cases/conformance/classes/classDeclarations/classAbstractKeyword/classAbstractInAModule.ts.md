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
      "end": 75,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 75,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 41,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 41,
              "abstract": true,
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 41,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 73,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 53,
              "end": 73,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 71,
                "end": 73,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "A",
                "optional": false
              }
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
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 85,
      "expression": {
        "type": "NewExpression",
        "start": 77,
        "end": 84,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 81,
          "end": 84,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 94,
      "expression": {
        "type": "NewExpression",
        "start": 86,
        "end": 93,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 90,
          "end": 93,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
