__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 20,
            "end": 25,
            "object": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 35,
            "end": 43,
            "object": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 37,
              "end": 42,
              "value": "foo",
              "raw": "'foo'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 53,
            "end": 62,
            "callee": {
              "type": "MemberExpression",
              "start": 53,
              "end": 60,
              "object": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 55,
                "end": 59,
                "value": "fn",
                "raw": "'fn'"
              },
              "computed": true,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 72,
            "end": 81,
            "object": {
              "type": "MemberExpression",
              "start": 72,
              "end": 77,
              "object": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 77,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 91,
            "end": 99,
            "object": {
              "type": "MemberExpression",
              "start": 91,
              "end": 95,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 109,
            "end": 119,
            "object": {
              "type": "MemberExpression",
              "start": 109,
              "end": 115,
              "object": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 111,
                "end": 114,
                "value": "0",
                "raw": "'0'"
              },
              "computed": true,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
