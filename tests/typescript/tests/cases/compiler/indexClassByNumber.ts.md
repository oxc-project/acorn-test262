__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 119
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 120,
        "end": 123
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 123
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 140
            },
            "typeArguments": null,
            "arguments": [],
            "start": 133,
            "end": 142
          },
          "definite": false,
          "start": 129,
          "end": 142
        }
      ],
      "declare": false,
      "start": 125,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 147,
            "end": 148
          },
          "optional": false,
          "computed": true,
          "start": 145,
          "end": 149
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 152,
          "end": 153
        },
        "start": 145,
        "end": 153
      },
      "directive": null,
      "start": 145,
      "end": 154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 178
}
```
