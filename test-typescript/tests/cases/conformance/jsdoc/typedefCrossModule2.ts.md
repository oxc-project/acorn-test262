__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 358,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 52,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 122,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 122,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 99,
          "end": 110,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 106,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 110,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 113,
          "end": 122,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 119,
            "end": 122,
            "body": []
          },
          "declare": false,
          "decorators": [],
          "id": null,
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 192,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 153,
          "end": 167,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 153,
            "end": 159,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 160,
            "end": 167,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 170,
          "end": 192,
          "properties": [
            {
              "type": "Property",
              "start": 176,
              "end": 190,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 176,
                "end": 179,
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ClassExpression",
                "start": 181,
                "end": 190,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 187,
                  "end": 190,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 237,
            "decorators": [],
            "name": "Qux",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 240,
            "end": 241,
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
      "start": 274,
      "end": 291,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 274,
        "end": 290,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 274,
          "end": 286,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 274,
            "end": 281,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 282,
            "end": 286,
            "decorators": [],
            "name": "Quid",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 289,
          "end": 290,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 357,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 357,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 324,
          "end": 338,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 330,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 331,
            "end": 338,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 341,
          "end": 357,
          "properties": [
            {
              "type": "Property",
              "start": 347,
              "end": 355,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 347,
                "end": 352,
                "decorators": [],
                "name": "Quack",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 354,
                "end": 355,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
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
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 10,
            "end": 30,
            "arguments": [
              {
                "type": "Literal",
                "start": 18,
                "end": 29,
                "raw": "'./mod1.js'",
                "value": "./mod1.js",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 10,
              "end": 17,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 116,
            "decorators": [],
            "name": "bbb",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 119,
            "end": 132,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 123,
              "end": 130,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 123,
                "end": 126,
                "decorators": [],
                "name": "mod",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 127,
                "end": 130,
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
