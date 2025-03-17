__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 37,
            "decorators": [],
            "name": "__decorate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 37,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 62,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 51,
        "end": 62,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 59,
          "end": 62,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 39,
            "end": 43,
            "expression": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 74,
            "end": 82,
            "properties": [
              {
                "type": "Property",
                "start": 76,
                "end": 80,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 94,
            "end": 102,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 96,
                "end": 100,
                "argument": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
