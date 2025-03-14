typeofModuleWithoutExports.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 68,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 68,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 15,
            "end": 25,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 24,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 23,
                  "end": 24,
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
            "start": 30,
            "end": 66,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 38,
              "end": 66,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 48,
                  "end": 60,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 51,
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
                    "start": 51,
                    "end": 59,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 53,
                      "end": 59
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
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 85,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 77,
                "end": 85,
                "exprName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
