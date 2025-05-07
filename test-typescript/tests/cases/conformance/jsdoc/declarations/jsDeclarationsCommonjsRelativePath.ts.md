__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 28,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 25,
        "decorators": [],
        "name": "Thing",
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
      "start": 29,
      "end": 55,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 29,
        "end": 55,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 29,
          "end": 43,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 46,
          "end": 55,
          "properties": [
            {
              "type": "Property",
              "start": 48,
              "end": 53,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 53,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 48,
                "end": 53,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
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
  "end": 79,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 28,
            "end": 52,
            "computed": false,
            "object": {
              "type": "CallExpression",
              "start": 28,
              "end": 46,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 36,
                  "end": 45,
                  "raw": "'./thing'",
                  "value": "./thing",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 28,
                "end": 35,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 53,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 53,
          "end": 67,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 53,
            "end": 59,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 60,
            "end": 67,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 70,
          "end": 79,
          "properties": [
            {
              "type": "Property",
              "start": 72,
              "end": 77,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 77,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 72,
                "end": 77,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
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
