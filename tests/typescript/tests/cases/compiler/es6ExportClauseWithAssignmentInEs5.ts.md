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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 10,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 19,
          "end": 20
        },
        "start": 13,
        "end": 20
      },
      "directive": null,
      "start": 13,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 30
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 33,
            "end": 34
          },
          "definite": false,
          "start": 27,
          "end": 34
        }
      ],
      "declare": false,
      "start": 23,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 39
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 42,
          "end": 43
        },
        "start": 36,
        "end": 43
      },
      "directive": null,
      "start": 36,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 54
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 57,
            "end": 59
          },
          "definite": false,
          "start": 50,
          "end": 59
        }
      ],
      "declare": false,
      "start": 46,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "buzz",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 65
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 69,
          "end": 70
        },
        "start": 61,
        "end": 70
      },
      "directive": null,
      "start": 61,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 81
          },
          "init": {
            "type": "Literal",
            "value": 8,
            "raw": "8",
            "start": 84,
            "end": 85
          },
          "definite": false,
          "start": 77,
          "end": 85
        }
      ],
      "declare": false,
      "start": 73,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 91
        },
        "start": 87,
        "end": 93
      },
      "directive": null,
      "start": 87,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 144
        },
        "start": 140,
        "end": 146
      },
      "directive": null,
      "start": 140,
      "end": 147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "bizz",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 167
        },
        "start": 161,
        "end": 167
      },
      "directive": null,
      "start": 161,
      "end": 168
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 219
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 219
          },
          "exportKind": "value",
          "start": 216,
          "end": 219
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 224
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 224
          },
          "exportKind": "value",
          "start": 221,
          "end": 224
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 229
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "quux",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 237
          },
          "exportKind": "value",
          "start": 226,
          "end": 237
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 243
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "buzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 243
          },
          "exportKind": "value",
          "start": 239,
          "end": 243
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bizz",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "exportKind": "value",
          "start": 245,
          "end": 249
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 207,
      "end": 252
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 252
}
```
