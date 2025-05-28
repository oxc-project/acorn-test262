__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "Common",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 13,
            "end": 15,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 55,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 17,
          "end": 31,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 21,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 22,
            "end": 30,
            "value": "Common",
            "raw": "'Common'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "LogicalExpression",
          "start": 34,
          "end": 54,
          "left": {
            "type": "MemberExpression",
            "start": 34,
            "end": 48,
            "object": {
              "type": "Identifier",
              "start": 34,
              "end": 38,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 39,
              "end": 47,
              "value": "Common",
              "raw": "'Common'"
            },
            "optional": false,
            "computed": true
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "start": 52,
            "end": 54,
            "properties": []
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 169,
      "expression": {
        "type": "AssignmentExpression",
        "start": 110,
        "end": 168,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 110,
          "end": 125,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 116,
            "decorators": [],
            "name": "Common",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 125,
            "decorators": [],
            "name": "localize",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 128,
          "end": 168,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 138,
              "end": 144,
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 146,
            "end": 168,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 152,
                "end": 166,
                "argument": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 165,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
