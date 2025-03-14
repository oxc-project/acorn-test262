duplicateIdentifierDifferentSpelling.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 22,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 12,
              "end": 16,
              "raw": "0b11",
              "value": 3
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 21,
              "raw": "''",
              "value": ""
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 32,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "3",
              "value": 3
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 31,
              "raw": "''",
              "value": ""
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "X",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 44,
            "end": 63,
            "properties": [
              {
                "type": "Property",
                "start": 46,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 46,
                  "end": 50,
                  "raw": "0b11",
                  "value": 3
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 52,
                  "end": 54,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 56,
                "end": 61,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 56,
                  "end": 57,
                  "raw": "3",
                  "value": 3
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 59,
                  "end": 61,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
