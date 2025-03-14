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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": []
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
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
                "tail": true,
                "value": {
                  "cooked": "b",
                  "raw": "b"
                }
              }
            ]
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 29,
          "end": 43,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 41,
            "end": 43,
            "body": []
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": []
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 75,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
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
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
