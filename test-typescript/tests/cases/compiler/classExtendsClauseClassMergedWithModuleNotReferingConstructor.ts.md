classExtendsClauseClassMergedWithModuleNotReferingConstructor.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 65,
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 65,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 63,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 63,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 62,
                  "definite": false,
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
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 67,
      "end": 145,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 92,
                  "end": 93,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ClassDeclaration",
            "start": 99,
            "end": 143,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 117,
              "end": 143,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 127,
                  "end": 137,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 77,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
