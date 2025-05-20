__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 102,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 74,
            "end": 81,
            "properties": [
              {
                "type": "Property",
                "start": 75,
                "end": 80,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 78,
                  "end": 80,
                  "raw": "12",
                  "value": 12
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 102,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 83,
        "end": 101,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 83,
          "end": 97,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 83,
            "end": 89,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 97,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
  "start": 50,
  "end": 98,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 64,
            "end": 73,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 65,
                "end": 72,
                "properties": [
                  {
                    "type": "Property",
                    "start": 66,
                    "end": 71,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 69,
                      "end": 71,
                      "raw": "12",
                      "value": 12
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 98,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 75,
        "end": 97,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 75,
          "end": 89,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 75,
            "end": 81,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 89,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 92,
          "end": 97,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
