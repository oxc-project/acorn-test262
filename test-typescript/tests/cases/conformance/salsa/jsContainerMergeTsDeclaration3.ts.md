__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 18,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 13,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 15,
      "end": 25,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 15,
        "end": 24,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 15,
          "end": 18,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 21,
          "end": 24,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
