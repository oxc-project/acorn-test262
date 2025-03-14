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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "T",
        "optional": false
      },
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
              "optional": false
            }
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
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
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
              "optional": false
            }
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
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            }
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 85,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 85,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 83,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 81,
              "end": 82,
              "raw": "2",
              "value": 2
            }
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 86,
      "end": 106,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "W",
        "optional": false
      },
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
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "n",
            "optional": false
          }
        }
      }
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
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "o",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 138,
                  "end": 140,
                  "raw": "12",
                  "value": 12
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
