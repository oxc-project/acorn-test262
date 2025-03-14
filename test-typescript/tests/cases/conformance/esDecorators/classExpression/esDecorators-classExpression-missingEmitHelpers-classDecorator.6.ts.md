main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
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
      "type": "ExpressionStatement",
      "start": 93,
      "end": 116,
      "expression": {
        "type": "ObjectExpression",
        "start": 94,
        "end": 114,
        "properties": [
          {
            "type": "Property",
            "start": 96,
            "end": 112,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 99,
              "end": 112,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 110,
                "end": 112,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 99,
                  "end": 103,
                  "expression": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 103,
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
        ]
      }
    }
  ],
  "sourceType": "module"
}
```
tslib.d.ts
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
  "sourceType": "module"
}
```
