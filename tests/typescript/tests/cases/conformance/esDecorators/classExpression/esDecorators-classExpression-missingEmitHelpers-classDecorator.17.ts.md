__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              },
              "start": 26,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 23,
          "end": 31
        }
      ],
      "declare": true,
      "start": 11,
      "end": 32
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 48,
                "end": 51
              },
              "start": 46,
              "end": 51
            },
            "start": 45,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 51
        }
      ],
      "declare": true,
      "start": 33,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "init": null,
          "definite": false,
          "start": 58,
          "end": 59
        }
      ],
      "declare": false,
      "start": 54,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 137
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "right": {
                  "type": "ClassExpression",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 148
                      },
                      "start": 144,
                      "end": 148
                    }
                  ],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 155,
                    "end": 157
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 144,
                  "end": 157
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 157
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 135,
              "end": 157
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 159
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 162,
          "end": 164
        },
        "start": 133,
        "end": 164
      },
      "directive": null,
      "start": 132,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 167
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9
}
```
