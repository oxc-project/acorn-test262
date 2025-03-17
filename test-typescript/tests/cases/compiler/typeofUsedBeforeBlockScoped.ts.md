__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 83,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "value": 2,
              "raw": "2"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "TSTypeAliasDeclaration",
      "start": 86,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "name": "W",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 123,
            "name": "o2",
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
                  "name": "o",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 138,
                  "end": 140,
                  "value": 12,
                  "raw": "12"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
