__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Helper",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 33
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 34,
              "end": 42
            },
            "abstract": false,
            "declare": false,
            "start": 21,
            "end": 42
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 63
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 64,
              "end": 66
            },
            "abstract": false,
            "declare": false,
            "start": 52,
            "end": 66
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Outer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 136
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 137,
                    "end": 138
                  },
                  "definite": false,
                  "start": 131,
                  "end": 138
                }
              ],
              "declare": false,
              "start": 127,
              "end": 139
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 120,
            "end": 139
          }
        ],
        "start": 14,
        "end": 141
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 141
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 157
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Helper",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 211
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 212,
              "end": 220
            },
            "abstract": false,
            "declare": false,
            "start": 199,
            "end": 220
          }
        ],
        "start": 158,
        "end": 320
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 144,
      "end": 320
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 320
}
```
