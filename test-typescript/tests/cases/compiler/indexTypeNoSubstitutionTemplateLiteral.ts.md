__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "TemplateLiteral",
            "start": 22,
            "end": 25,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 22,
                "end": 25,
                "value": {
                  "cooked": "b",
                  "raw": "b"
                },
                "tail": true
              }
            ]
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 29,
          "end": 43,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 41,
            "end": 43,
            "body": []
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
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
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
