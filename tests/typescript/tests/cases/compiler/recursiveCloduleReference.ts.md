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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 28,
                "end": 33
              },
              "abstract": false,
              "declare": false,
              "start": 20,
              "end": 33
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13,
            "end": 33
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 72,
                            "end": 73
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "M",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 76,
                              "end": 77
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 78,
                              "end": 79
                            },
                            "optional": false,
                            "computed": false,
                            "start": 76,
                            "end": 79
                          },
                          "definite": false,
                          "start": 72,
                          "end": 79
                        }
                      ],
                      "declare": false,
                      "start": 68,
                      "end": 79
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 61,
                    "end": 79
                  }
                ],
                "start": 55,
                "end": 83
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 43,
              "end": 83
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 36,
            "end": 83
          },
          {
            "type": "EmptyStatement",
            "start": 83,
            "end": 84
          }
        ],
        "start": 9,
        "end": 86
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "EmptyStatement",
      "start": 86,
      "end": 87
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
