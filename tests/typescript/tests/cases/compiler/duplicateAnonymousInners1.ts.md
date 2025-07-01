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
        "start": 7,
        "end": 10
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
              "start": 24,
              "end": 30
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 31,
              "end": 39
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 39
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
              "start": 55,
              "end": 60
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 61,
              "end": 63
            },
            "abstract": false,
            "declare": false,
            "start": 49,
            "end": 63
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
                    "start": 128,
                    "end": 133
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 134,
                    "end": 135
                  },
                  "definite": false,
                  "start": 128,
                  "end": 135
                }
              ],
              "declare": false,
              "start": 124,
              "end": 136
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 117,
            "end": 136
          }
        ],
        "start": 11,
        "end": 138
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 138
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 151
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
              "start": 199,
              "end": 205
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 206,
              "end": 214
            },
            "abstract": false,
            "declare": false,
            "start": 193,
            "end": 214
          }
        ],
        "start": 152,
        "end": 314
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 141,
      "end": 314
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 314
}
```
