__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 44,
      "expression": {
        "type": "AssignmentExpression",
        "start": 18,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 18,
          "end": 26,
          "object": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "TemplateLiteral",
            "start": 22,
            "end": 25,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 22,
                "end": 25,
                "value": {
                  "raw": "b",
                  "cooked": "b"
                },
                "tail": true
              }
            ],
            "expressions": []
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "FunctionExpression",
          "start": 29,
          "end": 43,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 41,
            "end": 43,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 58,
        "end": 74,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 64,
          "end": 74,
          "exprName": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
