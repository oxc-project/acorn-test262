__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 110,
  "end": 178,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 123,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 133,
            "end": 142,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 154,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 153,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 145,
          "end": 149,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 147,
            "end": 148,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "Literal",
          "start": 152,
          "end": 153,
          "raw": "4",
          "value": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
