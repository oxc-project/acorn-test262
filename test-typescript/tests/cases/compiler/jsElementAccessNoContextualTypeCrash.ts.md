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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 55,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 54,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 17,
          "end": 31,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 17,
            "end": 21,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 22,
            "end": 30,
            "raw": "'Common'",
            "value": "Common",
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 34,
          "end": 54,
          "operator": "||",
          "left": {
            "type": "MemberExpression",
            "start": 34,
            "end": 48,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 34,
              "end": 38,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 39,
              "end": 47,
              "raw": "'Common'",
              "value": "Common",
              "regex": null,
              "bigint": null
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 52,
            "end": 54,
            "properties": []
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 169,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 110,
        "end": 168,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 110,
          "end": 125,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 110,
            "end": 116,
            "decorators": [],
            "name": "Common",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 125,
            "decorators": [],
            "name": "localize",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 128,
          "end": 168,
          "async": false,
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
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
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
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
