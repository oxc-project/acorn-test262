__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 37,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 35,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 35,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 35,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "B",
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 69,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 69,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "ChainExpression",
        "start": 62,
        "end": 66,
        "expression": {
          "type": "MemberExpression",
          "start": 62,
          "end": 66,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 107,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 107,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 88,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 100,
          "end": 104,
          "expression": {
            "type": "ChainExpression",
            "start": 100,
            "end": 104,
            "expression": {
              "type": "MemberExpression",
              "start": 100,
              "end": 104,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
