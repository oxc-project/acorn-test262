recursiveBaseCheck4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 32,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 20,
        "end": 28,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 21,
            "end": 27
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "start": 33,
      "end": 46,
      "expression": {
        "type": "MemberExpression",
        "start": 33,
        "end": 45,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 34,
          "end": 39,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "M",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 41,
          "end": 45,
          "decorators": [],
          "name": "blah",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
