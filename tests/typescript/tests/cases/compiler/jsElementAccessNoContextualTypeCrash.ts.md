__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Common",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 13,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 21
          },
          "property": {
            "type": "Literal",
            "value": "Common",
            "raw": "'Common'",
            "start": 22,
            "end": 30
          },
          "optional": false,
          "computed": true,
          "start": 17,
          "end": 31
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 38
            },
            "property": {
              "type": "Literal",
              "value": "Common",
              "raw": "'Common'",
              "start": 39,
              "end": 47
            },
            "optional": false,
            "computed": true,
            "start": 34,
            "end": 48
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 52,
            "end": 54
          },
          "start": 34,
          "end": 54
        },
        "start": 17,
        "end": 54
      },
      "directive": null,
      "start": 17,
      "end": 55
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
            "name": "Common",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 116
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "localize",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 125
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 125
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 144
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 165
                },
                "start": 152,
                "end": 166
              }
            ],
            "start": 146,
            "end": 168
          },
          "expression": false,
          "start": 128,
          "end": 168
        },
        "start": 110,
        "end": 168
      },
      "directive": null,
      "start": 110,
      "end": 169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
