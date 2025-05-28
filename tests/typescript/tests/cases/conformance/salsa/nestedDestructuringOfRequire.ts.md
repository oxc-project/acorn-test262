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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 30,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 24,
                  "decorators": [],
                  "name": "grey",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 26,
                  "end": 28,
                  "properties": []
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
      "type": "ExpressionStatement",
      "start": 32,
      "end": 60,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 60,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 32,
          "end": 52,
          "object": {
            "type": "MemberExpression",
            "start": 32,
            "end": 46,
            "object": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 46,
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
            "start": 47,
            "end": 52,
            "decorators": [],
            "name": "chalk",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
  "end": 61,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 49,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 29,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 12,
                "end": 27,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 17,
                  "decorators": [],
                  "name": "chalk",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 19,
                  "end": 27,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 21,
                      "end": 25,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 25,
                        "decorators": [],
                        "name": "grey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 25,
                        "decorators": [],
                        "name": "grey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 32,
            "end": 49,
            "callee": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 40,
                "end": 48,
                "value": "./mod1",
                "raw": "'./mod1'"
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 55,
      "expression": {
        "type": "Identifier",
        "start": 51,
        "end": 55,
        "decorators": [],
        "name": "grey",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 61,
      "expression": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "decorators": [],
        "name": "chalk",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
