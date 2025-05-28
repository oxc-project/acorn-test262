__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 33,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 31,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 20,
              "end": 31,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 24,
                  "end": 30,
                  "id": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 28,
                    "end": 30,
                    "value": "",
                    "raw": "''"
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
      "type": "VariableDeclaration",
      "start": 35,
      "end": 46,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 43,
            "end": 45,
            "value": "",
            "raw": "''"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 47,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 58,
        "end": 61,
        "left": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
