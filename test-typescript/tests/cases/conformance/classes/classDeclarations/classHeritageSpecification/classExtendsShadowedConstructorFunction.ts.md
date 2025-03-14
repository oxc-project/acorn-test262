classExtendsShadowedConstructorFunction.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 26,
      "end": 154,
      "body": {
        "type": "TSModuleBlock",
        "start": 35,
        "end": 154,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 41,
            "end": 51,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 45,
                "end": 50,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 49,
                  "end": 50,
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
            "start": 56,
            "end": 152,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 74,
              "end": 152,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 134,
                  "end": 146,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 137,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 137,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 139,
                      "end": 145
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
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
