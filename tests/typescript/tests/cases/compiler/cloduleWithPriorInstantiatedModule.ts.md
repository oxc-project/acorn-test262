__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 238,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 38,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 54,
        "decorators": [],
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 55,
        "end": 138,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 61,
            "end": 120,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 68,
              "end": 120,
              "id": {
                "type": "Identifier",
                "start": 78,
                "end": 91,
                "decorators": [],
                "name": "Someinterface",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 92,
                "end": 120,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 102,
                    "end": 114,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 105,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 109,
                        "end": 113
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 125,
            "end": 136,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 129,
                "end": 135,
                "id": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 133,
                  "end": 135,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 140,
      "end": 159,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 155,
        "decorators": [],
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 159,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 185,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 201,
        "decorators": [],
        "name": "Moclodule",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 202,
        "end": 238,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 208,
            "end": 236,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 215,
              "end": 236,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 221,
                "end": 228,
                "decorators": [],
                "name": "Manager",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 229,
                "end": 236,
                "body": []
              },
              "abstract": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
