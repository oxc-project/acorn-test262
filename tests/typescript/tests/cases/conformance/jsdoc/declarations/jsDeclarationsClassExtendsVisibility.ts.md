__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 34,
      "expression": {
        "type": "AssignmentExpression",
        "start": 13,
        "end": 33,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 13,
          "end": 27,
          "object": {
            "type": "Identifier",
            "start": 13,
            "end": 19,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 20,
            "end": 27,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 30,
          "end": 33,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
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
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 28,
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 19,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 20,
                "end": 27,
                "value": "./bar",
                "raw": "\"./bar\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 73,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 46,
            "end": 72,
            "properties": [
              {
                "type": "Property",
                "start": 52,
                "end": 58,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 55,
                  "end": 58,
                  "value": "A",
                  "raw": "\"A\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 64,
                "end": 70,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 67,
                  "end": 70,
                  "value": "B",
                  "raw": "\"B\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 98,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 98,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 120,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 119,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 99,
          "end": 113,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 105,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 113,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 154,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 153,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 121,
          "end": 143,
          "object": {
            "type": "MemberExpression",
            "start": 121,
            "end": 135,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 127,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 128,
              "end": 135,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 136,
            "end": 143,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 146,
          "end": 153,
          "decorators": [],
          "name": "Strings",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
