main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
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
      "type": "ClassDeclaration",
      "start": 95,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 130,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 121,
              "end": 125,
              "name": "foo"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 130,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 128,
                "end": 130,
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
      "decorators": [
        {
          "type": "Decorator",
          "start": 95,
          "end": 99,
          "expression": {
            "type": "Identifier",
            "start": 96,
            "end": 99,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
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
