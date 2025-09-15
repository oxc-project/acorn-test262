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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
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
                "end": 41
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 41
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 41
          }
        ],
        "start": 13,
        "end": 43
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 43
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 60
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 65
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 69
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 64,
                      "end": 69
                    }
                  ],
                  "start": 62,
                  "end": 71
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 58,
                "end": 71
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 79
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 84
                      },
                      "value": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 88
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 89,
                          "end": 90
                        },
                        "optional": false,
                        "computed": false,
                        "start": 86,
                        "end": 90
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 83,
                      "end": 90
                    }
                  ],
                  "start": 81,
                  "end": 92
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 77,
                "end": 92
              }
            ],
            "start": 52,
            "end": 95
          },
          "definite": false,
          "start": 48,
          "end": 95
        }
      ],
      "declare": false,
      "start": 44,
      "end": 96
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
