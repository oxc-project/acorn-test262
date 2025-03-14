__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "key",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 20,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 27,
            "decorators": [],
            "name": "value",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 32,
            "raw": "12",
            "value": 12
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 42,
        "end": 74,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 52,
          "end": 74,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 58,
              "end": 72,
              "computed": true,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 62,
                "decorators": [],
                "name": "key",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Identifier",
                "start": 66,
                "end": 71,
                "decorators": [],
                "name": "value",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
