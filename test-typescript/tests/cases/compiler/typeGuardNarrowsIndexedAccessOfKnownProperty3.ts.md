__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 45,
        "types": [
          {
            "type": "TSArrayType",
            "start": 11,
            "end": 33,
            "elementType": {
              "type": "TSUnionType",
              "start": 12,
              "end": 30,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 12,
                  "end": 18
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 21,
                  "end": 30
                }
              ]
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 36,
            "end": 45
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 62,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 65,
            "end": 74,
            "elements": [
              {
                "type": "Literal",
                "start": 66,
                "end": 67,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 69,
                "end": 70,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 72,
                "end": 73,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 87,
            "decorators": [],
            "name": "index",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 90,
            "end": 91,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 94,
      "end": 192,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 164,
        "end": 192,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 170,
            "end": 180,
            "expression": {
              "type": "MemberExpression",
              "start": 170,
              "end": 180,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 170,
                "end": 173,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "decorators": [],
                "name": "index",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 98,
        "end": 162,
        "operator": "&&",
        "left": {
          "type": "LogicalExpression",
          "start": 98,
          "end": 143,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 98,
            "end": 115,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 106,
              "end": 115,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          },
          "right": {
            "type": "BinaryExpression",
            "start": 119,
            "end": 143,
            "operator": "!==",
            "left": {
              "type": "MemberExpression",
              "start": 119,
              "end": 129,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 119,
                "end": 122,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 123,
                "end": 128,
                "decorators": [],
                "name": "index",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 134,
              "end": 143,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 147,
          "end": 162,
          "operator": ">=",
          "left": {
            "type": "MemberExpression",
            "start": 147,
            "end": 157,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 151,
              "end": 156,
              "decorators": [],
              "name": "index",
              "optional": false
            }
          },
          "right": {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "raw": "0",
            "value": 0
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
