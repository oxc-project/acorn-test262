__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
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
      "end": 121,
      "expression": {
        "type": "AssignmentExpression",
        "start": 101,
        "end": 120,
        "operator": "??=",
        "left": {
          "type": "Identifier",
          "start": 101,
          "end": 102,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "right": {
          "type": "ClassExpression",
          "start": 107,
          "end": 120,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 118,
            "end": 120,
            "body": []
          },
          "declare": false,
          "decorators": [
            {
              "type": "Decorator",
              "start": 107,
              "end": 111,
              "expression": {
                "type": "Identifier",
                "start": 108,
                "end": 111,
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
