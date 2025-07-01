__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 18
            },
            "typeArguments": null,
            "start": 11,
            "end": 18
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FooArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 29
            },
            "typeArguments": null,
            "start": 21,
            "end": 29
          }
        ],
        "start": 11,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 46,
            "end": 52
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 55,
              "end": 60
            },
            "start": 55,
            "end": 60
          }
        ],
        "start": 46,
        "end": 60
      },
      "declare": false,
      "start": 31,
      "end": 61
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 75
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 85
          },
          "typeArguments": null,
          "start": 78,
          "end": 85
        },
        "start": 78,
        "end": 87
      },
      "declare": false,
      "start": 62,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 111
                },
                "typeArguments": null,
                "start": 108,
                "end": 111
              },
              "start": 106,
              "end": 111
            },
            "start": 102,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 111
        }
      ],
      "declare": true,
      "start": 90,
      "end": 112
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 134
                },
                "typeArguments": null,
                "start": 131,
                "end": 134
              },
              "start": 129,
              "end": 134
            },
            "start": 125,
            "end": 134
          },
          "init": null,
          "definite": false,
          "start": 125,
          "end": 134
        }
      ],
      "declare": true,
      "start": 113,
      "end": 135
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 140
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "SpreadElement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 160
                    },
                    "optional": false,
                    "computed": false,
                    "start": 147,
                    "end": 160
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 165
                    }
                  ],
                  "optional": false,
                  "start": 147,
                  "end": 166
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 173
                },
                "alternate": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 181
                    }
                  ],
                  "start": 176,
                  "end": 182
                },
                "start": 147,
                "end": 182
              },
              "start": 144,
              "end": 182
            }
          ],
          "start": 143,
          "end": 183
        },
        "start": 136,
        "end": 183
      },
      "directive": null,
      "start": 136,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
