__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 314,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 138,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 18,
            "end": 39,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "decorators": [],
              "name": "Helper",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 31,
              "end": 39,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 49,
            "end": 63,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 60,
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 61,
              "end": 63,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 117,
            "end": 136,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 124,
              "end": 136,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 128,
                  "end": 135,
                  "id": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 133,
                    "decorators": [],
                    "name": "Outer",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 134,
                    "end": 135,
                    "value": 0,
                    "raw": "0"
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
      "type": "TSModuleDeclaration",
      "start": 141,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 152,
        "end": 314,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 193,
            "end": 214,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 199,
              "end": 205,
              "decorators": [],
              "name": "Helper",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 206,
              "end": 214,
              "body": []
            },
            "abstract": false,
            "declare": false
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
