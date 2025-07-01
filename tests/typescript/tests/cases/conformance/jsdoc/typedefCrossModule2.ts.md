__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 48
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 49,
        "end": 52
      },
      "abstract": false,
      "declare": false,
      "start": 39,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 110
          },
          "optional": false,
          "computed": false,
          "start": 99,
          "end": 110
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 119,
            "end": 122
          },
          "abstract": false,
          "declare": false,
          "start": 113,
          "end": 122
        },
        "start": 99,
        "end": 122
      },
      "directive": null,
      "start": 99,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 159
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 160,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 153,
          "end": 167
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 179
              },
              "value": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 187,
                  "end": 190
                },
                "abstract": false,
                "declare": false,
                "start": 181,
                "end": 190
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 176,
              "end": 190
            }
          ],
          "start": 170,
          "end": 192
        },
        "start": 153,
        "end": 192
      },
      "directive": null,
      "start": 153,
      "end": 192
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
            "name": "Qux",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 237
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 240,
            "end": 241
          },
          "definite": false,
          "start": 234,
          "end": 241
        }
      ],
      "declare": false,
      "start": 230,
      "end": 242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 281
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Quid",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 286
          },
          "optional": false,
          "computed": false,
          "start": 274,
          "end": 286
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 289,
          "end": 290
        },
        "start": 274,
        "end": 290
      },
      "directive": null,
      "start": 274,
      "end": 291
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 330
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 338
          },
          "optional": false,
          "computed": false,
          "start": 324,
          "end": 338
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Quack",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 352
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 354,
                "end": 355
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 347,
              "end": 355
            }
          ],
          "start": 341,
          "end": 357
        },
        "start": 324,
        "end": 357
      },
      "directive": null,
      "start": 324,
      "end": 357
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 39,
  "end": 358
}
```
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
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./mod1.js",
                "raw": "'./mod1.js'",
                "start": 18,
                "end": 29
              }
            ],
            "optional": false,
            "start": 10,
            "end": 30
          },
          "definite": false,
          "start": 4,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 75,
          "end": 76
        }
      ],
      "declare": false,
      "start": 71,
      "end": 77
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
            "name": "bb",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 105,
          "end": 107
        }
      ],
      "declare": false,
      "start": 101,
      "end": 108
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
            "name": "bbb",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 116
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mod",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 126
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "optional": false,
              "computed": false,
              "start": 123,
              "end": 130
            },
            "typeArguments": null,
            "arguments": [],
            "start": 119,
            "end": 132
          },
          "definite": false,
          "start": 113,
          "end": 132
        }
      ],
      "declare": false,
      "start": 109,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
