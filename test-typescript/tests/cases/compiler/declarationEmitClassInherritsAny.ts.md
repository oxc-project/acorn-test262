declarationEmitClassInherritsAny.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "anyThing",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 17,
            "end": 32,
            "expression": {
              "type": "ClassExpression",
              "start": 17,
              "end": 25,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 23,
                "end": 25,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 70,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 41,
        "end": 70,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 68,
          "end": 70,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 59,
          "end": 67,
          "decorators": [],
          "name": "anyThing",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
