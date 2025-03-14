__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 44,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 44,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 42,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 32,
              "end": 42,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 42,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "C",
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
        "type": "TSQualifiedName",
        "start": 15,
        "end": 18,
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 16,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 46,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "ab",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 58,
        "end": 61,
        "left": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 87,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 80,
        "end": 84,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 80,
          "end": 82,
          "decorators": [],
          "name": "ab",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 83,
          "end": 84,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 113,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 110,
        "end": 113,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 105,
        "end": 110,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 105,
          "end": 108,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 109,
          "end": 110,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
