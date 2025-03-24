__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 31,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 133,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 102,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 102,
          "end": 126,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 104,
              "end": 124,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 107,
                "end": 124,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ClassExpression",
                  "start": 111,
                  "end": 124,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 122,
                    "end": 124,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 111,
                      "end": 115,
                      "expression": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 115,
                        "decorators": [],
                        "name": "dec",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "id": null,
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 129,
          "end": 131,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 9,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
