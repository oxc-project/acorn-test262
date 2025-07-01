__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "hardline",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 54
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 63
                },
                "value": {
                  "type": "Literal",
                  "value": "hard",
                  "raw": "\"hard\"",
                  "start": 65,
                  "end": 71
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 59,
                "end": 71
              }
            ],
            "start": 57,
            "end": 73
          },
          "definite": false,
          "start": 46,
          "end": 73
        }
      ],
      "declare": false,
      "start": 40,
      "end": 73
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
            "start": 74,
            "end": 80
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 88
          },
          "optional": false,
          "computed": false,
          "start": 74,
          "end": 88
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
                "name": "hardline",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 103
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "hardline",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 103
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 95,
              "end": 103
            }
          ],
          "start": 91,
          "end": 105
        },
        "start": 74,
        "end": 105
      },
      "directive": null,
      "start": 74,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 40,
  "end": 107
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
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
                "name": "nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 27
              },
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "require",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 36
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "./first",
                    "raw": "'./first'",
                    "start": 37,
                    "end": 46
                  }
                ],
                "optional": false,
                "start": 29,
                "end": 47
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 21,
              "end": 47
            }
          ],
          "start": 17,
          "end": 49
        },
        "start": 0,
        "end": 49
      },
      "directive": null,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hardline",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 16
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hardline",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8,
                  "end": 16
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 8,
                "end": 16
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 18
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "./second",
                  "raw": "'./second'",
                  "start": 29,
                  "end": 39
                }
              ],
              "optional": false,
              "start": 21,
              "end": 40
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 47
            },
            "optional": false,
            "computed": false,
            "start": 21,
            "end": 47
          },
          "definite": false,
          "start": 6,
          "end": 47
        }
      ],
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "hardline",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 57
      },
      "directive": null,
      "start": 49,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 57
}
```
