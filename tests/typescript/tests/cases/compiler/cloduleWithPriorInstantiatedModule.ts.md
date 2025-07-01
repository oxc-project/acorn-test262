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
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 54
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Someinterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 91
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 105
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 109,
                        "end": 113
                      },
                      "start": 107,
                      "end": 113
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 102,
                    "end": 114
                  }
                ],
                "start": 92,
                "end": 120
              },
              "declare": false,
              "start": 68,
              "end": 120
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 61,
            "end": 120
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 130
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 133,
                  "end": 135
                },
                "definite": false,
                "start": 129,
                "end": 135
              }
            ],
            "declare": false,
            "start": 125,
            "end": 136
          }
        ],
        "start": 55,
        "end": 138
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 38,
      "end": 138
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 155
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 156,
        "end": 159
      },
      "abstract": false,
      "declare": false,
      "start": 140,
      "end": 159
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 201
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Manager",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 228
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 229,
                "end": 236
              },
              "abstract": false,
              "declare": false,
              "start": 215,
              "end": 236
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 208,
            "end": 236
          }
        ],
        "start": 202,
        "end": 238
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 185,
      "end": 238
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 238
}
```
