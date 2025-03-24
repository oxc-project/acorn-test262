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
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 123,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 133,
            "end": 142,
            "callee": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 154,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 153,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 145,
          "end": 149,
          "object": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 147,
            "end": 148,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 152,
          "end": 153,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
