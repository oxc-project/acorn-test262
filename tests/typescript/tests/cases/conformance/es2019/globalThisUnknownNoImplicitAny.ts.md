__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 43,
            "decorators": [],
            "name": "win",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 43,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 17,
                "end": 43,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 17,
                    "end": 23,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 23,
                      "decorators": [],
                      "name": "Window",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeQuery",
                    "start": 26,
                    "end": 43,
                    "exprName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 43,
                      "decorators": [],
                      "name": "globalThis",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 79,
      "end": 85,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 79,
        "end": 85,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 79,
          "end": 82,
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 83,
          "end": 85,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 93,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 86,
        "end": 93,
        "computed": false,
        "object": {
          "type": "ThisExpression",
          "start": 86,
          "end": 90
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 91,
          "end": 93,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 107,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 94,
        "end": 107,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 94,
          "end": 104,
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 105,
          "end": 107,
          "decorators": [],
          "name": "hi",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 109,
      "end": 118,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 109,
        "end": 118,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 109,
          "end": 112,
          "decorators": [],
          "name": "win",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 113,
          "end": 117,
          "raw": "'hi'",
          "value": "hi"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 119,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 119,
        "end": 129,
        "computed": true,
        "object": {
          "type": "ThisExpression",
          "start": 119,
          "end": 123
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 124,
          "end": 128,
          "raw": "'hi'",
          "value": "hi"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 130,
        "end": 146,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 130,
          "end": 140,
          "decorators": [],
          "name": "globalThis",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 141,
          "end": 145,
          "raw": "'hi'",
          "value": "hi"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
