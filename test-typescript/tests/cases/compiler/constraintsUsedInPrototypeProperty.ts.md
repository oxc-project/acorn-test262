constraintsUsedInPrototypeProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 52,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 26,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 20,
              "end": 26
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 47,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 41,
              "end": 47
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 67,
      "expression": {
        "type": "MemberExpression",
        "start": 53,
        "end": 66,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 53,
          "end": 56,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 57,
          "end": 66,
          "decorators": [],
          "name": "prototype",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
