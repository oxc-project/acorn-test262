__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "chalk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 14,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 20,
                "end": 28,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 24,
                  "decorators": [],
                  "name": "grey",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 26,
                  "end": 28,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 32,
          "end": 52,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 32,
            "end": 46,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 46,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 47,
            "end": 52,
            "decorators": [],
            "name": "chalk",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 55,
          "end": 60,
          "decorators": [],
          "name": "chalk",
          "optional": false,
          "typeAnnotation": null
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
  "end": 61,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 49,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 29,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 27,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 17,
                  "decorators": [],
                  "name": "chalk",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 19,
                  "end": 27,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 21,
                      "end": 25,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 25,
                        "decorators": [],
                        "name": "grey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 25,
                        "decorators": [],
                        "name": "grey",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 32,
            "end": 49,
            "arguments": [
              {
                "type": "Literal",
                "start": 40,
                "end": 48,
                "raw": "'./mod1'",
                "value": "./mod1",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
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
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 55,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "grey",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 61,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "decorators": [],
        "name": "chalk",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
