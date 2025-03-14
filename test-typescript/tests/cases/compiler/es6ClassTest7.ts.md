__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 30,
              "end": 47,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 40,
                "end": 47,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "Foo",
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 78,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 78,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 60,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 69,
        "end": 74,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "M",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 71,
          "end": 74,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
