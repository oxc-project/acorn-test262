__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 63,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 63,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 62,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 62,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 54,
                      "end": 62,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 56,
                        "end": 62
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 77,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 78,
        "end": 145,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 94,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 93,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 92,
                  "end": 93,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 99,
            "end": 143,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 117,
              "end": 143,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 127,
                  "end": 137,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 130,
                      "end": 136
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
