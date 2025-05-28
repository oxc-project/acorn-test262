__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 75,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 74,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 69,
                "end": 70,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 72,
                "end": 73,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 92,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 87,
            "decorators": [],
            "name": "index",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 90,
            "end": 91,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 94,
      "end": 192,
      "test": {
        "type": "LogicalExpression",
        "start": 98,
        "end": 162,
        "left": {
          "type": "LogicalExpression",
          "start": 98,
          "end": 143,
          "left": {
            "type": "BinaryExpression",
            "start": 98,
            "end": 115,
            "left": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 106,
              "end": 115,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "start": 119,
            "end": 143,
            "left": {
              "type": "MemberExpression",
              "start": 119,
              "end": 129,
              "object": {
                "type": "Identifier",
                "start": 119,
                "end": 122,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 123,
                "end": 128,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 134,
              "end": 143,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "start": 147,
          "end": 162,
          "left": {
            "type": "MemberExpression",
            "start": 147,
            "end": 157,
            "object": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 151,
              "end": 156,
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "operator": ">=",
          "right": {
            "type": "Literal",
            "start": 161,
            "end": 162,
            "value": 0,
            "raw": "0"
          }
        }
      },
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
              "object": {
                "type": "Identifier",
                "start": 170,
                "end": 173,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
