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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 37,
            "name": "__decorate",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 37,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
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
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 44,
      "end": 62,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 51,
        "end": 62,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 59,
          "end": 62,
          "body": []
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 39,
            "end": 43,
            "expression": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
