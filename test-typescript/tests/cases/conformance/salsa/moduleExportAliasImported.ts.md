__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 19,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 19,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 15,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 18,
          "end": 19,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 40,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 40,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 34,
        "decorators": [],
        "name": "alias",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 55,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 55,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 58,
          "end": 63,
          "decorators": [],
          "name": "alias",
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
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 20,
      "directive": null,
      "expression": {
        "type": "ImportExpression",
        "start": 0,
        "end": 20,
        "options": null,
        "source": {
          "type": "Literal",
          "start": 7,
          "end": 19,
          "raw": "'./bug28014'",
          "value": "./bug28014"
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
