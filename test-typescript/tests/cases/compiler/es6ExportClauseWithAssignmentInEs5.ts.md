__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 253,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "value": 2,
            "raw": "2"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 21,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 20,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 20,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 33,
            "end": 34,
            "value": 3,
            "raw": "3"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 44,
      "expression": {
        "type": "AssignmentExpression",
        "start": 36,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 42,
          "end": 43,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 54,
            "name": "buzz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 59,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 71,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 70,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 61,
          "end": 65,
          "name": "buzz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 69,
          "end": 70,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "name": "bizz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 84,
            "end": 85,
            "value": 8,
            "raw": "8"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 94,
      "expression": {
        "type": "UpdateExpression",
        "start": 87,
        "end": 93,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 87,
          "end": 91,
          "name": "bizz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 147,
      "expression": {
        "type": "UpdateExpression",
        "start": 140,
        "end": 146,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 140,
          "end": 144,
          "name": "bizz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 168,
      "expression": {
        "type": "UpdateExpression",
        "start": 161,
        "end": 167,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 163,
          "end": 167,
          "name": "bizz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 207,
      "end": 252,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 216,
          "end": 219,
          "local": {
            "type": "Identifier",
            "start": 216,
            "end": 219,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 216,
            "end": 219,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 221,
          "end": 224,
          "local": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 226,
          "end": 237,
          "local": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 233,
            "end": 237,
            "name": "quux",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 239,
          "end": 243,
          "local": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "name": "buzz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "name": "buzz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 245,
          "end": 249,
          "local": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "name": "bizz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "name": "bizz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
