__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 21,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 20,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 19,
          "end": 20,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 30,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 33,
            "end": 34,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 44,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 36,
        "end": 43,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 42,
          "end": 43,
          "raw": "4",
          "value": 4,
          "regex": null,
          "bigint": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 54,
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 59,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 71,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 61,
        "end": 70,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 61,
          "end": 65,
          "decorators": [],
          "name": "buzz",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 69,
          "end": 70,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 84,
            "end": 85,
            "raw": "8",
            "value": 8,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 94,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 87,
        "end": 93,
        "argument": {
          "type": "Identifier",
          "start": 87,
          "end": 91,
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 140,
        "end": 146,
        "argument": {
          "type": "Identifier",
          "start": 140,
          "end": 144,
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "--",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "UpdateExpression",
        "start": 161,
        "end": 167,
        "argument": {
          "type": "Identifier",
          "start": 163,
          "end": 167,
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 207,
      "end": 252,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 216,
          "end": 219,
          "exported": {
            "type": "Identifier",
            "start": 216,
            "end": 219,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 216,
            "end": 219,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 221,
          "end": 224,
          "exported": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 221,
            "end": 224,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 226,
          "end": 237,
          "exported": {
            "type": "Identifier",
            "start": 233,
            "end": 237,
            "decorators": [],
            "name": "quux",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 226,
            "end": 229,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 239,
          "end": 243,
          "exported": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 245,
          "end": 249,
          "exported": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
