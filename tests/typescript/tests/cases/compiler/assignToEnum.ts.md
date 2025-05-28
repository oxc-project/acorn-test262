__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 19,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 19,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 12,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 34,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 33,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 20,
          "end": 21,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 24,
          "end": 33,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 61,
      "expression": {
        "type": "AssignmentExpression",
        "start": 51,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 55,
          "end": 60,
          "object": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 82,
          "end": 87,
          "object": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 84,
            "end": 87,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 90,
          "end": 91,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 113,
          "end": 118,
          "object": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 121,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 123,
            "end": 126,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
