__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 18,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 19,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 27,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 34,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 28,
        "end": 41,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 43,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 78,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 60,
            "end": 76,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 67,
              "end": 76,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 71,
                  "end": 76,
                  "id": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 76,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
