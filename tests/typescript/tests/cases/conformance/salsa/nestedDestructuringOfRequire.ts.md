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
            "name": "chalk",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
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
                  "name": "grey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 24
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 26,
                  "end": 28
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 20,
                "end": 28
              }
            ],
            "start": 14,
            "end": 30
          },
          "definite": false,
          "start": 6,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 38
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 46
            },
            "optional": false,
            "computed": false,
            "start": 32,
            "end": 46
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "chalk",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 52
          },
          "optional": false,
          "computed": false,
          "start": 32,
          "end": 52
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "chalk",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 60
        },
        "start": 32,
        "end": 60
      },
      "directive": null,
      "start": 32,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 61
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
                  "name": "chalk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12,
                  "end": 17
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "grey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 21,
                        "end": 25
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "grey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 21,
                        "end": 25
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 21,
                      "end": 25
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 27
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 12,
                "end": 27
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 29
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 39
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./mod1",
                "raw": "'./mod1'",
                "start": 40,
                "end": 48
              }
            ],
            "optional": false,
            "start": 32,
            "end": 49
          },
          "definite": false,
          "start": 6,
          "end": 49
        }
      ],
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "grey",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 55
      },
      "directive": null,
      "start": 51,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "chalk",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 61
      },
      "directive": null,
      "start": 56,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
