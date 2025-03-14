emptyTypeArgumentListWithNew.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 16,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
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
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 29,
      "expression": {
        "type": "NewExpression",
        "start": 17,
        "end": 28,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 24,
          "end": 26,
          "params": []
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 104,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 104,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 101,
        "decorators": [],
        "name": "noParams",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 122,
      "expression": {
        "type": "NewExpression",
        "start": 105,
        "end": 121,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 109,
          "end": 117,
          "decorators": [],
          "name": "noParams",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 117,
          "end": 119,
          "params": []
        }
      }
    }
  ],
  "sourceType": "script"
}
```
