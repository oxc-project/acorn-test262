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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 19,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 15,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 18,
          "end": 19,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 20,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 34,
        "decorators": [],
        "name": "alias",
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
        "start": 37,
        "end": 40,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 63,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 55,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 48,
            "end": 55,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
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
      "expression": {
        "type": "ImportExpression",
        "start": 0,
        "end": 20,
        "source": {
          "type": "Literal",
          "start": 7,
          "end": 19,
          "value": "./bug28014",
          "raw": "'./bug28014'"
        },
        "options": null,
        "phase": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
