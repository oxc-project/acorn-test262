__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 9,
        "end": 54,
        "types": [
          {
            "type": "TSTypeQuery",
            "start": 9,
            "end": 17,
            "exprName": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeQuery",
            "start": 20,
            "end": 30,
            "exprName": {
              "type": "TSQualifiedName",
              "start": 27,
              "end": 30,
              "left": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeQuery",
            "start": 33,
            "end": 41,
            "exprName": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeQuery",
            "start": 44,
            "end": 54,
            "exprName": {
              "type": "TSQualifiedName",
              "start": 51,
              "end": 54,
              "left": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 85,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 83,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": true,
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
      "type": "TSTypeAliasDeclaration",
      "start": 86,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "W",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 95,
        "end": 105,
        "exprName": {
          "type": "TSQualifiedName",
          "start": 102,
          "end": 105,
          "left": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 124,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 123,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 115,
                "end": 123,
                "exprName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 143,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 133,
            "end": 142,
            "properties": [
              {
                "type": "Property",
                "start": 135,
                "end": 140,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 138,
                  "end": 140,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
