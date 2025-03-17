__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 23,
                  "end": 24,
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
            "start": 30,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 38,
              "end": 66,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 48,
                  "end": 60,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 51,
                    "name": "foo",
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
                    "start": 51,
                    "end": 59,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 53,
                      "end": 59
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
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 85,
            "name": "r",
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
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
