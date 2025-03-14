main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
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
      "type": "ClassDeclaration",
      "start": 107,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 121,
            "end": 141,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 121,
                "end": 125,
                "expression": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 125,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 141,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
