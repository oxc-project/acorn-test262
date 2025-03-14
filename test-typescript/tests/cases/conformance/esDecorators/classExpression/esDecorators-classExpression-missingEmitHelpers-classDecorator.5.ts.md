__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
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
            "optional": false
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
      "end": 126,
      "expression": {
        "type": "AssignmentExpression",
        "start": 101,
        "end": 125,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 101,
          "end": 120,
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "start": 102,
              "end": 119,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "ClassExpression",
                "start": 106,
                "end": 119,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 117,
                  "end": 119,
                  "body": []
                },
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 106,
                    "end": 110,
                    "expression": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 110,
                      "decorators": [],
                      "name": "dec",
                      "optional": false
                    }
                  }
                ],
                "id": null,
                "implements": [],
                "superClass": null
              }
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 123,
          "end": 125,
          "elements": []
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
  "end": 10,
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
