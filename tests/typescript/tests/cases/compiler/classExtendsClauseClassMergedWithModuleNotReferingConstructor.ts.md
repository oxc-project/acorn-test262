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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 62,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 62,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 54,
                      "end": 62,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 56,
                        "end": 62
                      }
                    }
                  },
                  "init": null,
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
      "start": 67,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 77,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 93,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
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
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 99,
            "end": 143,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 117,
              "end": 143,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 127,
                  "end": 137,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
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
