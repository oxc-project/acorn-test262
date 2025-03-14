main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
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
      "start": 33,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 51,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 48,
                "end": 51
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
      "start": 54,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
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
      "start": 132,
      "end": 166,
      "expression": {
        "type": "AssignmentExpression",
        "start": 133,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 133,
          "end": 159,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 135,
              "end": 157,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 140,
                "end": 157,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "ClassExpression",
                  "start": 144,
                  "end": 157,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 155,
                    "end": 157,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 144,
                      "end": 148,
                      "expression": {
                        "type": "Identifier",
                        "start": 145,
                        "end": 148,
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
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 162,
          "end": 164,
          "properties": []
        }
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
