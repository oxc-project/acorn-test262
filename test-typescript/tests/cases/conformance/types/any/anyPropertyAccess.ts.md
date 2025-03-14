anyPropertyAccess.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 20,
            "end": 25,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 35,
            "end": 43,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 37,
              "end": 42,
              "raw": "'foo'",
              "value": "foo"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 53,
            "end": 62,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 53,
              "end": 60,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 55,
                "end": 59,
                "raw": "'fn'",
                "value": "fn"
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 72,
            "end": 81,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 72,
              "end": 77,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 77,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "baz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 91,
            "end": 99,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 91,
              "end": 95,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "raw": "0",
                "value": 0
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 109,
            "end": 119,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 109,
              "end": 115,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 111,
                "end": 114,
                "raw": "'0'",
                "value": "0"
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 116,
              "end": 119,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
